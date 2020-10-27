import React, { ReactElement } from "react";
import { AddressesTable } from "./AddressesTable";

export default {
  title: "AddressesTable/AddressesTable",
  component: AddressesTable,
};

export const DefaultAddressesTable = (): ReactElement => {
  return (
    <AddressesTable
      isNewEndpoint={false}
      setNewEndpoint={() => {}}
      showOverlay={() => {}}
      isOverlayVisible={false}
      setOverlayVisible={() => {}}
    />
  );
};
