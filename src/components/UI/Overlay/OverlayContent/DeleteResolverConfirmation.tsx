import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { Button } from "../../Button";
import { OverlayContent, OverlayContentProps } from "./index";

interface DeleteResolverConfirmationProps extends OverlayContentProps {
  name: string;
  deleteAddress: () => void;
}

export const DeleteResolverConfirmation: FunctionComponent<DeleteResolverConfirmationProps> = ({
  name,
  deleteAddress,
  ...props
}) => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();

  return (
    <OverlayContent className="max-w-md" {...props}>
      <div className="flex-1">
        <p>Are you sure you want to delete {name}?</p>
      </div>
      <div className="flex mx-0">
        <div className="col-auto ml-auto mr-2">
          <Button
            className="bg-white text-gray-500 hover:bg-gray-50"
            onClick={() => {
              setOverlayVisible(false);
              showOverlay(undefined);
            }}
          >
            Cancel
          </Button>
        </div>
        <div className="col-auto">
          <Button className="bg-crimson-red-400 text-white hover:bg-red-400" onClick={deleteAddress}>
            Delete
          </Button>
        </div>
      </div>
    </OverlayContent>
  );
};
