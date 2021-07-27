import { ThirdPartyAPIEntryProps, useThirdPartyAPIEndpoints } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../common/context/OverlayContext";
import { DeleteResolverConfirmation } from "../UI/Overlay/OverlayContent";
import { EndpointEntry } from "./EndpointEntry";

export interface AddressesTableProps {
  isNewEndpoint: boolean;
  setNewEndpoint: (isNewEndpoint: boolean) => void;
}

export const AddressesTable: FunctionComponent<AddressesTableProps> = ({ isNewEndpoint, setNewEndpoint }) => {
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
    <div className="flex flex-col w-full">
      <div className="w-full">
        <div className="hidden text-xl font-bold text-cloud-900 ml-7 p-4 md:flex">
          <h4 className="w-1/12">Order</h4>
          <h4 className="w-2/12">Name</h4>
          <h4 className="w-4/12">Endpoint</h4>
          <h4 className="w-2/12">API Header</h4>
          <h4 className="w-2/12">API Key</h4>
        </div>
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
      </div>
      {thirdPartyAPIEndpoints.length === 0 && !isNewEndpoint && (
        <div
          className="bg-white rounded-xl shadow-lg h-12 mt-6 md:bg-cerulean-50 md:rounded-none md:shadow-none"
          data-testid="table-row"
        >
          <p className="flex text-cloud-900 h-full justify-center items-center">
            No third party&apos;s endpoint found.{" "}
          </p>
        </div>
      )}
    </div>
  );
};
