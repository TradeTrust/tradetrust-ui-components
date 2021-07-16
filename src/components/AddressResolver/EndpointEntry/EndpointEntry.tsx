import { getFeatures, ThirdPartyAPIEntryProps } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import isEmpty from "validator/lib/isEmpty";
import isURL from "validator/lib/isURL";
import { Input } from "../../UI/Input";
import { LoaderSpinner } from "../../UI/Loader";
import { useOverlayContext } from "../../../common/context/OverlayContext";
import { AddResolverConfirmation } from "../../UI/Overlay/OverlayContent";

interface EndpointEntryProps {
  className?: string;
  orderNumber: number;
  api: string;
  name: string;
  apiHeader: string;
  apiKey: string;
  canEdit: boolean;
  removeEndpoint: () => void;
  onMoveEntryUp?: () => void;
  onMoveEntryDown?: () => void;
  onUpdateEndpoint: (newValues: ThirdPartyAPIEntryProps) => void;
  isEndpointUrlExists: (endpoint: string) => boolean;
}

export const EndpointEntry: FunctionComponent<EndpointEntryProps> = ({
  className,
  orderNumber,
  removeEndpoint,
  api,
  name,
  apiHeader,
  apiKey,
  canEdit,
  onMoveEntryUp,
  onMoveEntryDown,
  onUpdateEndpoint,
  isEndpointUrlExists,
}: EndpointEntryProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditable, setEditable] = useState(canEdit);
  const [inputErrorMessageName, setInputErrorMessageName] = useState("");
  const [inputErrorMessageEndpoint, setInputErrorMessageEndpoint] = useState("");
  const [inputErrorMessageApiHeader, setInputErrorMessageApiHeader] = useState("");
  const [inputErrorMessageApiKey, setInputErrorMessageApiKey] = useState("");
  const [endpointApi, setEndpointApi] = useState(api);
  const [endpointName, setEndpointName] = useState(name);
  const [endpointApiHeader, setEndpointApiHeader] = useState(apiHeader);
  const [endpointApiKey, setEndpointApiKey] = useState(apiKey);
  const { showOverlay } = useOverlayContext();

  const onEndpointApiChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEndpointApi(event.target.value);
  };

  const onEndpointNameChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEndpointName(event.target.value);
  };

  const onEndpointApiHeaderChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEndpointApiHeader(event.target.value);
  };

  const onEndpointApiKeyChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEndpointApiKey(event.target.value);
  };

  const onSetAllError = (msg: string): void => {
    setInputErrorMessageName(msg);
    setInputErrorMessageEndpoint(msg);
    setInputErrorMessageApiHeader(msg);
    setInputErrorMessageApiKey(msg);
  };

  const canUpdateValue = (): boolean => {
    const nameTrimmed = endpointName.trim();
    const apiTrimmed = endpointApi.trim();
    const apiHeaderTrimmed = endpointApiHeader.trim();
    const apiKeyTrimmed = endpointApiKey.trim();

    setInputErrorMessageName("");
    setInputErrorMessageEndpoint("");
    setInputErrorMessageApiHeader("");
    setInputErrorMessageApiKey("");

    if (isEmpty(nameTrimmed)) {
      setInputErrorMessageName("Name must not be blank.");
      return false;
    }

    if (isEmpty(apiTrimmed)) {
      setInputErrorMessageEndpoint("Endpoint must not be blank.");
      return false;
    }

    if (!isURL(apiTrimmed)) {
      setInputErrorMessageEndpoint("Endpoint must be an valid url.");
      return false;
    }

    if (isEndpointUrlExists(apiTrimmed)) {
      setInputErrorMessageEndpoint("Endpoint already exists.");
      return false;
    }

    if (isEmpty(apiHeaderTrimmed) && !isEmpty(apiKeyTrimmed)) {
      setInputErrorMessageApiHeader("API Header must not be blank.");
      return false;
    }

    if (!isEmpty(apiHeaderTrimmed) && isEmpty(apiKeyTrimmed)) {
      setInputErrorMessageApiKey("API Key must not be blank.");
      return false;
    }

    return true;
  };

  const onSave = async (): Promise<void> => {
    setIsLoading(true);
    try {
      if (!canUpdateValue()) {
        setIsLoading(false);
        return;
      }

      const { features } = await getFeatures(endpointApi, endpointApiHeader, endpointApiKey);

      setEditable(false);

      onUpdateEndpoint({
        name: endpointName.trim(),
        endpoint: endpointApi.trim(),
        apiHeader: endpointApiHeader.trim(),
        apiKey: endpointApiKey.trim(),
        path: {
          addressResolution: features.addressResolution?.location,
          entityLookup: features.entityLookup?.location,
        },
      });

      showOverlay(<AddResolverConfirmation />);
    } catch (e) {
      onSetAllError(e.message);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={`flex flex-col rounded-xl shadow-lg w-80 mt-6 ${
        orderNumber % 2 !== 0 ? "md:bg-cerulean-50" : "bg-white"
      } ${
        isEditable ? "h-160" : "h-auto"
      } md:bg-none md:w-full md:h-auto md:rounded-none md:shadow-none md:mt-0 md:p-4`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col px-3 pt-12 md:flex-row md:w-1/12 md:px-0 md:pt-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">Order</div>
          <div className={`inline-block w-auto ${isEditable ? "md:flex md:items-start md:mt-1" : ""}`}>
            {orderNumber}
          </div>
        </div>

        <div className="flex flex-col px-3 pt-3 md:flex-row md:w-2/12 md:px-0 md:pt-0">
          <div className={`inline-block text-cloud-900 text-xl font-bold md:hidden ${isEditable ? "mt-7" : ""}`}>
            Name
          </div>
          <div className="w-full">
            {isEditable ? (
              <Input
                className="w-full md:w-8/12"
                placeholder="Name"
                value={endpointName}
                onChange={onEndpointNameChanged}
                errorMessage={inputErrorMessageName}
              />
            ) : (
              <>{name}</>
            )}
          </div>
        </div>

        <div className="flex flex-col px-3 pt-3 md:flex-row md:w-4/12 md:px-0 md:pt-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">Endpoint</div>
          <div className="w-full">
            {isEditable ? (
              <Input
                className="w-full md:w-10/12"
                placeholder="Endpoint"
                value={endpointApi}
                onChange={onEndpointApiChanged}
                errorMessage={inputErrorMessageEndpoint}
              />
            ) : (
              <>{api}</>
            )}
          </div>
        </div>

        <div className="flex flex-col px-3 pt-3 md:flex-row md:w-2/12 md:px-0 md:pt-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">API Header</div>
          <div className="w-full">
            {isEditable ? (
              <Input
                className="w-full md:w-10/12"
                placeholder="API Header"
                value={endpointApiHeader}
                onChange={onEndpointApiHeaderChanged}
                errorMessage={inputErrorMessageApiHeader}
              />
            ) : (
              <>{apiHeader}</>
            )}
          </div>
        </div>

        <div className="flex flex-col p-3 md:flex-row md:w-2/12 md:p-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">API Key</div>
          <div className="w-full">
            {isEditable ? (
              <Input
                className="w-full md:w-10/12"
                placeholder="API Key"
                value={endpointApiKey}
                onChange={onEndpointApiKeyChanged}
                errorMessage={inputErrorMessageApiKey}
              />
            ) : (
              <>{apiKey}</>
            )}
          </div>
        </div>

        {!isEditable && (
          <div className="flex absolute ml-60 mt-4 md:static md:w-1/12 md:m-0">
            <Trash2 className="text-cerulean-200 cursor-pointer" onClick={removeEndpoint} data-testid="trash2-icon" />
            <Edit
              className="text-cerulean-200 ml-3 cursor-pointer"
              onClick={() => {
                setEditable(true);
              }}
              data-testid="edit-icon"
            />
          </div>
        )}
      </div>

      {isEditable && (
        <div className="flex flex-row text-white text-base justify-center md:m-0">
          <div
            className="flex bg-rose rounded-xl py-2 px-2.5 w-20 h-9 justify-center items-center cursor-pointer"
            onClick={removeEndpoint}
          >
            <h5>Delete</h5>
          </div>
          {isLoading ? (
            <LoaderSpinner className="ml-10" />
          ) : (
            <div
              className="flex bg-cerulean rounded-xl py-2 px-2.5 w-20 h-9 ml-10 justify-center items-center cursor-pointer"
              onClick={onSave}
              data-testid="save-icon"
            >
              <h5>Save</h5>
            </div>
          )}
        </div>
      )}
    </div>
    // <>
    //   <div
    //     className={`${className} flex flex-col bg-white rounded-xl shadow-lg w-80 mx-auto mt-6 ${
    //       isEditable ? "h-160" : "h-auto"
    //     } md:table-row md:bg-none md:w-auto md:h-auto md:rounded-none md:shadow-none md:mt-0 ${
    //       orderNumber % 2 !== 0 ? "md:bg-cerulean-50" : "bg-white"
    //     }`}
    //   >
    //     <th>
    //       {!isEditable && (
    //         <div className="hidden md:table-cell">
    //           <i className="fas fa-sort-up" onClick={onMoveEntryUp} />
    //           <i className="fas fa-sort-down" onClick={onMoveEntryDown} />
    //         </div>
    //       )}
    //     </th>
    //     <div className="table-cell text-cloud-900 text-xl font-bold px-3 pt-8 md:hidden">Order</div>
    //     <div className={`table-cell w-auto md:w-20 ${isEditable ? "md:flex md:items-start md:mt-1" : ""}`}>
    //       {orderNumber}
    //     </div>
    //     <div className={`table-cell text-cloud-900 text-xl font-bold px-3 pt-3 md:hidden ${isEditable ? "mt-7" : ""}`}>
    //       Name
    //     </div>
    //     <div className="table-cell w-auto md:w-52">
    //       {isEditable ? (
    //         <Input
    //           className="w-full"
    //           placeholder="Name"
    //           value={endpointName}
    //           onChange={onEndpointNameChanged}
    //           errorMessage={inputErrorMessageName}
    //         />
    //       ) : (
    //         <>{name}</>
    //       )}
    //     </div>
    //     <div className="table-cell text-cloud-900 text-xl font-bold px-3 pt-3 md:hidden">Endpoint</div>
    //     <div className="table-cell w-auto md:w-80">
    //       {isEditable ? (
    //         <Input
    //           className="w-full"
    //           placeholder="Endpoint"
    //           value={endpointApi}
    //           onChange={onEndpointApiChanged}
    //           errorMessage={inputErrorMessageEndpoint}
    //         />
    //       ) : (
    //         <>{api}</>
    //       )}
    //     </div>
    //     <div className="table-cell text-cloud-900 text-xl font-bold px-3 pt-3 md:hidden">API Header</div>
    //     <div className="table-cell w-auto md:w-52">
    //       {isEditable ? (
    //         <Input
    //           className="w-full"
    //           placeholder="API Header"
    //           value={endpointApiHeader}
    //           onChange={onEndpointApiHeaderChanged}
    //           errorMessage={inputErrorMessageApiHeader}
    //         />
    //       ) : (
    //         <>{apiHeader}</>
    //       )}
    //     </div>
    //     <div className="table-cell text-cloud-900 text-xl font-bold px-3 pt-3 md:hidden">API Key</div>
    //     <td className="w-auto md:w-52" colSpan={isEditable ? 2 : 0}>
    //       {isEditable ? (
    //         <Input
    //           className="w-full"
    //           placeholder="API Key"
    //           value={endpointApiKey}
    //           onChange={onEndpointApiKeyChanged}
    //           errorMessage={inputErrorMessageApiKey}
    //         />
    //       ) : (
    //         <>{apiKey}</>
    //       )}
    //     </td>
    //     {!isEditable && (
    //       <div className={"table-cell w-28"}>
    //         <div className="flex w-full ml-56 -mt-86 md:m-auto">
    //           <Trash2 className="text-cerulean-200 cursor-pointer" onClick={removeEndpoint} data-testid="trash2-icon" />
    //           <Edit
    //             className="text-cerulean-200 ml-3.5 cursor-pointer"
    //             onClick={() => {
    //               setEditable(true);
    //             }}
    //             data-testid="edit-icon"
    //           />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   {isEditable && (
    //     <div className={`${className} ${orderNumber % 2 !== 0 ? "md:bg-cerulean-50" : "bg-white"}`}>
    //       <th className="hidden md:table-cell" />
    //       <td colSpan={10}>
    //         <div className="flex flex-row text-white text-base justify-center -mt-14 md:m-0">
    //           <div
    //             className="flex bg-rose rounded-xl py-2 px-2.5 w-20 h-9 justify-center items-center cursor-pointer"
    //             onClick={removeEndpoint}
    //           >
    //             <h5>Delete</h5>
    //           </div>
    //           {isLoading ? (
    //             <LoaderSpinner className="ml-10" />
    //           ) : (
    //             <div
    //               className="flex bg-cerulean rounded-xl py-2 px-2.5 w-20 h-9 ml-10 justify-center items-center cursor-pointer"
    //               onClick={onSave}
    //               data-testid="save-icon"
    //             >
    //               <h5>Save</h5>
    //             </div>
    //           )}
    //         </div>
    //       </td>
    //       <th className="hidden md:table-cell" />
    //     </div>
    //   )}
    // </>
  );
};
