import React, { FunctionComponent } from "react";
import { ErrorPage } from "./ErrorPage";
import errorBoundary from "../../static/images/ErrorPage/error-boundary.png";
import page404 from "../../static/images/Page404/Page404.png";

export default {
  title: "Error/ErrorPage",
  component: ErrorPage,
  parameters: {
    componentSubtitle: "General error page",
  },
};

export const Default: FunctionComponent = () => {
  return (
    <ErrorPage
      pageTitle="ERROR"
      header="Something Went Wrong"
      description="There is an error with this document, please contact your issuing institution."
      image={errorBoundary}
    >
      <h3 className="font-normal my-2 sm:my-4 text-lg sm:text-2xl">
        Go to
        <a className="text-cerulean-500" href="/">
          {" "}
          Homepage
        </a>
        ?
      </h3>
    </ErrorPage>
  );
};

export const Page404: FunctionComponent = () => {
  return (
    <ErrorPage
      pageTitle="ERROR 404"
      header="Oops!"
      description="The page you are trying to reach doesn't seem to exist."
      image={page404}
    >
      <h3 className="font-normal my-2 sm:my-4 text-lg sm:text-2xl">
        Go to
        <a className="text-cerulean-500" href="/">
          {" "}
          Homepage
        </a>
        ?
      </h3>
    </ErrorPage>
  );
};
