import React from "react";
import { NetworkBar } from "./NetworkBar";

export default {
  title: "NetworkBar|NetworkBar",
  component: NetworkBar,
  parameters: {
    componentSubtitle: "Bar showing which blockchain network, the application is connected to.",
  },
};

export const Default = () => {
  return <NetworkBar network="ropsten" />;
};
