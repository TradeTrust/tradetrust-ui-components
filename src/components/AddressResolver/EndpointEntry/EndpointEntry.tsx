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
      className={`flex flex-col bg-white rounded-xl shadow-lg w-80 mt-6 pt-12 pb-8 md:even:bg-cerulean-50 md:bg-none md:w-full md:h-auto md:rounded-none md:shadow-none md:mt-0 md:p-4 group ${
        isEditable ? "h-130" : "h-auto"
      }`}
    >
      <div className={`flex flex-col md:flex-row ${isEditable ? "md:ml-5" : ""}`}>
        {!isEditable && (
          <div className="flex flex-col text-2xl leading-3 mr-3 text-cloud-300 visible md:invisible md:group-hover:visible">
            <i className="fas fa-sort-up leading-3 hover:text-cloud-900" onClick={onMoveEntryUp} />
            <i className="fas fa-sort-down leading-3 hover:text-cloud-900" onClick={onMoveEntryDown} />
          </div>
        )}

        <div className="flex flex-col px-3 md:flex-row md:w-1/12 md:px-0 md:pt-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">Order</div>
          <div className={`inline-block w-auto ${isEditable ? "md:flex md:items-start md:mt-1" : ""}`}>
            {orderNumber}
          </div>
        </div>

        <div className="flex flex-col px-3 pt-3 md:flex-row md:w-2/12 md:px-0 md:pt-0">
          <div className={`inline-block text-cloud-900 text-xl font-bold md:hidden ${isEditable ? "mt-7" : ""}`}>
            Name
          </div>
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

        <div className="flex flex-col px-3 pt-3 md:flex-row md:w-4/12 md:px-0 md:pt-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">Endpoint</div>
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

        <div className="flex flex-col px-3 pt-3 md:flex-row md:w-2/12 md:px-0 md:pt-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">API Header</div>
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

        <div className="flex flex-col p-3 md:flex-row md:w-2/12 md:p-0">
          <div className="inline-block text-cloud-900 text-xl font-bold md:hidden">API Key</div>
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

        {!isEditable && (
          <div className="flex absolute text-cerulean-200 ml-60 -mt-7 md:static md:w-1/12 md:m-0">
            <Trash2 className="cursor-pointer" onClick={removeEndpoint} data-testid="trash2-icon" />
            <Edit
              className="ml-3 cursor-pointer"
              onClick={() => {
                setEditable(true);
              }}
              data-testid="edit-icon"
            />
          </div>
        )}
      </div>

      {isEditable && (
        <div className="flex flex-row text-white text-base justify-center items-center md:m-0">
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
  );
};
