import { useAddressBook } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent } from "react";
import { AddressBookState } from "./../AddressBook";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";

interface AddressBookLocalProps {
  addressBookLocalStatus: string;
  onAddressSelect: (address: string) => void;
  localPageResults: string[];
  network: string;
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
          <th>Name</th>
          <td>Address</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {addressBookLocalStatus === AddressBookState.NONE && (
          <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
        )}
        {addressBookLocalStatus === AddressBookState.EMPTY && (
          <AddressBookTableRowEmpty message="No address found. Try searching again?" />
        )}
        {addressBookLocalStatus === AddressBookState.SUCCESS &&
          localPageResults.map((key) => {
            const identifier = addressBook[key];

            return (
              <AddressBookTableRow
                key={key}
                isLocal={true}
                onAddressSelect={() => {
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
