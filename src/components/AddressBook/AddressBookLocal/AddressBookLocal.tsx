import { useAddressBook } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent } from "react";
import { AddressBookState } from "./../AddressBook";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";

interface AddressBookLocalProps {
  addressBookLocalStatus: string;
  onAddressSelect?: (address: string) => void;
  localPageResults: string[];
  network?: string;
}

export const AddressBookLocal: FunctionComponent<AddressBookLocalProps> = ({
  addressBookLocalStatus,
  onAddressSelect,
  localPageResults,
  network,
}: AddressBookLocalProps) => {
  const { addressBook } = useAddressBook();

  return (
    <>
      {/* <div className="hidden md:table-header-group md:w-full">
        <div className="table-row bg-white font-bold text-cloud-900 text-xl text-left mt-0">
          <div className="table-cell w-56 px-2">Name</div>
          <div className="table-cell w-56 px-2">Address</div>
          <div className="table-cell w-56 px-2">&nbsp;</div>
          <div className="table-cell w-56 px-2">&nbsp;</div>
        </div>
      </div> */}
      {/* <div className="hidden md:table-header-group">
        <div className="table-row bg-white font-bold text-cloud-900 text-xl text-left mt-0">
          <div className="table-cell px-2">Name</div>
          <div className="table-cell px-2">Address</div>
          <div className="table-cell px-2">&nbsp;</div>
          <div className="table-cell px-2">&nbsp;</div>
        </div>
      </div> */}
      <table className="table">
        <thead className="table-thead">
          <tr className="hidden md:table-row">
            <th>Name</th>
            <th>Address</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        {/* <div className="hidden md:table-header-group">
          <div className="table-row bg-white font-bold text-cloud-900 text-xl text-left mt-0">
            <div className="table-cell px-2">Name</div>
            <div className="table-cell px-2">Address</div>
            <div className="table-cell px-2">&nbsp;</div>
            <div className="table-cell px-2">&nbsp;</div>
          </div>
        </div>
        {addressBookLocalStatus === AddressBookState.NONE && (
          <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
        )}
        {addressBookLocalStatus === AddressBookState.EMPTY && (
          <AddressBookTableRowEmpty message="No address found. Try searching again?" />
        )} */}
        <tbody className="table-tbody">
          <tr></tr>
          {/* {addressBookLocalStatus === AddressBookState.NONE && (
          <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
        )}
        {addressBookLocalStatus === AddressBookState.EMPTY && (
          <AddressBookTableRowEmpty message="No address found. Try searching again?" />
        )} */}
          {addressBookLocalStatus === AddressBookState.SUCCESS &&
            localPageResults.map((key, index) => {
              const identifier = addressBook[key];

              return (
                <AddressBookTableRow
                  key={key}
                  id={index}
                  isLocal={true}
                  onAddressSelect={() => {
                    if (!onAddressSelect) return;
                    onAddressSelect(key);
                  }}
                  address={key}
                  name={identifier}
                  network={network}
                />
              );
            })}
        </tbody>
      </table>
      {addressBookLocalStatus === AddressBookState.NONE && (
        <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
      )}
      {addressBookLocalStatus === AddressBookState.EMPTY && (
        <AddressBookTableRowEmpty message="No address found. Try searching again?" />
      )}
    </>
  );
};
