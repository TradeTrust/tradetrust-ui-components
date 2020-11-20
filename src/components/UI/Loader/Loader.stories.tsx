import React, { ReactElement } from "react";
import { Loader, LoaderSpinner } from "./Loader";

export default {
  title: "UI/Loader",
  component: Loader,
  parameters: {
    componentSubtitle: "Types of loaders, with custom parameters.",
  },
};

export const Spinner = (): ReactElement => {
  return <LoaderSpinner primary="#808080" secondary="#d3d3d3" />;
};

export const SpinnerCustomWidth = (): ReactElement => {
  return <LoaderSpinner width="90px" primary="#808080" secondary="#d3d3d3" />;
};
