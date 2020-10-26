import React from "react";
import { Loader, LoaderSpinner } from "./Loader";

export default {
  title: "UI/Loader",
  component: Loader,
  parameters: {
    componentSubtitle: "Types of loaders, with custom parameters.",
  },
};

export const Spinner = () => {
  return <LoaderSpinner />;
};

export const SpinnerCustomWidth = () => {
  return <LoaderSpinner width="90px" />;
};
