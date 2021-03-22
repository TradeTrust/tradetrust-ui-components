import React, { FunctionComponent } from "react";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "Error/ErrorPage",
  component: ErrorPage,
  parameters: {
    componentSubtitle: "General error page",
  },
};

export const Default: FunctionComponent = () => {
  return (
    <ErrorPage title="ERROR" description="Something went wrong">
      <a
        className="mt-4 inline-block px-8 py-4 bg-navy-500 hover:bg-orange-500 text-white hover:text-white border-none rounded-full font-semibold uppercase no-underline transition duration-300 ease-out text-sm"
        href="/"
      >
        Go back to home
      </a>
    </ErrorPage>
  );
};
