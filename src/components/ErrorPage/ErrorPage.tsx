import React, { FunctionComponent } from "react";
import wavesBackground from "../../static/images/common/wave-lines.png";

export interface ErrorPageProps {
  pageTitle: string;
  header: string;
  description: string;
  image: string;
}

export const ErrorPage: FunctionComponent<ErrorPageProps> = ({ pageTitle, header, description, image, children }) => {
  return (
    <div
      className="w-full h-full bg-cerulean-50 bg-no-repeat bg-cover pb-40"
      style={{ backgroundImage: `url(${wavesBackground})` }}
    >
      <div className="container">
        <h2 className="bold text-cloud-900">{pageTitle}</h2>
        <div className="relative max-w-172 h-120 sm:h-132 mx-auto mt-12">
          <div
            className="h-56 sm:h-full bg-contain sm:bg-auto bg-center sm:bg-left bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="sm:absolute text-cloud-900 mx-auto mt-12 sm:mt-0 sm:right-0 sm:top-1/2 font-ubuntu w-72 sm:w-104">
            <h1 className="text-xl sm:text-4xl mb-4">{header}</h1>
            <h3 className="font-normal leading-tight text-lg sm:text-2xl">{description}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
