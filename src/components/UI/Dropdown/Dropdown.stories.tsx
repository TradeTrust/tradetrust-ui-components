import React, { ReactElement } from "react";
import { Dropdown, DropdownItem } from "./Dropdown";
export default {
  title: "UI/Dropdown",
  component: Dropdown,
  parameters: {
    componentSubtitle: "Dropdown Menu",
  },
};

export const AddressBookDefault = (): ReactElement => {
  return (
    <Dropdown
      fullWidth
      dropdownButtonText="Local"
      className="border-grey-light border-solid border rounded-none p-3 hover:bg-grey-lightest"
    >
      <DropdownItem itemText="Local" onClick={() => console.log("local clicked!!")} />
      <DropdownItem itemText="Thirdparty endpoint" onClick={() => console.log("thirdparty clicked!!")} />
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
      <DropdownItem itemText="Local" onClick={() => console.log("local clicked!!")} />
      <DropdownItem itemText="Thirdparty endpoint" onClick={() => console.log("thirdparty clicked!!")} />
      <DropdownItem
        itemText="Thirdparty endpoint long longkadshfkhkahkjdshfkahk haskjfkjashdkfhakdshfk"
        onClick={() => console.log("thirdparty clicked!!")}
      />
    </Dropdown>
  );
};

export const NavBarDefault = (): ReactElement => {
  return (
    <Dropdown dropdownButtonText="Info" className="font-bold text-greyblue hover:none">
      <DropdownItem itemText="Local" onClick={() => console.log("local clicked!!")} />
      <DropdownItem itemText="Thirdparty endpoint" onClick={() => console.log("thirdparty clicked!!")} />
    </Dropdown>
  );
};
