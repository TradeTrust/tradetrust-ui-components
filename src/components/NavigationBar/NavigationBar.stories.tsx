import React, { FunctionComponent, useState } from "react";
import { NavigationBar } from "./NavigationBar";
import { MockLogo, MockLeftNavItems, MockRightNavItems } from "./NavigationBar.mock";

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
    <NavigationBar
      logo={<MockLogo />}
      menuLeft={MockLeftNavItems}
      menuRight={MockRightNavItems}
      menuMobile={MockLeftNavItems.concat(MockRightNavItems)}
      setToggleNavBar={setToggleNavBar}
      toggleNavBar={toggleNavBar}
    />
  );
};
