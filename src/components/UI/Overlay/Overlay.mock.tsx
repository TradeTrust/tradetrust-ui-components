import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../common/context/OverlayContext";
import { Button } from "../Button";
import { Overlay } from "./Overlay";

export interface OverlayDemoProps {
  buttonText: string;
  children: React.ReactNode;
}

export const OverlayDemo: FunctionComponent<OverlayDemoProps> = ({ buttonText, children }) => {
  const { showOverlay } = useOverlayContext();

  return (
    <>
      <Overlay />
      <Button onClick={() => showOverlay(children)}>{buttonText}</Button>
    </>
  );
};
