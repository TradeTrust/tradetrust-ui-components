import React, { FunctionComponent, useState } from "react";
import { Plus } from "react-feather";
import { Button } from "../UI/Button";
import { AddressesTable } from "./AddressesTable";

export const AddressResolver: FunctionComponent = () => {
  const [isNewEndpoint, setNewEndpoint] = useState(false);

  return (
    <div className="container py-4">
      <div className="flex items-end">
        <div className="flex-1 flex-col">
          <h1>Settings: Address Resolver</h1>
          <p className="mb-0 text-grey">Add third party’s endpoint to resolve addresses. </p>
        </div>
        <div className="flex">
          <Button
            className="bg-orange text-white hover:bg-orange-600"
            onClick={() => {
              setNewEndpoint(true);
            }}
            disabled={isNewEndpoint}
          >
            <div className="flex items-center mx-0">
              <div className="col-auto mr-2">
                <Plus />
              </div>
              <div className="col-auto">Add</div>
            </div>
          </Button>
        </div>
      </div>
      <AddressesTable isNewEndpoint={isNewEndpoint} setNewEndpoint={setNewEndpoint} />
    </div>
  );
};
