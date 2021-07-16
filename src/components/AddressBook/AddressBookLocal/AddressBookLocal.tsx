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
      <div className="w-full">
        <div className="hidden text-xl font-bold text-cloud-900 p-4 md:flex">
          <h4 className="w-3/12">Name</h4>
          <h4 className="w-5/12">Address</h4>
        </div>
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
      </div>
      {/* <div className="table w-full">
        <div className="table-header-group">
          <div className="hidden text-xl font-bold text-cloud-900 md:table-row">
            <div className="table-cell">Name</div>
            <div className="table-cell">Address</div>
            <div className="table-cell">&nbsp;</div>
            <div className="table-cell">&nbsp;</div>
          </div>
        </div>
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
      </div> */}
      {addressBookLocalStatus === AddressBookState.NONE && (
        <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
      )}
      {addressBookLocalStatus === AddressBookState.EMPTY && (
        <AddressBookTableRowEmpty message="No address found. Try searching again?" />
      )}
    </>
    // <>
    //   <table className="table">
    //     <thead className="table-thead">
    //       <tr className="hidden md:table-row">
    //         <th>Name</th>
    //         <th>Address</th>
    //         <th>&nbsp;</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody className="table-tbody">
    //       <tr />
    //       {addressBookLocalStatus === AddressBookState.SUCCESS &&
    //         localPageResults.map((key, index) => {
    //           const identifier = addressBook[key];

    //           return (
    //             <AddressBookTableRow
    //               key={key}
    //               id={index}
    //               isLocal={true}
    //               onAddressSelect={() => {
    //                 if (!onAddressSelect) return;
    //                 onAddressSelect(key);
    //               }}
    //               address={key}
    //               name={identifier}
    //               network={network}
    //             />
    //           );
    //         })}
    //     </tbody>
    //   </table>
    //   {addressBookLocalStatus === AddressBookState.NONE && (
    //     <AddressBookTableRowEmpty message="No address found. Try importing a csv template file?" />
    //   )}
    //   {addressBookLocalStatus === AddressBookState.EMPTY && (
    //     <AddressBookTableRowEmpty message="No address found. Try searching again?" />
    //   )}
    // </>
  );
};
