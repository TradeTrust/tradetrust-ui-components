import React, { ReactElement } from "react";
import { AddressBook } from "./AddressBook";
import { sampleAddressBook } from "../../test/fixtures/sampleAddressBook";

export default {
  title: "AddressBook/AddressBook",
  component: AddressBook,
};

export const DefaultAddressBook = (): ReactElement => {
  return (
    <AddressBook
      onAddressSelected={(address) => window.alert(`${address} was selected!`)}
      handleLocalAddressBookCsv={() => {
        return Promise.resolve();
      }}
      isOverlayVisible={true}
      setOverlayVisible={() => {}}
      thirdPartyAPIEndpoints={[]}
      addressBook={{}}
      network="ropsten"
      title="Address Book"
    />
  );
};

export const FilledAddressBook = (): ReactElement => {
  return (
    <AddressBook
      onAddressSelected={(address) => window.alert(`${address} was selected!`)}
      handleLocalAddressBookCsv={() => {
        return Promise.resolve();
      }}
      isOverlayVisible={true}
      setOverlayVisible={() => {}}
      thirdPartyAPIEndpoints={[]}
      addressBook={sampleAddressBook}
      network="ropsten"
      title="Address Book"
    />
  );
};
