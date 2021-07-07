import styled from "@emotion/styled";
import { ThirdPartyAPIEntryProps, useThirdPartyAPIEndpoints } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { useOverlayContext } from "../../common/context/OverlayContext";
import { fontSize } from "../../common/styles/shared";
import { DeleteResolverConfirmation } from "../UI/Overlay/OverlayContent";
import { EndpointEntry } from "./EndpointEntry";
import { StyledTable } from "../../common/styles/Table";

export interface AddressesTableProps {
  className?: string;
  isNewEndpoint: boolean;
  setNewEndpoint: (isNewEndpoint: boolean) => void;
}

const StyledTableAddressResolver = styled(StyledTable)`
  th {
    ${tw`w-8`}

    .fas {
      ${tw`block text-gray-500 cursor-pointer transition duration-300 ease-out-cubic`}
      line-height: 0.5;
      ${fontSize(20)};

      &:hover {
        ${tw`text-gray-800`}
      }

      &.fa-sort-up,
      &.fa-sort-down {
        opacity: 0;
        visibility: hidden;
      }

      &.fa-sort-up {
        ${tw`pt-2`}
      }

      &.fa-sort-down {
        ${tw`pb-2`}
      }
    }
  }

  tr {
    &:hover {
      .fa-sort-up,
      .fa-sort-down {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  // td {
  //   &.edit-delete {
  //     &:last-of-type {
  //       svg {
  //         polyline,
  //         path,
  //         line {
  //           ${tw`text-cerulean-200`}
  //         }

  //         &:hover {
  //           polyline,
  //           path,
  //           line {
  //             ${tw`text-cerulean-200`}
  //           }
  //         }
  //       }
  //     }
  //   }

  //   &:nth-of-type(1) {
  //     width: 80px;
  //   }

  //   &:nth-of-type(2) {
  //     width: 200px;
  //   }

  //   &:nth-of-type(3) {
  //     width: 360px;
  //   }

  //   &:nth-of-type(4) {
  //     width: 200px;
  //   }

  //   &:nth-of-type(5) {
  //     width: 200px;
  //   }

  //   &:last-of-type {
  //     text-align: right;
  //     width: 100px;

  //     svg {
  //       cursor: pointer;
  //       margin-left: 15px;

  //       polyline,
  //       path,
  //       line {
  //         transition: color 0.3s ease-out;
  //         ${tw`text-gray-500`}
  //       }

  //       &:first-of-type {
  //         margin-left: 0;
  //       }

  //       &:hover {
  //         polyline,
  //         path,
  //         line {
  //           ${tw`text-gray-900`}
  //         }
  //       }
  //     }
  //   }
  // }
`;

export const AddressesTable: FunctionComponent<AddressesTableProps> = ({
  className,
  isNewEndpoint,
  setNewEndpoint,
}) => {
  const { thirdPartyAPIEndpoints, addThirdPartyAPIEndpoint, removeThirdPartyAPIEndpoint, setThirdPartyAPIEndpoints } =
    useThirdPartyAPIEndpoints();
  const { showOverlay, setOverlayVisible } = useOverlayContext();

  const deleteAddress = (index: number): void => {
    removeThirdPartyAPIEndpoint(index);
    setOverlayVisible(false);
  };

  const onRemoveEndpoint = (name: string, index: number): void => {
    showOverlay(
      <DeleteResolverConfirmation
        title="Delete Address Resolver"
        name={name}
        deleteAddress={() => {
          deleteAddress(index);
        }}
      />
    );
  };

  const isCurrentEndpointUrlExists = (currentEndpoint: string) => (endpoint: string) => {
    const omitCurrent = thirdPartyAPIEndpoints.filter((item) => {
      return item.endpoint !== currentEndpoint;
    });

    const isFound = !!omitCurrent.find((item) => {
      return item.endpoint === endpoint;
    });
    return isFound;
  };

  const isEndpointUrlExists = (endpoint: string): boolean => {
    const isFound = !!thirdPartyAPIEndpoints.find((item) => {
      return item.endpoint === endpoint;
    });
    return isFound;
  };

  const addNewEndpoint = (newValues: ThirdPartyAPIEntryProps): void => {
    addThirdPartyAPIEndpoint(newValues);
    setNewEndpoint(false);
  };

  const onUpdateEndpoint = (index: number) => (newValues: ThirdPartyAPIEntryProps) => {
    const newEndpoint = [...thirdPartyAPIEndpoints];
    newEndpoint.splice(index, 1, newValues);
    setThirdPartyAPIEndpoints(newEndpoint);
  };

  const swapArray = (indexA: number, indexB: number): void => {
    const toOrdered = [...thirdPartyAPIEndpoints];

    const to = toOrdered[indexB];
    const from = toOrdered[indexA];
    toOrdered[indexA] = to;
    toOrdered[indexB] = from;

    setThirdPartyAPIEndpoints(toOrdered);
  };

  const moveEntryUp = (id: number): void => {
    if (id === 0) return;
    swapArray(id - 1, id);
  };

  const moveEntryDown = (id: number): void => {
    if (id + 1 >= thirdPartyAPIEndpoints.length) return;
    swapArray(id + 1, id);
  };

  return (
    <div className={`${className} flex py-6`}>
      <div className="flex w-full">
        <StyledTableAddressResolver className="table-responsive">
          {/* <div className="hidden md:table-header-group md:w-full">
            <div className="table-row bg-white font-bold text-cloud-900 text-xl text-left mt-0">
              <div className="table-cell w-8 px-3" />
              <div className="table-cell w-20 px-3">Order</div>
              <div className="table-cell w-52 px-3">Name</div>
              <div className="table-cell w-80 px-3">Endpoint</div>
              <div className="table-cell w-52 px-3">API Header</div>
              <div className="table-cell w-52 px-3">API Key</div>
              <div className="table-cell w-28 px-3">&nbsp;</div>
            </div>
          </div> */}
          <table className="table">
            <thead className="table-thead">
              <tr className="hidden md:table-row">
                <th />
                <th>Order</th>
                <th>Name</th>
                <th>Endpoint</th>
                <th>API Header</th>
                <th>API Key</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            {/* <div className="hidden md:table-header-group">
              <div className="table-row bg-white font-bold text-cloud-900 text-xl text-left mt-0">
                <div className="table-cell px-2" />
                <div className="table-cell px-2">Order</div>
                <div className="table-cell px-2">Name</div>
                <div className="table-cell px-2">Endpoint</div>
                <div className="table-cell px-2">API Header</div>
                <div className="table-cell px-2">API Key</div>
                <div className="table-cell px-2">&nbsp;</div>
              </div>
            </div> */}
            {thirdPartyAPIEndpoints.length === 0 && !isNewEndpoint && (
              <td colSpan={100}>
                <div className="bg-cerulean-50 h-12" data-testid="table-row">
                  <p className="flex text-cloud-900 h-full justify-center items-center">
                    No third party&apos;s endpoint found.{" "}
                  </p>
                </div>
              </td>
            )}
            <tbody className="table-tbody">
              {thirdPartyAPIEndpoints.map((item, index) => {
                const orderNumber = index + 1;

                return (
                  <EndpointEntry
                    key={item.endpoint}
                    orderNumber={orderNumber}
                    isEndpointUrlExists={isCurrentEndpointUrlExists(item.endpoint)}
                    removeEndpoint={() => {
                      onRemoveEndpoint(item.name, index);
                    }}
                    onMoveEntryUp={() => {
                      moveEntryUp(index);
                    }}
                    onMoveEntryDown={() => {
                      moveEntryDown(index);
                    }}
                    onUpdateEndpoint={onUpdateEndpoint(index)}
                    api={thirdPartyAPIEndpoints[index].endpoint}
                    name={thirdPartyAPIEndpoints[index].name}
                    apiHeader={thirdPartyAPIEndpoints[index].apiHeader}
                    apiKey={thirdPartyAPIEndpoints[index].apiKey}
                    canEdit={false}
                  />
                );
              })}
              {isNewEndpoint && (
                <EndpointEntry
                  orderNumber={thirdPartyAPIEndpoints.length + 1}
                  isEndpointUrlExists={isEndpointUrlExists}
                  removeEndpoint={() => {
                    setNewEndpoint(false);
                  }}
                  onUpdateEndpoint={addNewEndpoint}
                  api=""
                  name=""
                  apiHeader=""
                  apiKey=""
                  canEdit={true}
                />
              )}
            </tbody>
          </table>
        </StyledTableAddressResolver>
      </div>
    </div>
  );
};
