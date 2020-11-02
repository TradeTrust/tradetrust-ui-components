import React, { FunctionComponent, useState } from "react";
import { Plus } from "react-feather";
import { ButtonSolidOrangeWhite } from "../UI/Button";
import { AddressesTable } from "./AddressesTable";

export const AddressResolver: FunctionComponent = () => {
  const [isNewEndpoint, setNewEndpoint] = useState(false);

  return (
    <div className="container-custom tw-py-4">
      <div className="tw-flex tw-items-end">
        <div className="tw-flex-1 tw-flex-col">
          <h1>Settings: Address Resolver</h1>
          <p className="tw-mb-0 tw-text-grey">Add third party’s endpoint to resolve addresses. </p>
        </div>
        <div className="tw-flex">
          <ButtonSolidOrangeWhite
            className="tw-my-0"
            onClick={() => {
              setNewEndpoint(true);
            }}
            disabled={isNewEndpoint}
          >
            <div className="tw-flex tw-items-center tw-mx-0">
              <div className="tw-col-auto tw-mr-2">
                <Plus />
              </div>
              <div className="tw-col-auto">Add</div>
            </div>
          </ButtonSolidOrangeWhite>
        </div>
      </div>
      <AddressesTable isNewEndpoint={isNewEndpoint} setNewEndpoint={setNewEndpoint} />
    </div>
  );
};
