import React, { FunctionComponent, useState } from "react";
import { Button } from "../UI/Button";
import { AddressesTable } from "./AddressesTable";
import { IconAddFile } from "../UI/Icon";

export const AddressResolver: FunctionComponent = () => {
  const [isNewEndpoint, setNewEndpoint] = useState(false);

  return (
    <>
      <div className="flex lg:justify-end">
        <Button
          className="bg-white text-cerulean-500 hover:bg-gray-50"
          onClick={() => {
            setNewEndpoint(true);
          }}
          disabled={isNewEndpoint}
        >
          <div className="flex items-center mx-0 text-cerulean-500 hover:text-cerulean-800">
            <div className="col-auto mr-2">
              <IconAddFile />
            </div>
            <div className="col-auto">Add</div>
          </div>
        </Button>
      </div>
      <div className="lg:bg-white lg:rounded-xl lg:shadow-lg lg:mt-6 lg:px-7 lg:py-12">
        <AddressesTable isNewEndpoint={isNewEndpoint} setNewEndpoint={setNewEndpoint} />
      </div>
    </>
  );
};
