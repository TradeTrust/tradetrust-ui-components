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
        <div
          className={`relative flex flex-col p-5 bg-white shadow overflow-auto scrolling-touch h-auto ${className}`}
          {...props}
          style={{
            zIndex: 1,
            width: "calc(100vw - (15px * 2))",
          }}
        >
          <div className="mb-5">
            <div className="flex mx-0 items-center">
              {isSuccess !== undefined && (
                <div className="col-auto mr-3">
                  {isSuccess ? <CheckCircle className="text-teal" /> : <XCircle className="text-red" />}
                </div>
              )}
              <h3 className="text-grey mb-0 flex-grow leading-8">{title}</h3>
              <div className="cursor-pointer" onClick={handleCloseOverlay}>
                <X />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col h-full text-grey-900">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
