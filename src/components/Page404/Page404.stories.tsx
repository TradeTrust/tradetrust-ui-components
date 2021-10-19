import React, { FunctionComponent } from "react";
import { Page404 } from "./Page404";

export default {
  title: "Error/Page404",
  component: Page404,
  parameters: {
    componentSubtitle: "Page 404",
  },
};

export const Default: FunctionComponent = () => {
  return <Page404 />;
};
