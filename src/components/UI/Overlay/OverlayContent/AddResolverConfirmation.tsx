import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";

export const AddResolverConfirmation: FunctionComponent = () => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl text-center w-80 h-64">
      <div className="flex flex-col">
        <svg
          className="mx-auto mt-10"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.3337 25.8533V28C51.3308 33.0317 49.7015 37.9276 46.6888 41.9576C43.676 45.9876 39.4413 48.9358 34.6161 50.3625C29.791 51.7891 24.6339 51.6178 19.9141 49.874C15.1942 48.1303 11.1645 44.9076 8.4259 40.6865C5.68728 36.4654 4.38651 31.4722 4.71757 26.4514C5.04864 21.4307 6.99381 16.6514 10.263 12.8265C13.5321 9.00159 17.9502 6.3359 22.8581 5.22702C27.766 4.11813 32.9009 4.62546 37.497 6.67334"
            stroke="#3AAF86"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M51.3333 9.33301L28 32.6897L21 25.6897"
            stroke="#3AAF86"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h4 className="text-cloud-900 text-xl mt-5">Success</h4>
        <p className="mt-3 text-cloud-900">Address successfully added</p>
        <div
          className="flex bg-cerulean rounded-xl w-28 h-9 items-center justify-center mx-auto mt-3 text-white cursor-pointer"
          onClick={() => {
            setOverlayVisible(false);
            showOverlay(undefined);
          }}
        >
          Okay, got it
        </div>
      </div>
    </div>
  );
};
