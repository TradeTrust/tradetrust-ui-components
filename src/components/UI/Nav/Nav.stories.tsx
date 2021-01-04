import React, { ReactElement } from "react";
import { NavBack, NavForward } from "./Nav";

export default {
  title: "UI/Nav",
  component: NavForward,
  parameters: {
    componentSubtitle: "Types of Links, with custom parameters.",
  },
};

export const NavBackLink = (): ReactElement => {
  return <NavBack />;
};

export const NavForwardLink = (): ReactElement => {
  return <NavForward title="Address Book" description="Access and update your addresses" />;
};
