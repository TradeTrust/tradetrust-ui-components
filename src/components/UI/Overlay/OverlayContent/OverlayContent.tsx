import React, { FunctionComponent } from "react";
import { CheckCircle, X } from "react-feather";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { useLockBodyScroll } from "../../../../common/hooks/useLockBodyScroll";
import { IconError } from "../../Icon";

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
          className={`relative flex flex-col p-5 bg-white rounded-xl shadow-lg overflow-auto h-auto ${className}`}
          {...props}
          style={{
            width: "calc(100vw - (15px * 2))",
          }}
        >
          <div className="mb-2">
            <div className="flex mx-0 items-center">
              {isSuccess !== undefined && (
                <div className="col-auto mr-3">
                  {isSuccess ? <CheckCircle className="text-emerald font-bold" /> : <IconError />}
                </div>
              )}
              <h3 data-testid="overlay-title" className="text-cloud-900 mb-0 flex-grow leading-8">
                {title}
              </h3>
              <div className="cursor-pointer" onClick={handleCloseOverlay} data-testid="overlay-close">
                <X />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col h-full text-cloud-900">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
