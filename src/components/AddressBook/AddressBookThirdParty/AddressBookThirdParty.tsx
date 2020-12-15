import { AddressBookThirdPartyResultsProps } from "@govtechsg/address-identity-resolver";
import { isEmpty } from "lodash";
import React, { FunctionComponent } from "react";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";

interface AddressBookThirdPartyProps {
  onAddressSelect: (address: string) => void;
  thirdPartyPageResults: AddressBookThirdPartyResultsProps[];
  isSearchingThirdParty: boolean;
  network: string;
  hasEntityLookupPath: boolean;
}

export const AddressBookThirdParty: FunctionComponent<AddressBookThirdPartyProps> = ({
  onAddressSelect,
  thirdPartyPageResults,
  isSearchingThirdParty,
  network,
  hasEntityLookupPath,
}) => {
  return (
    <table className="table">
      <thead className="table-thead">
        <tr>
          <th className="w-20">Name</th>
          <td>Address</td>
          <td>&nbsp;</td>
          <td>Source</td>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {isSearchingThirdParty ? (
          <AddressBookTableRowEmpty message="Searching..." />
        ) : !hasEntityLookupPath ? (
          <AddressBookTableRowEmpty
            message="This address book’s endpoint does not have the entityLookup feature, do contact the respective personnal to set it up."
            textClassName="text-red"
          />
        ) : isEmpty(thirdPartyPageResults) ? (
          <AddressBookTableRowEmpty message="No address found. Try searching?" />
        ) : (
          thirdPartyPageResults.map((item, index) => {
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
