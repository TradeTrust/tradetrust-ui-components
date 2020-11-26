import css, { SerializedStyles } from "@emotion/css";
import styled from "@emotion/styled";
import { ThirdPartyAPIEntryProps, useThirdPartyAPIEndpoints } from "@govtechsg/address-identity-resolver";
import React from "react";
import tw from "twin.macro";
import { useOverlayContext } from "../../common/context/OverlayContext";
import { fontSize } from "../../styles/abstracts/mixin";
import { DeleteResolverConfirmation } from "../UI/Overlay/OverlayContent";
import { EndpointEntry } from "./EndpointEntry";

export const TableStyle = (): SerializedStyles => {
  return css`
    .table-responsive {
      ${tw`w-full border border-solid border-grey-300 overflow-x-auto scrolling-touch`}
    }

    .table {
      ${tw`w-full mb-0`}
    }

    tr {
      ${tw`whitespace-no-wrap border-solid border-t border-grey-300`}
    }

    th {
      ${tw`mt-0 align-middle`}
    }

    td {
      ${tw`align-middle whitespace-no-wrap border-t-0 p-3`}
    }

    .table-thead {
      th,
      td {
        border: none;
      }
    }

    .table-thead {
      ${tw`text-white bg-navy`}
    }

    .table-tbody {
      ${tw`bg-white`}

      tr {
        &:nth-of-type(even) {
          ${tw`bg-grey-100`}
        }
      }
    }
  `;
};

export interface AddressesTableProps {
  className?: string;
  isNewEndpoint: boolean;
  setNewEndpoint: (isNewEndpoint: boolean) => void;
}

export const AddressesTable = styled(({ className, isNewEndpoint, setNewEndpoint }: AddressesTableProps) => {
  const {
    thirdPartyAPIEndpoints,
    addThirdPartyAPIEndpoint,
    removeThirdPartyAPIEndpoint,
    setThirdPartyAPIEndpoints,
  } = useThirdPartyAPIEndpoints();
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
        <div className="table-responsive">
          <table className="table">
            <thead className="table-thead">
              <tr>
                <th />
                <td>Order</td>
                <td>Name</td>
                <td>Endpoint</td>
                <td>API Header</td>
                <td>API Key</td>
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody className="table-tbody">
              {thirdPartyAPIEndpoints.length === 0 && !isNewEndpoint && (
                <tr>
                  <th />
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                  <td>No third party&apos;s endpoint found.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              )}
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
        </div>
      </div>
    </div>
  );
})`
  ${TableStyle()}

  th {
    width: 30px;
    text-align: center;

    .fas {
      ${tw`block text-grey cursor-pointer transition duration-300 ease-out-cubic`}
      line-height: 0.5;
      ${fontSize(20)};

      &:hover {
        ${tw`text-grey-800`}
      }

      &.fa-sort-up {
        ${tw`pt-2`}
      }

      &.fa-sort-down {
        ${tw`pb-2`}
      }
    }
  }

  td {
    &.is-editable {
      &:last-of-type {
        svg {
          &:hover {
            polyline,
            path,
            line {
              ${tw`text-teal-lighter`}
            }
          }
        }
      }
    }

    &:nth-of-type(1) {
      width: 80px;
    }

    &:nth-of-type(2) {
      width: 200px;
    }

    &:nth-of-type(3) {
      width: 360px;
    }

    &:nth-of-type(4) {
      width: 200px;
    }

    &:nth-of-type(5) {
      width: 200px;
    }

    &:last-of-type {
      text-align: right;
      width: 100px;

      svg {
        cursor: pointer;
        margin-left: 15px;

        polyline,
        path,
        line {
          transition: color 0.3s ease-out;
          ${tw`text-grey`}
        }

        &:first-of-type {
          margin-left: 0;
        }

        &:hover {
          polyline,
          path,
          line {
            ${tw`text-grey-300`}
          }
        }
      }
    }
  }
`;
