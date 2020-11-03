import React, { ReactElement } from "react";
import { NetworkBar } from "./NetworkBar";

export default {
  title: "NetworkBar/NetworkBar",
  component: NetworkBar,
  parameters: {
    componentSubtitle: "Bar showing which blockchain network, the application is connected to.",
  },
};

export const Default = (): ReactElement => {
  return <NetworkBar network="ropsten" />;
};
