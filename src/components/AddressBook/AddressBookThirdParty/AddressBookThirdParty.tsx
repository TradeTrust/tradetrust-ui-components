import { AddressBookThirdPartyResultsProps } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent } from "react";
import { AddressBookState } from "./../AddressBook";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";

interface AddressBookThirdPartyProps {
  addressBookThirdPartyStatus: string;
  onAddressSelect?: (address: string) => void;
  thirdPartyPageResults: AddressBookThirdPartyResultsProps[];
  network: string;
}

export const AddressBookThirdParty: FunctionComponent<AddressBookThirdPartyProps> = ({
  addressBookThirdPartyStatus,
  onAddressSelect,
  thirdPartyPageResults,
  network,
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
        {addressBookThirdPartyStatus === AddressBookState.ERROR && (
          <AddressBookTableRowEmpty
            message="This address book’s endpoint does not have the entityLookup feature, do contact the respective personnal to set it up."
            textClassName="text-red"
          />
        )}
        {addressBookThirdPartyStatus === AddressBookState.EMPTY && (
          <AddressBookTableRowEmpty message="No address found. Try searching?" />
        )}
        {addressBookThirdPartyStatus === AddressBookState.PENDING && (
          <AddressBookTableRowEmpty message="Searching..." />
        )}
        {addressBookThirdPartyStatus === AddressBookState.SUCCESS &&
          thirdPartyPageResults.map((item, index) => {
            return (
              <AddressBookTableRow
                key={index}
                isLocal={false}
                onAddressSelect={() => {
                  if (!onAddressSelect) return;
                  onAddressSelect(item.identifier);
                }}
                address={item.identifier}
                name={item.name}
                source={item.source}
                network={network}
              />
            );
          })}
      </tbody>
    </table>
  );
};
