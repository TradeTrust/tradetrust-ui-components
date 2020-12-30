import styled from "@emotion/styled";
import {
  AddressBookThirdPartyResultsProps,
  entityLookup,
  ThirdPartyAPIEntryProps,
  useAddressBook,
} from "@govtechsg/address-identity-resolver";
import { debounce, isEmpty } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { Download, Search } from "react-feather";
import tw from "twin.macro";
import { useOverlayContext } from "../../common/context/OverlayContext";
import { TableStyle } from "../AddressResolver/AddressesTable";
import { LinkButton } from "../UI/Button";
import { Dropdown, DropdownItem } from "../UI/Dropdown";
import { OverlayContent, OverlayContentProps } from "../UI/Overlay/OverlayContent";
import { Pagination } from "../UI/Pagination";
import { OverlayContentBaseStyle } from "./../UI/Overlay";
import { AddressBookLocal } from "./AddressBookLocal";
import { AddressBookThirdParty } from "./AddressBookThirdParty";
import { CsvUploadButton } from "./CsvUploadButton";

export enum AddressBookState {
  NONE = "NONE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  EMPTY = "EMPTY",
  ERROR = "ERROR",
}

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
  paginationOffset?: number;
  paginationLimit?: number;
}

export const AddressBook = styled(
  ({
    onAddressSelected,
    thirdPartyAPIEndpoints,
    network,
    paginationOffset = 0,
    paginationLimit = 20,
    ...props
  }: AddressBookProps) => {
    const { setOverlayVisible } = useOverlayContext();
    const { handleLocalAddressBookCsv, addressBook } = useAddressBook();
    const [searchTerm, setSearchTerm] = useState("");

    const [isLocal, setIsLocal] = useState(true);
    const [remoteEndpointIndex, setRemoteEndpointIndex] = useState(0);
    const [thirdPartyPageResults, setThirdPartyPageResults] = useState<AddressBookThirdPartyResultsProps[]>([]);
    const { name, endpoint, apiHeader, apiKey, path } = thirdPartyAPIEndpoints[remoteEndpointIndex] ?? {};
    const [thirdPartyTotalPages, setThirdPartyTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const hasEntityLookupPath = !!path?.entityLookup;

    const filteredLocalAddresses = Object.keys(addressBook).filter((key) => {
      const identifier = addressBook[key];
      return (
        identifier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        key.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    const localTotalPages = Math.ceil(filteredLocalAddresses.length / paginationLimit);
    const totalNoOfPages = isLocal ? localTotalPages : thirdPartyTotalPages;
    const offset = (currentPage - 1) * paginationLimit || paginationOffset;
    const localPageResults = filteredLocalAddresses.slice(offset, offset + paginationLimit);

    const [addressBookThirdPartyStatus, setAddressBookThirdPartyStatus] = useState(
      hasEntityLookupPath ? AddressBookState.NONE : AddressBookState.ERROR
    );
    const [addressBookLocalStatus, setAddressBookLocalStatus] = useState(AddressBookState.NONE);

    const onAddressSelect = (address: string): void => {
      if (onAddressSelected) {
        onAddressSelected(address);
        setOverlayVisible(false);
      }
    };

    const queryEndpoint = async (search: string, pageOffset: number): Promise<void> => {
      if (!path.entityLookup) {
        throw "This endpoint does not have the entityLookup feature.";
      }

      setAddressBookThirdPartyStatus(AddressBookState.PENDING);

      try {
        const results = await entityLookup({
          offset: pageOffset.toString(),
          limit: paginationLimit.toString(),
          query: search,
          endpoint,
          apiHeader,
          apiKey,
          path: path.entityLookup,
        });
        setThirdPartyPageResults(results.identities);
        const numberOfResults = results.total > 0 ? results.total : paginationLimit;
        setThirdPartyTotalPages(Math.ceil(numberOfResults / paginationLimit));
        if (isEmpty(results.identities)) {
          setAddressBookThirdPartyStatus(AddressBookState.EMPTY);
        } else {
          setAddressBookThirdPartyStatus(AddressBookState.SUCCESS);
        }
      } catch (e) {
        setThirdPartyPageResults([]);
        setThirdPartyTotalPages(1);
        setAddressBookThirdPartyStatus(AddressBookState.EMPTY);
        console.log(e);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const queryEndpointWithDebounce = useCallback(
      debounce(async (search, pageOffset = offset) => {
        queryEndpoint(search, pageOffset);
      }, 700),
      []
    );

    const onSearchTermChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const inputText = event.target.value;
      setSearchTerm(inputText);
      setCurrentPage(1);
      if (!isLocal) queryEndpointWithDebounce(inputText);
    };

    const resetThirdPartyAPIEndpointResult = (): void => {
      setSearchTerm("");
      setCurrentPage(1);
      setThirdPartyPageResults([]);
      setThirdPartyTotalPages(1);
    };

    useEffect(() => {
      if (isLocal) return;
      const pageOffset = (currentPage - 1) * paginationLimit;
      queryEndpoint(searchTerm, pageOffset);
    }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (isEmpty(addressBook)) {
        setAddressBookLocalStatus(AddressBookState.NONE);
      } else if (isEmpty(localPageResults)) {
        setAddressBookLocalStatus(AddressBookState.EMPTY);
      } else {
        setAddressBookLocalStatus(AddressBookState.SUCCESS);
      }
    }, [addressBook, localPageResults]);

    return (
      <OverlayContent data-testid="overlay-addressbook" {...props}>
        <div className="overlay-actionsbar">
          <div className="mb-2">
            <Dropdown
              fullWidth
              dropdownButtonText={isLocal ? "Local" : name}
              className="border-grey-300 border-solid border rounded-none p-3"
            >
              <DropdownItem
                onClick={() => {
                  setIsLocal(true);
                  resetThirdPartyAPIEndpointResult();
                }}
              >
                Local
              </DropdownItem>
              {thirdPartyAPIEndpoints.map((item, index) => {
                return (
                  <DropdownItem
                    key={index}
                    onClick={() => {
                      setIsLocal(false);
                      setRemoteEndpointIndex(index);
                      resetThirdPartyAPIEndpointResult();
                    }}
                  >
                    {item.name}
                  </DropdownItem>
                );
              })}
            </Dropdown>
          </div>
          <div className="flex items-start flex-col md:flex-row">
            <div className="flex mb-2 flex-grow">
              <div className="overlay-searchbar">
                <div className="flex mx-0 items-center w-64">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={onSearchTermChanged}
                    disabled={!isLocal && !hasEntityLookupPath}
                  />
                  <Search />
                </div>
              </div>
            </div>
            <div className="flex mx-0">
              <div className="w-auto mb-2">
                <LinkButton
                  className="bg-white text-blue hover:bg-grey-100"
                  href="data:text/csv;base64,QWRkcmVzcyxJZGVudGlmaWVyCjB4YTYxQjA1NmRBMDA4NGE1ZjM5MUVDMTM3NTgzMDczMDk2ODgwQzJlMyxEQlMKMHgyOEY3YUIzMkM1MjFEMTNGMkU2OTgwZDA3MkNhN0NBNDkzMDIwMTQ1LFN0YW5kYXJkIENoYXJ0ZXJlZA"
                  download="template.csv"
                >
                  <div className="flex items-center mx-0">
                    <div className="col-auto mr-2">
                      <Download />
                    </div>
                    <div className="col-auto">Download template</div>
                  </div>
                </LinkButton>
              </div>
              <div className="w-auto">
                <CsvUploadButton handleLocalAddressBookCsv={handleLocalAddressBookCsv} />
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          {isLocal ? (
            <AddressBookLocal
              addressBookLocalStatus={addressBookLocalStatus}
              onAddressSelect={onAddressSelect}
              localPageResults={localPageResults}
              network={network}
            />
          ) : (
            <AddressBookThirdParty
              addressBookThirdPartyStatus={addressBookThirdPartyStatus}
              onAddressSelect={onAddressSelect}
              thirdPartyPageResults={thirdPartyPageResults}
              network={network}
            />
          )}
        </div>
        <div className="mt-4">
          <Pagination totalNoOfPages={totalNoOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
    ${tw`max-w-full md:max-w-xs border border-solid border-grey-300 px-3 py-2`}

    input {
      ${tw`border-none outline-none w-full`}

      &::placeholder {
        ${tw`italic text-grey-300`}
      }
    }

    svg {
      ${tw`text-grey`}
    }
  }

  .overlay-actionsbar {
    ${tw`mb-5`}
  }

  .table-tbody {
    height: 360px;

    tr {
      a {
        svg {
          max-width: 16px;
        }
      }
    }
  }

  .table {
    th {
      ${tw`w-48 text-left py-2 px-3`}
    }
  }
`;
