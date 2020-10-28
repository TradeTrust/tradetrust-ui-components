import React, { FunctionComponent } from "react";
import { isEmpty } from "lodash";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";
import { AddressBookThirdPartyResultsProps } from "@govtechsg/address-identity-resolver";

interface AddressBookThirdPartyProps {
  onAddressSelect: (address: string) => void;
  addressBookThirdPartyResults: AddressBookThirdPartyResultsProps[];
  isSearchingThirdParty: boolean;
  network: string;
}

export const AddressBookThirdParty: FunctionComponent<AddressBookThirdPartyProps> = ({
  onAddressSelect,
  addressBookThirdPartyResults,
  isSearchingThirdParty,
  network,
}) => {
  return (
    <table className="table">
      <thead className="table-thead">
        <tr>
          <th>Name</th>
          <td>Address</td>
          <td>Source</td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {isSearchingThirdParty ? (
          <AddressBookTableRowEmpty message="Searching..." />
        ) : isEmpty(addressBookThirdPartyResults) ? (
          <AddressBookTableRowEmpty message="No address found. Try searching?" />
        ) : (
          addressBookThirdPartyResults.map((item, index) => {
            return (
              <AddressBookTableRow
                key={index}
                isLocal={false}
                onAddressSelect={() => {
                  onAddressSelect(item.identifier);
                }}
                address={item.identifier}
                name={item.name}
                source={item.source}
                network={network}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
};
