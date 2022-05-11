import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { Button } from "../../Button";
import { IconSuccess } from "../../Icon";

export const AddResolverConfirmation: FunctionComponent = () => {
  const { closeOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl text-center w-80 h-64">
      <div className="flex flex-col">
        <div className="self-center mt-10">
          <IconSuccess className="text-emerald h-14 w-14" />
        </div>
        <h3 className="text-cloud-900 text-xl mt-5">Success</h3>
        <p className="mt-3 text-cloud-900">Address successfully added</p>
        <Button
          className="bg-cerulean-500 rounded-xl px-3 py-2 mx-auto mt-3 text-white font-normal"
          onClick={closeOverlay}
        >
          Okay, got it
        </Button>
      </div>
    </div>
  );
};
