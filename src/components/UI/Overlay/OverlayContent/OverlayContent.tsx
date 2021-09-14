import React, { FunctionComponent } from "react";
import { X } from "react-feather";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { useLockBodyScroll } from "../../../../common/hooks/useLockBodyScroll";
import { IconError, IconSuccess } from "../../Icon";

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
          <div className="text-cloud-900">
            <div className="flex flex-nowrap items-center mb-2">
              {isSuccess !== undefined && (
                <div className="w-auto mr-3">
                  {isSuccess ? <IconSuccess className="text-emerald" /> : <IconError />}
                </div>
              )}
              <h3 className="mb-0 leading-8" data-testid="overlay-title">
                {title}
              </h3>
              <div className="w-auto ml-auto cursor-pointer" onClick={handleCloseOverlay} data-testid="overlay-close">
                <X />
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
