import React, { FunctionComponent } from "react";
import { isEmpty } from "lodash";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";
import { AddressBookLocalProps as AddressBookProps } from "@govtechsg/address-identity-resolver";

interface AddressBookLocalProps {
  onAddressSelect: (address: string) => void;
  searchTerm: string;
  addressBook: AddressBookProps;
  network: string;
}

export const AddressBookLocal: FunctionComponent<AddressBookLocalProps> = ({
  onAddressSelect,
  searchTerm,
  addressBook,
  network,
}: AddressBookLocalProps) => {
  const filteredAddresses = Object.keys(addressBook).filter((key) => {
    const identifier = addressBook[key];
    return (
      identifier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <table className="table">
      <thead className="table-thead">
        <tr>
          <th>Name</th>
          <td>Address</td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {isEmpty(addressBook) ? (
          <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
        ) : filteredAddresses.length === 0 ? (
          <AddressBookTableRowEmpty message="No address found." />
        ) : (
          filteredAddresses.map((key) => {
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
          })
        )}
      </tbody>
    </table>
  );
};
