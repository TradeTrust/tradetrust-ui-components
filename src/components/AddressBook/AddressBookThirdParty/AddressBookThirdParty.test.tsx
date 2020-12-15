import { render, screen } from "@testing-library/react";
import React from "react";
import { AddressBookThirdParty } from "./AddressBookThirdParty";

const mockResults = [
  {
    identifier: "0x59308f96c98332ddd96a1308e1d29a7d4be00c6e",
    name: "Test Bank",
    remarks: "Added by Boon",
    source: "GovTech, Singapore",
  },
  {
    identifier: "0x57d897f67a816594aac7b7ba0dc80d4b94ada00c",
    name: "Atlantic Carrier",
    remarks: "Added by Marcus Ong",
    source: "IMDA, Singapore",
  },
];

describe("addressBookThirdParty", () => {
  it("should show default message", () => {
    render(
      <AddressBookThirdParty
        onAddressSelect={() => {}}
        thirdPartyPageResults={[]}
        isSearchingThirdParty={false}
        network="local"
        hasEntityLookupPath={true}
      />
    );
    expect(screen.getByText("No address found. Try searching?")).not.toBeNull();
  });

  it("should show 2 mock results", () => {
    render(
      <AddressBookThirdParty
        onAddressSelect={() => {}}
        thirdPartyPageResults={mockResults}
        isSearchingThirdParty={false}
        network="local"
        hasEntityLookupPath={true}
      />
    );
    expect(screen.getAllByTestId("table-row")).toHaveLength(2);
  });

  it("should show searching text", () => {
    render(
      <AddressBookThirdParty
        onAddressSelect={() => {}}
        thirdPartyPageResults={[]}
        isSearchingThirdParty={true}
        network="local"
        hasEntityLookupPath={true}
      />
    );
    expect(screen.getByText("Searching...")).not.toBeNull();
  });

  it("should show entityLookup error if feature does not exists", () => {
    render(
      <AddressBookThirdParty
        onAddressSelect={() => {}}
        thirdPartyPageResults={[]}
        isSearchingThirdParty={false}
        network="local"
        hasEntityLookupPath={false}
      />
    );
    expect(
      screen.getByText(
        "This address book’s endpoint does not have the entityLookup feature, do contact the respective personnal to set it up."
      )
    ).not.toBeNull();
  });
});
