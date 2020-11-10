import styled from "@emotion/styled";
import {
  AddressBookThirdPartyResultsProps,
  entityLookup,
  ThirdPartyAPIEntryProps,
  useAddressBook,
} from "@govtechsg/address-identity-resolver";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { Download, Search } from "react-feather";
import { useOverlayContext } from "../../common/context/OverlayContext";
import "../../index.css";
import { vars } from "../../styles";
import { TableStyle } from "../AddressResolver/AddressesTable";
import { AnchorLinkButtonSolidWhiteBlue } from "../UI/Button";
import { Dropdown, DropdownItem } from "../UI/Dropdown";
import { OverlayContent, OverlayContentProps } from "../UI/Overlay/OverlayContent";
import { Pagination } from "../UI/Pagination";
import { OverlayContentBaseStyle } from "./../UI/Overlay";
import { AddressBookLocal } from "./AddressBookLocal";
import { AddressBookThirdParty } from "./AddressBookThirdParty";
import { CsvUploadButton } from "./CsvUploadButton";

export interface AddressBookDropdownProps {
  name: string;
  endpoint: string;
  apiHeader: string;
  apiKey: string;
}

export interface AddressBookProps extends OverlayContentProps {
  onAddressSelected?: (newValue: string) => void;
  thirdPartyAPIEndpoints: ThirdPartyAPIEntryProps[];
  network: string;
}

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;

export const AddressBook = styled(
  ({ onAddressSelected, thirdPartyAPIEndpoints, network, ...props }: AddressBookProps) => {
    const { setOverlayVisible } = useOverlayContext();
    const { handleLocalAddressBookCsv, addressBook } = useAddressBook();
    const [searchTerm, setSearchTerm] = useState("");

    const [isLocal, setIsLocal] = useState(true);
    const [remoteEndpointIndex, setRemoteEndpointIndex] = useState(0);
    const [isPendingRemoteResults, setIsPendingRemoteResults] = useState(false);
    const [addressBookThirdPartyResults, setAddressBookThirdPartyResults] = useState<
      AddressBookThirdPartyResultsProps[]
    >([]);
    const { name, endpoint, apiHeader, apiKey } = thirdPartyAPIEndpoints[remoteEndpointIndex] ?? {};
    const [addressBookThirdPartyTotalResults, setAddressBookThirdPartyTotalResults] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredLocalAddresses = Object.keys(addressBook).filter((key) => {
      const identifier = addressBook[key];
      return (
        identifier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        key.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    useEffect(() => {
      setCurrentPage(1);
    }, [isLocal]);

    const totalNoOfPages = isLocal
      ? Math.ceil(filteredLocalAddresses.length / DEFAULT_LIMIT)
      : addressBookThirdPartyTotalResults;

    const offset = (currentPage - 1) * DEFAULT_LIMIT || DEFAULT_OFFSET;

    const localPageResults = filteredLocalAddresses.slice(offset, offset + DEFAULT_LIMIT);

    const onAddressSelect = (address: string): void => {
      if (onAddressSelected) {
        onAddressSelected(address);
        setOverlayVisible(false);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const queryEndpoint = useCallback(
      debounce(async (search, pageOffset = offset) => {
        setIsPendingRemoteResults(true);
        try {
          const results = await entityLookup({
            offset: pageOffset.toString(),
            limit: DEFAULT_LIMIT.toString(),
            query: search,
            endpoint,
            apiHeader,
            apiKey,
          });
          setAddressBookThirdPartyResults(results.identities);
          setAddressBookThirdPartyTotalResults(Math.ceil(results.total / DEFAULT_LIMIT));
        } catch (e) {
          setAddressBookThirdPartyResults([]);
          setAddressBookThirdPartyTotalResults(1);
          queryEndpoint.cancel();
          console.log(e, "error");
        }

        setIsPendingRemoteResults(false);
      }, 700),
      []
    );

    const onSearchTermChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const inputText = event.target.value;
      setSearchTerm(inputText);
      setCurrentPage(1);
      if (!isLocal) queryEndpoint(inputText);
    };

    const switchPage = (pageNumber: number): void => {
      if (isLocal) return;
      const pageOffset = (pageNumber - 1) * DEFAULT_LIMIT;
      queryEndpoint(searchTerm, pageOffset);
    };

    return (
      <OverlayContent data-testid="overlay-addressbook" {...props}>
        <div className="overlay-actionsbar">
          <div className="mb-2">
            <Dropdown dropdownButtonText={isLocal ? "Local" : name}>
              <DropdownItem
                itemText="Local"
                onClick={() => {
                  setIsLocal(true);
                  setSearchTerm("");
                }}
              />
              {thirdPartyAPIEndpoints.map((item, index) => {
                return (
                  <DropdownItem
                    key={index}
                    onClick={() => {
                      setIsLocal(false);
                      setSearchTerm("");
                      setRemoteEndpointIndex(index);
                    }}
                    itemText={item.name}
                  />
                );
              })}
            </Dropdown>
          </div>
          <div className="flex items-start flex-col md:flex-row">
            <div className="flex mb-2 flex-grow ">
              <div className="overlay-searchbar">
                <div className="flex mx-0 items-center w-64">
                  <input type="text" placeholder="Search" value={searchTerm} onChange={onSearchTermChanged} />
                  <Search />
                </div>
              </div>
            </div>
            <div className="flex mx-0">
              <div className="flex mb-2">
                <AnchorLinkButtonSolidWhiteBlue
                  href="data:text/csv;base64,QWRkcmVzcyxJZGVudGlmaWVyCjB4YTYxQjA1NmRBMDA4NGE1ZjM5MUVDMTM3NTgzMDczMDk2ODgwQzJlMyxEQlMKMHgyOEY3YUIzMkM1MjFEMTNGMkU2OTgwZDA3MkNhN0NBNDkzMDIwMTQ1LFN0YW5kYXJkIENoYXJ0ZXJlZA"
                  download="template.csv"
                >
                  <div className="flex items-center mx-0">
                    <div className="col-auto mr-2">
                      <Download />
                    </div>
                    <div className="col-auto">Download template</div>
                  </div>
                </AnchorLinkButtonSolidWhiteBlue>
              </div>
              <div className="flex">
                <CsvUploadButton handleLocalAddressBookCsv={handleLocalAddressBookCsv} />
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          {isLocal ? (
            <AddressBookLocal
              onAddressSelect={onAddressSelect}
              filteredLocalAddresses={localPageResults}
              network={network}
            />
          ) : (
            <AddressBookThirdParty
              onAddressSelect={onAddressSelect}
              addressBookThirdPartyResults={addressBookThirdPartyResults}
              isSearchingThirdParty={isPendingRemoteResults}
              network={network}
            />
          )}
        </div>
        <div className="mt-4">
          <Pagination
            onPageClick={switchPage}
            totalNoOfPages={totalNoOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </OverlayContent>
    );
  }
)`
  ${OverlayContentBaseStyle()}
  ${TableStyle()}

  max-width: 960px;
  max-height: 600px;

  .overlay-searchbar {
    border: solid 1px ${vars.greyLight};
    padding: 5px 10px;
    max-width: 100%;

    @media only screen and (min-width: ${vars.md}) {
      max-width: 300px;
    }

    input {
      border: none;
      outline: none;
      width: 100%;

      &::placeholder {
        font-style: italic;
        color: ${vars.greyLight};
      }
    }

    svg {
      color: ${vars.grey};
    }
  }

  .overlay-actionsbar {
    margin-bottom: 20px;
  }

  .table-tbody {
    height: 360px;

    tr {
      transition: background-color 0.3s ${vars.easeOutCubic};
      cursor: ${(props) => (props.onAddressSelected ? "pointer" : "default")};

      &:hover {
        background-color: ${(props) => (props.onAddressSelected ? vars.greyLighter : "inherit")};

        &:nth-of-type(even) {
          background-color: ${(props) => (props.onAddressSelected ? vars.greyLighter : "inherit")};
        }
      }

      a {
        svg {
          max-width: 16px;
        }
      }
    }
  }

  .table {
    th {
      width: 120px;
      text-align: left;
      padding: 0 12px;
    }
  }
`;
