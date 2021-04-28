import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../common/context/OverlayContext";

export const Overlay: FunctionComponent = () => {
  const { overlayContent, showOverlay, isOverlayVisible, setOverlayVisible } = useOverlayContext();

  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
    showOverlay(undefined);
  };

  return (
    <>
      {isOverlayVisible && (
        <div className={`overlay fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50`}>
          <div
            className="overlay-bg absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
            onClick={handleCloseOverlay}
          />
          {overlayContent}
        </div>
      )}
    </>
  );
};
