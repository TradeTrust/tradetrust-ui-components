import css, { SerializedStyles } from "@emotion/css";
import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { useOverlayContext } from "../../../common/context/OverlayContext";
import { mixin } from "../../../styles";

export const OverlayContentBaseStyle = (): SerializedStyles => {
  return css`
    ${tw`relative flex flex-col p-5 bg-white shadow transition duration-400 ease-out-cubic overflow-auto scrolling-touch`}
    z-index: 1;
    width: calc(100vw - (15px * 2));
    height: calc(100vh - (15px * 2));
    max-width: 1280px;

    .overlay-header {
      ${tw`mb-5`}
    }

    .title-icon {
      svg {
        ${tw`mr-2`}

        .x-circle {
          ${tw`text-red`}
        }

        .check-circle {
          ${tw`text-teal`}
        }
      }
    }

    .overlay-title {
      ${mixin.fontSourcesansproBold()}
      ${tw`text-grey mb-0 flex-grow`}
    }

    .overlay-body {
      ${tw`flex-1`}
    }

    .overlay-cancel {
      cursor: pointer;

      &:hover {
        svg {
          ${tw`text-grey-300`}
        }
      }
    }

    p {
      ${tw`mt-0 mb-4`}
    }
  `;
};

export interface OverlayProps {
  className?: string;
}

export const OverlayUnStyled: FunctionComponent<OverlayProps> = ({ className }) => {
  const { overlayContent, showOverlay, isOverlayVisible, setOverlayVisible } = useOverlayContext();

  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
    showOverlay(undefined);
  };

  return (
    <>
      {isOverlayVisible && (
        <div className={`overlay ${className}`}>
          <div className="overlay-bg" onClick={handleCloseOverlay} />
          {overlayContent}
        </div>
      )}
    </>
  );
};

export const Overlay = styled(OverlayUnStyled)`
  ${tw`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center transition duration-400 ease-out-cubic z-10`}

  .overlay-bg {
    ${tw`absolute top-0 left-0 w-full h-full bg-black bg-opacity-40`}
  }
`;
