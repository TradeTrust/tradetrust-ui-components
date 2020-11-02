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
  return <LoaderSpinner primary="blue" secondary="lightblue" />;
};

export const SpinnerCustomWidth = (): ReactElement => {
  return <LoaderSpinner width="90px" primary="grey" secondary="lightgrey" />;
};
