import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { IconSuccess } from "../../Icon";

export const AddResolverConfirmation: FunctionComponent = () => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl text-center w-80 h-64">
      <div className="flex flex-col">
        <IconSuccess />
        <h4 className="text-cloud-900 text-xl mt-5">Success</h4>
        <p className="mt-3 text-cloud-900">Address successfully added</p>
        <div
          className="flex bg-cerulean rounded-xl w-28 h-9 items-center justify-center mx-auto mt-3 text-white cursor-pointer"
          onClick={() => {
            setOverlayVisible(false);
            showOverlay(undefined);
          }}
        >
          Okay, got it
        </div>
      </div>
    </div>
  );
};
