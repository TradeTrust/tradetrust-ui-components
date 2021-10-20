import React, { FunctionComponent } from "react";
import wavesBackground from "../../static/images/common/wave-lines.png";
import page404 from "../../static/images/Page404/Page404.png";

export const Page404: FunctionComponent = ({ children }) => {
  return (
    <div
      className="w-full h-full bg-cerulean-50 bg-no-repeat bg-cover pb-40"
      style={{ backgroundImage: `url(${wavesBackground})` }}
    >
      <div className="container">
        <h2 className="bold text-cloud-900">Error 404</h2>
        <div
          className="relative max-w-132 h-132 max-h-132 m-auto bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${page404})`,
          }}
        >
          <div className="absolute text-cloud-900 left-1/3 inset-y-2/4">
            <h1 className="text-xl sm:text-4xl">Oops!</h1>
            <h3 className="font-ubuntu font-normal w-11/12 sm:w-80 leading-tight text-lg sm:text-2xl">
              The page you are trying to reach doesn&apos;t seem to exist.
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
