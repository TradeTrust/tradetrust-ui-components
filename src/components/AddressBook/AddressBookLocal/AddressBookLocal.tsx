import { useAddressBook } from "@govtechsg/address-identity-resolver";
import { isEmpty } from "lodash";
import React, { FunctionComponent } from "react";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";

interface AddressBookLocalProps {
  onAddressSelect: (address: string) => void;
  localPageResults: string[];
  network: string;
}

export const AddressBookLocal: FunctionComponent<AddressBookLocalProps> = ({
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
        {isEmpty(addressBook) ? (
          <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
        ) : localPageResults.length === 0 ? (
          <AddressBookTableRowEmpty message="No address found." />
        ) : (
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
          })
        )}
      </tbody>
    </table>
  );
};
