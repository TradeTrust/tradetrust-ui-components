import styled from "@emotion/styled";
import { rgba } from "polished";
import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../common/context/OverlayContext";
import { mixin, vars } from "../../../styles";

// TODO check for twin styles

const OverlayBaseStyle = (): string => {
  return `
    transition: visibility 0.4s 0.1s ${vars.easeOutCubic}, opacity 0.4s 0.1s ${vars.easeOutCubic};
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .overlay-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${rgba(vars.black, 0.4)};
    }
  `;
};

export const OverlayContentBaseStyle = (): string => {
  return `
    transition: visibility 0.4s 0.1s ${vars.easeOutCubic}, opacity 0.4s 0.1s ${
    vars.easeOutCubic
  }, transform 0.4s 0.1s ${vars.easeOutCubic};
    box-shadow: 0 8px 20px ${rgba(vars.black, 0.2)};
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background-color: ${vars.white};
    width: calc(100vw - (15px * 2));
    height: calc(100vh - (15px * 2));
    max-width: 1280px;
    padding: 20px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    .overlay-header {
      margin-bottom: 20px;
    }

    .title-icon {
      svg {
        margin-right: 8px;

        .x-circle {
          color: ${vars.red};
        }

        .check-circle {
          color: ${vars.teal};
        }
      }
    }

    .overlay-title {
      ${mixin.fontSourcesansproBold()}
      color: ${vars.grey};
      margin-bottom: 0;
      flex-grow: 1;
    }

    .overlay-body {
      flex: 1;
    }

    .overlay-cancel {
      cursor: pointer;

      &:hover {
        svg {
          color: ${vars.grey300};
        }
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
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
  ${OverlayBaseStyle()}
`;
