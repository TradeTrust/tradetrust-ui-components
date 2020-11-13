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
      className="border-grey-light border-solid border rounded-none p-3 hover:bg-grey-lightest"
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
      dropdownButtonText="Manage Assets"
      alignRight
      className="rounded px-3 py-2 font-bold text-white bg-orange hover:bg-orange-dark w-40"
    >
      <DropdownItem className="active:bg-orange-dark active:text-white" onClick={() => console.log("local clicked!!")}>
        Local
      </DropdownItem>
      <DropdownItem
        className="active:bg-orange-dark active:text-white"
        onClick={() => console.log("thirdparty clicked!!")}
      >
        Thirdparty endpoint
      </DropdownItem>
      <DropdownItem
        className="active:bg-orange-dark active:text-white"
        onClick={() => console.log("thirdparty clicked!!")}
      >
        Thirdparty endpoint long longkadshfkhkahkjdshfkahk haskjfkjashdkfhakdshfk
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
