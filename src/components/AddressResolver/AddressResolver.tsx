import React, { FunctionComponent, useState } from "react";
import { Button } from "../UI/Button";
import { AddressesTable } from "./AddressesTable";

export const AddressResolver: FunctionComponent = () => {
  const [isNewEndpoint, setNewEndpoint] = useState(false);

  return (
    <>
      <div className="flex items-end">
        <div className="flex-1 flex-col">
          <h3 className="font-ubuntu text-2.5 text-cloud-900">Resolver: Address</h3>
          <p className="mb-5 text-cloud-900">Add third party’s endpoint to resolve addresses.</p>
        </div>
        <div className="flex">
          <Button
            className="bg-white text-cerulean rounded-xl shadow-lg hover:bg-gray-50"
            onClick={() => {
              setNewEndpoint(true);
            }}
            disabled={isNewEndpoint}
          >
            <div className="flex items-center mx-0">
              <div className="col-auto mr-2">
                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5712 19.2247C13.032 19.2247 14.2417 19.2247 16.7025 19.2247C16.7951 19.2211 17.255 19.2065 17.6188 18.8056C17.8522 18.5468 17.9998 18.1896 17.9998 17.7923V5.97038L13.7201 1H6.09075C5.3769 1 4.79346 1.64151 4.79346 2.42882C4.79346 5.01673 4.79346 4.62506 4.79346 7.21297"
                    stroke="#3B8CC5"
                    strokeWidth="1.9615"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.124 5.97038H18L13.873 1V4.46699C13.873 5.29922 14.4324 5.97038 15.124 5.97038Z"
                    stroke="#3B8CC5"
                    strokeWidth="1.9615"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.43651 19.7152C10.9913 19.7152 13.873 16.805 13.873 13.215C13.873 9.62507 10.9913 6.71484 7.43651 6.71484C3.88172 6.71484 1 9.62507 1 13.215C1 16.805 3.88172 19.7152 7.43651 19.7152Z"
                    stroke="#3B8CC5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.8584 13.2148H11.015"
                    stroke="#3B8CC5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.43652 9.59668V16.8285"
                    stroke="#3B8CC5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="col-auto">Add</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="bg-white border-2 rounded-xl shadow-lg mt-6 p-7">
        <AddressesTable isNewEndpoint={isNewEndpoint} setNewEndpoint={setNewEndpoint} />
      </div>
    </>
  );
};
