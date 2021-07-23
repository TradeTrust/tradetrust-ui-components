import React, { ReactElement } from "react";
import { OverlayContextProvider } from "../../common/context/OverlayContext";
import { AddressResolver } from "./AddressResolver";

export default {
  title: "AddressResolver/AddressResolver",
  component: AddressResolver,
};

export const DefaultAddressResolver = (): ReactElement => {
  localStorage.setItem(
    "ADDRESS_THIRD_PARTY_ENDPOINTS",
    JSON.stringify([
      {
        name: "demo 123",
        endpoint: "https://demo-resolver.tradetrust.io",
        apiHeader: "x-api-key",
        apiKey: "DEMO",
        path: { addressResolution: "/identifier", entityLookup: "/search" },
      },
      {
        name: "demo 123",
        endpoint: "https://demo-resolver2.tradetrust.io",
        apiHeader: "x-api-key",
        apiKey: "DEMO",
        path: { addressResolution: "/identifier", entityLookup: "/search" },
      },
    ])
  );

  return (
    <OverlayContextProvider>
      <AddressResolver />
    </OverlayContextProvider>
  );
};

export const AddressResolverNoThirdPartyEndPoint = (): ReactElement => {
  localStorage.setItem("ADDRESS_THIRD_PARTY_ENDPOINTS", JSON.stringify([]));

  return <AddressResolver />;
};
