import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "@emotion/styled";
import { rgba } from "polished";
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
    transition: visibility 0.3s ${vars.easeOutCubic}, opacity 0.3s ${vars.easeOutCubic}, transform 0.3s ${
    vars.easeOutCubic
  };
    box-shadow: 0 8px 20px ${rgba(vars.black, 0.2)};
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background-color: ${vars.white};
    width: calc(100vw - (15px * 2));
    height: calc(100vh - (15px * 2));
    max-width: ${vars.maxWidth};
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
      ${mixin.fontRobotoBold()}
      color: ${vars.grey};
      margin-bottom: 0;
    }

    .overlay-body {
      flex: 1;
    }

    .overlay-cancel {
      cursor: pointer;

      &:hover {
        svg {
          color: ${vars.lightgrey};
        }
      }
    }
  `;
};

interface OverlayProps {
  className?: string;
  overlayContent: React.ReactNode;
  showOverlay: (overlayContent: React.ReactNode) => void;
  isOverlayVisible: boolean;
  setOverlayVisible: (isOverlayVisible: boolean) => void;
}

export const OverlayUnStyled: FunctionComponent<OverlayProps> = ({
  className,
  overlayContent,
  showOverlay,
  setOverlayVisible,
  isOverlayVisible,
}) => {
  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
  };

  const onOverlayTransitionEnded = (): void => {
    showOverlay(undefined);
  };

  return (
    <CSSTransition
      in={isOverlayVisible}
      timeout={400}
      classNames="fade"
      unmountOnExit
      onExited={onOverlayTransitionEnded}
    >
      <div className={`overlay ${className}`}>
        <div className="overlay-bg" onClick={handleCloseOverlay} />
        {overlayContent}
      </div>
    </CSSTransition>
  );
};

export const Overlay = styled(OverlayUnStyled)`
  ${OverlayBaseStyle()}
`;
