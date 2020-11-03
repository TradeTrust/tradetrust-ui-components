import styled from "@emotion/styled";
import React from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { ButtonSolidRedWhite, ButtonSolidWhiteGrey } from "../../Button";
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
            <ButtonSolidWhiteGrey
              onClick={() => {
                setOverlayVisible(false);
                showOverlay(undefined);
              }}
            >
              Cancel
            </ButtonSolidWhiteGrey>
          </div>
          <div className="col-auto">
            <ButtonSolidRedWhite onClick={deleteAddress}>Delete</ButtonSolidRedWhite>
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
