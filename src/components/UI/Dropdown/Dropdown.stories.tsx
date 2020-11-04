import React, { ReactElement } from "react";
import { Dropdown, DropdownItem } from "./Dropdown";
export default {
  title: "UI/Dropdown",
  component: Dropdown,
  parameters: {
    componentSubtitle: "Dropdown Menu",
  },
};

export const Default = (): ReactElement => {
  return (
    <Dropdown dropdownButtonText="Local">
      <DropdownItem itemText="Local" onClick={() => console.log("local clicked!!")} />
      <DropdownItem itemText="Thirdparty endpoint" onClick={() => console.log("thirdparty clicked!!")} />
    </Dropdown>
  );
};
