import React, { ReactElement } from "react";
import { AddressResolver } from "./AddressResolver";
import { DeleteResolverConfirmation } from "./DeleteResolverConfirmation";

export default {
  title: "AddressResolver/AddressResolver",
  component: AddressResolver,
};

export const DefaultAddressResolver = (): ReactElement => {
  return <AddressResolver />;
};

export const DefaultDeleteResolverConfirmation = (): ReactElement => {
  return (
    <DeleteResolverConfirmation
      title="Delete Address Resolver"
      name="Test API Name"
      deleteAddress={() => alert("Deleted Confirmed")}
    />
  );
};
