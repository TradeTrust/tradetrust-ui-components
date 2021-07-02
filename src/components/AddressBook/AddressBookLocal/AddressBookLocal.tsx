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
    <table className="table">
      <thead className="table-thead">
        <tr>
          {/* <th className="text-left w-56">Name</th>
          <th className="text-left w-56">Address</th>
          <th className="text-left w-56">&nbsp;</th>
          <th className="text-left w-56">&nbsp;</th> */}
          <th>Name</th>
          <th>Address</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      {addressBookLocalStatus === AddressBookState.NONE && (
        <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
      )}
      {addressBookLocalStatus === AddressBookState.EMPTY && (
        <AddressBookTableRowEmpty message="No address found. Try searching again?" />
      )}
      <tbody className="table-tbody">
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
  );
};
