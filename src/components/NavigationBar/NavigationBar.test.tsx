import { render, screen } from "@testing-library/react";
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { MockLogo, MockLeftNavItems, MockRightNavItems } from "./NavigationBar.mock";

describe("errorPage", () => {
  it("should render correctly with the given title and description", () => {
    render(
      <NavigationBar
        logo={<MockLogo />}
        menuLeft={MockLeftNavItems}
        menuRight={MockRightNavItems}
        menuMobile={MockLeftNavItems.concat(MockRightNavItems)}
        setToggleNavBar={() => {}}
        toggleNavBar={false}
      />
    );
    expect(screen.getAllByText("News & Events")).toHaveLength(2);
    expect(screen.getAllByText("Contact")).toHaveLength(2);
    expect(screen.getAllByText("Verify Doc")).toHaveLength(2);
    expect(screen.getAllByTestId("settings")).toHaveLength(2);
  });
});
