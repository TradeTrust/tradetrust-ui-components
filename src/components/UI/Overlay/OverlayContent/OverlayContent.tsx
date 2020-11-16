import React, { FunctionComponent } from "react";
import { CheckCircle, X, XCircle } from "react-feather";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { useLockBodyScroll } from "../../../../common/hooks/useLockBodyScroll";
import "../../../../index.css";
import { vars } from "../../../../styles";

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
  const { isOverlayVisible, setOverlayVisible, showOverlay } = useOverlayContext();
  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
    showOverlay(undefined);
  };

  useLockBodyScroll();

  return (
    <>
      {isOverlayVisible && (
        <div className={`${className}`} {...props}>
          <div className="overlay-header">
            <div className="flex mx-0 items-center">
              {isSuccess !== undefined && (
                <div className="col-auto mr-1">
                  <div className="title-icon">
                    {isSuccess ? <CheckCircle color={`${vars.teal}`} /> : <XCircle color={`${vars.red}`} />}
                  </div>
                </div>
              )}

              <h3 className="overlay-title">{title}</h3>

              <div className="overlay-cancel" onClick={handleCloseOverlay}>
                <X />
              </div>
            </div>
          </div>
          <div className="overlay-body">
            <div className="flex flex-col h-full text-black-light">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};