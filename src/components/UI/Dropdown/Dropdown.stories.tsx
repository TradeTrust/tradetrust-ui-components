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
      <DropdownItem itemText="Local" onClick={() => alert("local clicked!!")} />
      <DropdownItem itemText="Thirdparty endpoint" onClick={() => alert("thirdparty clicked!!")} />
    </Dropdown>
  );
};
