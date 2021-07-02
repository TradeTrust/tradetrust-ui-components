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
    <>
      <tr className={`${className} ${orderNumber % 2 !== 0 ? "bg-cerulean-50" : "bg-white"}`}>
        <th>
          {!isEditable && (
            <>
              <i className="fas fa-sort-up" onClick={onMoveEntryUp} />
              <i className="fas fa-sort-down" onClick={onMoveEntryDown} />
            </>
          )}
        </th>
        <td>{orderNumber}</td>
        <td>
          {isEditable ? (
            <Input
              placeholder="Name"
              value={endpointName}
              onChange={onEndpointNameChanged}
              errorMessage={inputErrorMessageName}
            />
          ) : (
            <>{name}</>
          )}
        </td>
        <td>
          {isEditable ? (
            <Input
              placeholder="Endpoint"
              value={endpointApi}
              onChange={onEndpointApiChanged}
              errorMessage={inputErrorMessageEndpoint}
            />
          ) : (
            <>{api}</>
          )}
        </td>
        <td>
          {isEditable ? (
            <Input
              placeholder="API Header"
              value={endpointApiHeader}
              onChange={onEndpointApiHeaderChanged}
              errorMessage={inputErrorMessageApiHeader}
            />
          ) : (
            <>{apiHeader}</>
          )}
        </td>
        <td colSpan={isEditable ? 2 : 0}>
          {isEditable ? (
            <Input
              placeholder="API Key"
              value={endpointApiKey}
              onChange={onEndpointApiKeyChanged}
              errorMessage={inputErrorMessageApiKey}
            />
          ) : (
            <>{apiKey}</>
          )}
        </td>
        {isLoading ? (
          <td className={isEditable ? "" : ""}>
            <LoaderSpinner className="inline-block mx-2" />
          </td>
        ) : (
          <>
            {!isEditable && (
              <td className={"edit-delete"}>
                <div className="flex">
                  <Trash2 onClick={removeEndpoint} data-testid="trash2-icon" />
                  <Edit
                    onClick={() => {
                      setEditable(true);
                    }}
                    data-testid="edit-icon"
                  />
                </div>
              </td>
            )}
          </>
        )}
        {/* {isLoading ? (
          <td className={isEditable ? "is-editable" : ""}>
            <LoaderSpinner className="inline-block mx-2" />
          </td>
        ) : (
          <td className={isEditable ? "hidden" : "is-editable"}>
            <div className="flex">
              <Trash2 onClick={removeEndpoint} data-testid="trash2-icon" />
              <Edit
                onClick={() => {
                  setEditable(true);
                }}
                data-testid="edit-icon"
              />
            </div>
          </td>
        )} */}

        {/* {isLoading ? (
          <td className={isEditable ? "is-editable" : ""}>
            <LoaderSpinner className="inline-block mx-2" />
          </td>
        ) : (
          <td className={isEditable ? "is-editable" : ""}>
            <div className="flex">
              {isEditable ? (
                <Save onClick={onSave} data-testid="save-icon" />
              ) : (
                <Edit
                  onClick={() => {
                    setEditable(true);
                  }}
                  data-testid="edit-icon"
                />
              )}
              <Trash2 onClick={removeEndpoint} data-testid="trash2-icon" />
            </div>
          </td>
        )} */}
      </tr>
      {isEditable && (
        <tr className={`${className} ${orderNumber % 2 !== 0 ? "bg-cerulean-50" : "bg-white"}`}>
          <th />
          {/* <td className={isEditable ? "is-editable" : ""} colSpan={6}> */}
          <td className="edit-delete" colSpan={isLoading ? 7 : 6}>
            <div className="flex flex-row text-white justify-center">
              <div
                className="flex bg-rose rounded-xl py-2 px-2.5 w-20 h-9 justify-center items-center cursor-pointer"
                onClick={removeEndpoint}
              >
                Delete
              </div>
              <div
                className="flex bg-cerulean rounded-xl py-2 px-2.5 w-20 h-9 ml-10 justify-center items-center cursor-pointer"
                onClick={onSave}
              >
                Save
              </div>
            </div>
          </td>
          <th />
        </tr>
      )}
    </>
  );
};
