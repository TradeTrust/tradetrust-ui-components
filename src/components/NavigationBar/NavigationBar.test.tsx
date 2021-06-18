import { render, screen } from "@testing-library/react";
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { MockLogo, MockLeftNavItems, MockRightNavItems, MockMobileNavItems } from "./NavigationBar.mock";

describe("Navigation Bar", () => {
  it("should render correctly with the given input on desktop menu", () => {
    render(
      <NavigationBar
        logo={<MockLogo />}
        menuLeft={MockLeftNavItems}
        menuRight={MockRightNavItems}
        menuMobile={[]}
        setToggleNavBar={() => {}}
        toggleNavBar={false}
      />
    );

    expect(screen.getAllByText("Desktop News & Events")).toHaveLength(1);
    expect(screen.getAllByText("Desktop Contact")).toHaveLength(1);
    expect(screen.getAllByText("Desktop Verify Doc")).toHaveLength(1);
    expect(screen.getAllByTestId("desktop-settings")).toHaveLength(1);
  });

  it("should render correctly with the given input on mobile menu", () => {
    render(
      <NavigationBar
        logo={<MockLogo />}
        menuLeft={[]}
        menuRight={[]}
        menuMobile={MockMobileNavItems}
        setToggleNavBar={() => {}}
        toggleNavBar={false}
      />
    );
    expect(screen.getAllByText("Mobile News & Events")).toHaveLength(1);
    expect(screen.getAllByText("Mobile Contact")).toHaveLength(1);
    expect(screen.getAllByText("Mobile Verify Doc")).toHaveLength(1);
    expect(screen.getAllByTestId("mobile-settings")).toHaveLength(1);
  });

  it("should render correctly with the given input on desktop and mobile menu", () => {
    render(
      <NavigationBar
        logo={<MockLogo />}
        menuLeft={MockLeftNavItems}
        menuRight={MockRightNavItems}
        menuMobile={MockMobileNavItems}
        setToggleNavBar={() => {}}
        toggleNavBar={false}
      />
    );

    expect(screen.getAllByText("Desktop News & Events")).toHaveLength(1);
    expect(screen.getAllByText("Desktop Contact")).toHaveLength(1);
    expect(screen.getAllByText("Desktop Verify Doc")).toHaveLength(1);
    expect(screen.getAllByTestId("desktop-settings")).toHaveLength(1);
    expect(screen.getAllByText("Mobile News & Events")).toHaveLength(1);
    expect(screen.getAllByText("Mobile Contact")).toHaveLength(1);
    expect(screen.getAllByText("Mobile Verify Doc")).toHaveLength(1);
    expect(screen.getAllByTestId("mobile-settings")).toHaveLength(1);
  });
});
