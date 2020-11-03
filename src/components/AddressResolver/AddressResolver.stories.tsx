import React, { ReactElement } from "react";
import { AddressResolver } from "./AddressResolver";

export default {
  title: "AddressResolver/AddressResolver",
  component: AddressResolver,
};

export const DefaultAddressResolver = (): ReactElement => {
  return <AddressResolver />;
};
