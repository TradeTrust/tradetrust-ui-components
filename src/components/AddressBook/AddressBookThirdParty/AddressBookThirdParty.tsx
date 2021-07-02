import { AddressBookThirdPartyResultsProps } from "@govtechsg/address-identity-resolver";
import React, { FunctionComponent } from "react";
import { AddressBookState } from "./../AddressBook";
import { AddressBookTableRow, AddressBookTableRowEmpty } from "../AddressBookTableRow";

interface AddressBookThirdPartyProps {
  addressBookThirdPartyStatus: string;
  onAddressSelect?: (address: string) => void;
  thirdPartyPageResults: AddressBookThirdPartyResultsProps[];
  network?: string;
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
          <th>Name</th>
          <th>Address</th>
          <th>&nbsp;</th>
          <th>Source</th>
        </tr>
      </thead>
      {addressBookThirdPartyStatus === AddressBookState.ERROR && (
        <AddressBookTableRowEmpty
          message="This address book’s endpoint does not have the entityLookup feature, do contact the respective personnel to set it up."
          // textClassName="text-rose-400"
        />
      )}
      {addressBookThirdPartyStatus === AddressBookState.NONE && (
        <AddressBookTableRowEmpty message="Try searching with keywords for results." />
      )}
      {addressBookThirdPartyStatus === AddressBookState.EMPTY && (
        <AddressBookTableRowEmpty message="No address found. Try searching with another keyword for results." />
      )}
      {addressBookThirdPartyStatus === AddressBookState.PENDING && <AddressBookTableRowEmpty message="Searching..." />}
      <tbody className="table-tbody">
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
