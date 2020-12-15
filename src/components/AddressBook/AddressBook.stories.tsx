import { withKnobs } from "@storybook/addon-knobs";
import React, { FunctionComponent, ReactElement } from "react";
import { OverlayContextProvider, useOverlayContext } from "../../common/context/OverlayContext";
import { Button } from "../UI/Button";
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
      <Button onClick={() => showOverlay(children)}>{buttonText}</Button>
    </>
  );
};

export const DefaultAddressBook = (): ReactElement => {
  localStorage.setItem("ADDRESS_BOOK", JSON.stringify({}));

  return (
    <OverlayContextProvider>
      <OverlayDemo buttonText="Default address book">
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

export const PopulatedLocalAddressBook = (): ReactElement => {
  localStorage.setItem(
    "ADDRESS_BOOK",
    JSON.stringify({
      "0xa": "Name 1",
      "0xb": "Name 2",
      "0xc": "Name 3",
      "0xd": "Name 4",
      "0xe": "Name 5",
      "0xf": "Name 6",
      "0xg": "Name 7",
      "0xh": "Name 8",
      "0xi": "Name 9",
      "0xj": "Name 10",
      "0xk": "Name 11",
      "0xl": "Name 12",
      "0xm": "Name 13",
      "0xn": "Name 14",
      "0xo": "Name 15",
      "0xp": "Name 16",
      "0xq": "Name 17",
      "0xr": "Name 18",
      "0xs": "Name 19",
      "0xt": "Name 20",
      "0xu": "Name 21",
      "0xv": "Name 22",
      "0xw": "Name 23",
      "0xx": "Name 24",
      "0xy": "Name 25",
      "0xz": "Name 26",
    })
  );
  return (
    <OverlayContextProvider>
      <OverlayDemo buttonText="Populated address book">
        <AddressBook
          onAddressSelected={(address) => window.alert(`${address} was selected!`)}
          thirdPartyAPIEndpoints={[]}
          network="ropsten"
          title="Address Book"
          paginationLimit={10}
        />
      </OverlayDemo>
    </OverlayContextProvider>
  );
};

export const PopulatedThirdpartyAddressBook = (): ReactElement => {
  localStorage.setItem(
    "ADDRESS_BOOK",
    JSON.stringify({
      "0xa": "Name 1",
      "0xb": "Name 2",
      "0xc": "Name 3",
      "0xd": "Name 4",
      "0xe": "Name 5",
      "0xf": "Name 6",
      "0xg": "Name 7",
      "0xh": "Name 8",
      "0xi": "Name 9",
      "0xj": "Name 10",
    })
  );

  return (
    <OverlayContextProvider>
      <OverlayDemo buttonText="Populated third party address book">
        <AddressBook
          onAddressSelected={(address) => window.alert(`${address} was selected!`)}
          thirdPartyAPIEndpoints={[
            {
              name: "demo 123",
              endpoint: "https://demo-resolver.tradetrust.io",
              apiHeader: "x-api-key",
              apiKey: "DEMO",
              path: { addressResolution: "/identifier", entityLookup: "/search" },
            },
          ]}
          network="ropsten"
          title="Address Book"
          paginationLimit={3}
        />
      </OverlayDemo>
    </OverlayContextProvider>
  );
};

export const ThirdpartyAddressBookNoEntityLookup = (): ReactElement => {
  localStorage.setItem(
    "ADDRESS_BOOK",
    JSON.stringify({
      "0xa": "Name 1",
      "0xb": "Name 2",
      "0xc": "Name 3",
      "0xd": "Name 4",
      "0xe": "Name 5",
      "0xf": "Name 6",
      "0xg": "Name 7",
      "0xh": "Name 8",
      "0xi": "Name 9",
      "0xj": "Name 10",
    })
  );

  return (
    <OverlayContextProvider>
      <OverlayDemo buttonText="Third party address book with no entityLookup feature">
        <AddressBook
          onAddressSelected={(address) => window.alert(`${address} was selected!`)}
          thirdPartyAPIEndpoints={[
            {
              name: "demo 123",
              endpoint: "https://demo-resolver.tradetrust.io",
              apiHeader: "x-api-key",
              apiKey: "DEMO",
              path: { addressResolution: "/identifier" },
            },
          ]}
          network="ropsten"
          title="Address Book"
          paginationLimit={3}
        />
      </OverlayDemo>
    </OverlayContextProvider>
  );
};
