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
    <>
      <table className="table">
        <thead className="table-thead">
          <tr className="hidden md:table-row">
            <th>Name</th>
            <th>Address</th>
            <th>Source</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          {addressBookThirdPartyStatus === AddressBookState.SUCCESS &&
            thirdPartyPageResults.map((item, index) => {
              return (
                <AddressBookTableRow
                  key={index}
                  id={index}
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
      {addressBookThirdPartyStatus === AddressBookState.ERROR && (
        <AddressBookTableRowEmpty message="This address book’s endpoint does not have the entityLookup feature, do contact the respective personnel to set it up." />
      )}
      {addressBookThirdPartyStatus === AddressBookState.NONE && (
        <AddressBookTableRowEmpty message="Try searching with keywords for results." />
      )}
      {addressBookThirdPartyStatus === AddressBookState.EMPTY && (
        <AddressBookTableRowEmpty message="No address found. Try searching with another keyword for results." />
      )}
      {addressBookThirdPartyStatus === AddressBookState.PENDING && <AddressBookTableRowEmpty message="Searching..." />}
    </>
  );
};
