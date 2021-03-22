import styled from "@emotion/styled";
import React from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { Button } from "../../Button";
import { OverlayContentBaseStyle } from "../Overlay";
import { OverlayContent, OverlayContentProps } from "./index";

interface DeleteResolverConfirmationProps extends OverlayContentProps {
  name: string;
  deleteAddress: () => void;
}

export const DeleteResolverConfirmation = styled(
  ({ name, deleteAddress, ...props }: DeleteResolverConfirmationProps) => {
    const { setOverlayVisible, showOverlay } = useOverlayContext();

    return (
      <OverlayContent {...props}>
        <div className="flex-1">
          <p>Are you sure you want to delete {name}?</p>
        </div>
        <div className="flex mx-0">
          <div className="col-auto ml-auto mr-2">
            <Button
              className="bg-white text-grey-500 hover:bg-grey-100"
              onClick={() => {
                setOverlayVisible(false);
                showOverlay(undefined);
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="col-auto">
            <Button className="bg-red-500 text-white hover:bg-red-400" onClick={deleteAddress}>
              Delete
            </Button>
          </div>
        </div>
      </OverlayContent>
    );
  }
)`
  ${OverlayContentBaseStyle()}
  height: auto;
  max-width: 400px;
`;
