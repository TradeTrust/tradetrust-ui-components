import React, { FunctionComponent } from "react";
import wavesBackground from "../../static/images/common/wave-lines.png";
import page404 from "../../static/images/Page404/Page404.png";

export const Page404: FunctionComponent = () => {
  return (
    <div
      className="w-full h-4/5 bg-cerulean-50 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${wavesBackground})` }}
    >
      <div className="container">
        <h2 className="bold text-cloud-900">Error 404</h2>
        <div
          className="w-full relative bg-contain sm:bg-auto bg-no-repeat"
          style={{
            height: "80vh",
            backgroundPosition: "top center",
            backgroundImage: `url(${page404})`,
          }}
        >
          <div className="absolute w-max h-min inset-y-1/2 inset-x-1/2 -mt-8 -ml-20 text-cloud-900">
            <h1 className="text-xl sm:text-4xl">Oops!</h1>
            <h3 className="font-ubuntu font-normal w-60 sm:w-80 leading-tight text-lg sm:text-2xl">
              The page you are trying to reach doesn&apos;t seem to exist.
            </h3>
            <h3 className="font-ubuntu font-normal w-60 sm:w-80 my-4 text-lg sm:text-2xl">
              Go to
              <a className="text-cerulean-200" href="/">
                {" "}
                Homepage
              </a>
              ?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
