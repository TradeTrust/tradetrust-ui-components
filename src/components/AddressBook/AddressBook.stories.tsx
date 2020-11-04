import { withKnobs } from "@storybook/addon-knobs";
import React, { FunctionComponent, ReactElement } from "react";
import { OverlayContextProvider, useOverlayContext } from "../../common/context/OverlayContext";
import { ButtonSolid } from "../UI/Button";
import { Overlay } from "../UI/Overlay";
import { AddressBook } from "./AddressBook";

export default {
  title: "AddressBook/AddressBook",
  component: AddressBook,
  decorators: [withKnobs],
};

export interface OverlayDemoProps {
  buttonText: string;
  children: React.ReactNode;
}

const OverlayDemo: FunctionComponent<OverlayDemoProps> = ({ buttonText, children }) => {
  const { showOverlay } = useOverlayContext();

  return (
    <>
      <Overlay />
      <ButtonSolid onClick={() => showOverlay(children)}>{buttonText}</ButtonSolid>
    </>
  );
};

export const DefaultAddressBook = (): ReactElement => {
  return (
    <OverlayContextProvider>
      <OverlayDemo buttonText="Default Address Book">
        <AddressBook
          onAddressSelected={(address) => window.alert(`${address} was selected!`)}
          thirdPartyAPIEndpoints={[]}
          network="ropsten"
          title="Address Book"
        />
      </OverlayDemo>
    </OverlayContextProvider>
  );
};
