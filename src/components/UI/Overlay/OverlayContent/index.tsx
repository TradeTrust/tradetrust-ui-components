import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { vars } from "../../../../styles";
import { X, XCircle, CheckCircle } from "react-feather";
import { useLockBodyScroll } from "../../../../common/hooks/useLockBodyScroll";
import { useOverlayContext } from "../../../../common/context/OverlayContext";

import "../../../../index.css";
export interface OverlayContentProps {
  className?: string;
  title: string;
  isSuccess?: boolean;
  children?: React.ReactNode;
}

export const OverlayContent: FunctionComponent<OverlayContentProps> = ({
  className,
  title,
  isSuccess,
  children,
  ...props
}) => {
  const { isOverlayVisible, setOverlayVisible } = useOverlayContext();
  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
  };

  useLockBodyScroll();

  return (
    <CSSTransition in={isOverlayVisible} timeout={300} classNames="fadescale" appear>
      <div className={`overlay-content ${className}`} {...props}>
        <div className="overlay-header">
          <div className="row no-gutters align-items-center">
            {isSuccess !== undefined && (
              <div className="col-auto mr-1">
                <div className="title-icon">
                  {isSuccess ? <CheckCircle color={`${vars.teal}`} /> : <XCircle color={`${vars.red}`} />}
                </div>
              </div>
            )}
            <div className="col">
              <h3 className="overlay-title">{title}</h3>
            </div>
            <div className="col-auto ml-auto">
              <div className="overlay-cancel" onClick={handleCloseOverlay}>
                <X />
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-body">
          <div className="d-flex flex-column h-100">{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};
