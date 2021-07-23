import React, { FunctionComponent, useState } from "react";
import { Button } from "../UI/Button";
import { AddressesTable } from "./AddressesTable";
import { IconAddFile } from "../UI/Icon";

export const AddressResolver: FunctionComponent = () => {
  const [isNewEndpoint, setNewEndpoint] = useState(false);

  return (
    <>
      <div className="flex md:justify-end">
        <Button
          className="bg-white text-cerulean rounded-xl shadow-lg hover:bg-gray-50"
          onClick={() => {
            setNewEndpoint(true);
          }}
          disabled={isNewEndpoint}
        >
          <div className="flex items-center mx-0">
            <div className="col-auto mr-2">
              <IconAddFile />
            </div>
            <div className="col-auto">Add</div>
          </div>
        </Button>
      </div>
      <div className="md:bg-white md:rounded-xl md:shadow-lg md:mt-6 md:p-7">
        <AddressesTable isNewEndpoint={isNewEndpoint} setNewEndpoint={setNewEndpoint} />
      </div>
    </>
  );
};
