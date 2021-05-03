import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { NavigationBar } from "./NavigationBar";
import {
  NavigationBarStyle,
  MockLeftMenu,
  MockRightMenu,
  MockMobileMenu,
  MockLeftNavItems,
  MockRightNavItems,
} from "./MockNavigationBar";

const NavBar: React.FunctionComponent = () => {
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

describe("errorPage", () => {
  it("should render correctly with the given title and description", () => {
    render(<NavBar />);
    expect(screen.getAllByText("News & Events")).toHaveLength(2);
    expect(screen.getAllByText("Contact")).toHaveLength(2);
    expect(screen.getAllByText("Verify Doc")).toHaveLength(2);
    expect(screen.getAllByTestId("settings")).toHaveLength(2);
  });
});
