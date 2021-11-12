import React, { FunctionComponent } from "react";
import { ErrorStatusPage } from "./ErrorStatusPage";

export default {
  title: "Error/ErrorStatusPage",
  component: ErrorStatusPage,
  parameters: {
    componentSubtitle: "General error page",
  },
};

export const Default: FunctionComponent = () => {
  return (
    <ErrorStatusPage statusCode={404}>
      <a
        className="mt-4 inline-block px-8 py-4 bg-denim hover:bg-tangerine text-white hover:text-white border-none rounded-full font-semibold uppercase no-underline transition duration-300 ease-out text-sm"
        href="/"
      >
        Go back to home
      </a>
    </ErrorStatusPage>
  );
};
