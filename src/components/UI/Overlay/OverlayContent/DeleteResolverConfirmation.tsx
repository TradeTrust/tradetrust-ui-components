import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { Button } from "../../Button";
import { OverlayContentProps } from "./index";

interface DeleteResolverConfirmationProps extends OverlayContentProps {
  name: string;
  deleteAddress: () => void;
}

export const DeleteResolverConfirmation: FunctionComponent<DeleteResolverConfirmationProps> = ({
  name,
  deleteAddress,
}) => {
  const { closeOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl text-center w-96 p-8">
      <div className="flex flex-col">
        <h3 className="font-ubuntu text-2xl font-normal text-cloud-800">Delete Address Resolver</h3>
        <p className="text-cloud-800 mt-7">Are you sure you want to delete this address resolver?</p>
        <p className="text-cloud-800 mt-7">{name}</p>
        <div className="flex flex-row mt-7 justify-center">
          <Button
            className="bg-white border-cloud-100 rounded-xl shadow-xl px-3 py-2 text-cerulean"
            onClick={closeOverlay}
          >
            Cancel
          </Button>
          <Button className="bg-scarlet-500 rounded-xl px-3 py-2 ml-8 text-white" onClick={deleteAddress}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
