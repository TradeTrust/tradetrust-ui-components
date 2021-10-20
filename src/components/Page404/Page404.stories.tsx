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
  return (
    <Page404>
      <h3 className="font-ubuntu font-normal w-60 sm:w-80 my-2 sm:my-4 text-lg sm:text-2xl">
        Go to
        <a className="text-cerulean-200" href="/">
          {" "}
          Homepage
        </a>
        ?
      </h3>
    </Page404>
  );
};
