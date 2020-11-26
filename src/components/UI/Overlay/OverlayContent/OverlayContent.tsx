import React, { FunctionComponent } from "react";
import { CheckCircle, X, XCircle } from "react-feather";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { useLockBodyScroll } from "../../../../common/hooks/useLockBodyScroll";

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
                    {isSuccess ? <CheckCircle className="text-teal" /> : <XCircle className="text-red" />}
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
            <div className="flex flex-col h-full text-grey-900">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
