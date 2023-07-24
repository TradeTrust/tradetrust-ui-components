import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import warningIcon from "../../../../../src/static/images/Alert/warning.png";
import { Button } from "../../Button";

interface ProviderTimeoutMessageProps {
  address: string;
}

export const ProviderTimeoutMessage: FunctionComponent<ProviderTimeoutMessageProps> = ({address}) => {
  const { closeOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl text-center w-80 h-65 p-5">
      <div className="flex flex-col">
        <div className="self-center mt-10">
          <img className="h-14 w-14" src={warningIcon} />
        </div>
        <p className="mt-3 text-cloud-800">
          Loading the endorsement chain is taking longer than usual. To address
          this, <a href={address} target="_blank">change your Remote Procedure Call (RPC) provider</a>.
        </p>
        <Button
          className="bg-cerulean-500 hover:bg-cerulean-800 rounded-xl px-3 py-2 mx-auto mt-3 text-white font-normal"
          onClick={closeOverlay}
        >
          Dismiss
        </Button>
      </div>
    </div>
  );
};
