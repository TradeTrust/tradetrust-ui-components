import React, { FunctionComponent } from "react";
import { CheckCircle } from "react-feather";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { Button } from "../../Button";

export const AddResolverConfirmation: FunctionComponent = () => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl text-center w-80 h-64">
      <div className="flex flex-col">
        <div className="self-center mt-10">
          <CheckCircle className="text-emerald h-14 w-14" />
        </div>
        <h3 className="text-cloud-900 text-xl mt-5">Success</h3>
        <p className="mt-3 text-cloud-900">Address successfully added</p>
        <Button
          className="bg-cerulean rounded-xl px-3 py-2 mx-auto mt-3 text-white font-normal"
          onClick={() => {
            setOverlayVisible(false);
            showOverlay(undefined);
          }}
        >
          Okay, got it
        </Button>
      </div>
    </div>
  );
};
