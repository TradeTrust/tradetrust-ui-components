import React, { ReactElement, useState } from "react";
import { Dropdown, DropdownItem } from "./Dropdown";
export default {
  title: "UI/Dropdown",
  component: Dropdown,
  parameters: {
    componentSubtitle: "Dropdown Menu",
  },
};

export const AddressBookDefault = (): ReactElement => {
  const [dropdownButtonText, setDropdownButtonText] = useState("Local");

  return (
    <Dropdown
      fullWidth
      dropdownButtonText={dropdownButtonText}
      className="border-grey-300 border-solid border rounded-none p-3 hover:bg-grey-100"
    >
      <DropdownItem
        onClick={() => {
          setDropdownButtonText("Local");
        }}
      >
        Local
      </DropdownItem>
      <DropdownItem
        onClick={() => {
          setDropdownButtonText("Thirdparty endpoint");
        }}
      >
        Thirdparty endpoint
      </DropdownItem>
    </Dropdown>
  );
};

export const ButtonDefault = (): ReactElement => {
  return (
    <Dropdown
      data-testid="manageAssetDropdown"
      dropdownButtonText="Manage Assets"
      alignRight
      className="rounded px-3 py-2 font-bold text-white bg-orange hover:bg-orange-600"
    >
      <DropdownItem className="active:bg-orange-600 active:text-white" onClick={() => console.log("local clicked!!")}>
        Transfer holdership
      </DropdownItem>
      <DropdownItem
        className="active:bg-orange-600 active:text-white"
        onClick={() => console.log("thirdparty clicked!!")}
      >
        Endorse change of ownership
      </DropdownItem>
      <DropdownItem
        className="active:bg-orange-600 active:text-white"
        onClick={() => console.log("thirdparty clicked!!")}
      >
        Surrender document
      </DropdownItem>
    </Dropdown>
  );
};

export const NavBarDefault = (): ReactElement => {
  return (
    <Dropdown dropdownButtonText="Info" className="font-bold text-greyblue hover:none">
      <DropdownItem onClick={() => console.log("local clicked!!")}>Local</DropdownItem>
      <DropdownItem onClick={() => console.log("thirdparty clicked!!")}>Thirdparty endpoint</DropdownItem>
    </Dropdown>
  );
};
