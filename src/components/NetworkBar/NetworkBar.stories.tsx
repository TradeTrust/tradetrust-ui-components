import React, { ReactElement, useState } from "react";
import { Button } from "../UI/Button";
import { NetworkBar } from "./NetworkBar";

export default {
  title: "NetworkBar/NetworkBar",
  component: NetworkBar,
  parameters: {
    componentSubtitle: "Bar showing which blockchain network, the application is connected to.",
  },
};

export const Default = (): ReactElement => {
  const [network, setNetwork] = useState("ropsten");

  return (
    <div>
      <NetworkBar network={network}>
        You are currently on <span className="capitalize">{network}</span> network. To change it, please upload a new
        config file.
      </NetworkBar>
      {/* To Simulate change of config file or network by pressing the buttons */}
      <div className="mt-6 flex justify-around max-w-md mx-auto">
        <Button className="bg-forest-500 text-white hover:bg-forest-700" onClick={() => setNetwork("ropsten")}>
          Change to Ropsten
        </Button>
        <Button className="bg-tangerine-500 text-white hover:bg-tangerine-800" onClick={() => setNetwork("rinkeby")}>
          Change to Rinkeby
        </Button>
      </div>
    </div>
  );
};
