import React from "react";
import { OverlayContentBaseStyle } from "../UI/Overlay";
import { OverlayContent, OverlayContentProps } from "../UI/Overlay/OverlayContent";
import { ButtonSolidWhiteGrey, ButtonSolidRedWhite } from "../UI/Button";
import styled from "@emotion/styled";

interface DeleteResolverConfirmationProps extends OverlayContentProps {
  name: string;
  deleteAddress: () => void;
  setOverlayVisible: (isOverlayVisible: boolean) => void;
}

export const DeleteResolverConfirmation = styled(
  ({ name, deleteAddress, setOverlayVisible, ...props }: DeleteResolverConfirmationProps) => {
    return (
      <OverlayContent setOverlayVisible={setOverlayVisible} {...props}>
        <div className="flex-fill">
          <p>Are you sure you want to delete {name}?</p>
        </div>
        <div className="row no-gutters">
          <div className="col-auto ml-auto mr-2">
            <ButtonSolidWhiteGrey
              onClick={() => {
                setOverlayVisible(false);
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
