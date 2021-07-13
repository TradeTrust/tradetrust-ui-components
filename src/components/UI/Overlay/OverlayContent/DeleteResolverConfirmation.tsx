import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { OverlayContentProps } from "./index";

interface DeleteResolverConfirmationProps extends OverlayContentProps {
  name: string;
  deleteAddress: () => void;
}

export const DeleteResolverConfirmation: FunctionComponent<DeleteResolverConfirmationProps> = ({
  name,
  deleteAddress,
}) => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl w-96 h-72 p-8">
      <div className="flex flex-col">
        <h3 className="font-ubuntu text-2xl font-normal text-cloud-900">Delete Address Resolver</h3>
        <p className="text-cloud-900 mt-5">Are you sure you want to delete this address resolver?</p>
        <p className="text-cloud-900 mt-5">{name}</p>
        <div className="flex flex-row mt-5">
          <div
            className="flex bg-white border rounded-lg shadow-xl w-16 h-9 items-center justify-center text-cerulean cursor-pointer"
            onClick={() => {
              setOverlayVisible(false);
              showOverlay(undefined);
            }}
          >
            Cancel
          </div>
          <div
            className="flex bg-rose rounded-lg w-16 h-9 ml-8 items-center justify-center text-white cursor-pointer"
            onClick={deleteAddress}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};
