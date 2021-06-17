import React, { FunctionComponent, useState } from "react";
import { NavigationBar, NavigationBarStyled } from "../NavigationBar";
import {
  MockLeftMenu,
  MockRightMenu,
  MockMobileMenu,
  MockLeftNavItems,
  MockRightNavItems,
  websiteLogo,
} from "./MockNavigationBar";

export default {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    componentSubtitle: "Navigation bar for Tradetrust website",
  },
};

export const Default: FunctionComponent = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  return (
    <NavigationBarStyled>
      <NavigationBar
        leftMenuChildren={MockLeftMenu(MockLeftNavItems)}
        rightMenuChildren={MockRightMenu(MockRightNavItems)}
        mobileMenuChildren={MockMobileMenu(MockLeftNavItems.concat(MockRightNavItems))}
        websiteLogo={websiteLogo}
        setToggleNavBar={setToggleNavBar}
        toggleNavBar={toggleNavBar}
      />
    </NavigationBarStyled>
  );
};
