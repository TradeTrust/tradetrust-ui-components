import React, { FunctionComponent, useState } from "react";
import { NavigationBar } from "./NavigationBar";
import {
  NavigationBarStyle,
  MockLeftMenu,
  MockRightMenu,
  MockMobileMenu,
  MockLeftNavItems,
  MockRightNavItems,
} from "./MockNavigationBar";

export default {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    componentSubtitle: "Navigation bar for Tradetrust website",
    backgrounds: {
      default: "twitter",
      values: [
        { name: "twitter", value: "#000000" },
        { name: "facebook", value: "#3b5998" },
      ],
    },
  },
};

export const Default: FunctionComponent = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  return (
    <NavigationBarStyle>
      <NavigationBar
        leftMenuChildren={MockLeftMenu(MockLeftNavItems)}
        rightMenuChildren={MockRightMenu(MockRightNavItems)}
        mobileMenuChildren={MockMobileMenu(MockLeftNavItems.concat(MockRightNavItems))}
        setToggleNavBar={setToggleNavBar}
        toggleNavBar={toggleNavBar}
      />
    </NavigationBarStyle>
  );
};
