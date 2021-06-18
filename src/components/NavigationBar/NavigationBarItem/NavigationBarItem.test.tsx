import { fireEvent, queryByAttribute, render, screen } from "@testing-library/react";
import React from "react";
import { NavigationBarItem } from "./NavigationBarItem";
import * as NavType from "./../type";
import { Settings } from "react-feather";

describe("NavigationLink", () => {
  it("should render correctly with the given customLink", () => {
    const NavigationLink: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationLink,
      id: "verify",
      label: "Default NavigationLink",
      path: "/verify",
      customLink: (
        <a className="block w-full p-2 text-current hover:text-current" href={"/verify"}>
          CustomLink NavigationLink
        </a>
      ),
    };

    render(<NavigationBarItem item={NavigationLink} />);
    expect(screen.queryByText("Default NavigationLink")).not.toBeInTheDocument();
    expect(screen.getAllByText("CustomLink NavigationLink")).toHaveLength(1);
  });

  it("should render default style with no customLink", () => {
    const NavigationLink: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationLink,
      id: "verify",
      label: "Default NavigationLink",
      path: "/verify",
    };

    render(<NavigationBarItem item={NavigationLink} />);
    expect(screen.getAllByText("Default NavigationLink")).toHaveLength(1);
    expect(screen.queryByText("CustomLink NavigationLink")).not.toBeInTheDocument();
  });
});

describe("NavigationLabelButton", () => {
  it("should render correctly with the given customLink", () => {
    const NavigationLabelButton: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationLabelButton,
      id: "verify",
      label: "Default NavigationLabelButton",
      path: "/verify",
      customLink: (
        <a className="block w-full p-2 text-current hover:text-current" href={"/verify"}>
          CustomLink NavigationLabelButton
        </a>
      ),
    };

    render(<NavigationBarItem item={NavigationLabelButton} />);
    expect(screen.queryByText("Default NavigationLabelButton")).not.toBeInTheDocument();
    expect(screen.getAllByText("CustomLink NavigationLabelButton")).toHaveLength(1);
  });

  it("should render default style with no customLink", () => {
    const NavigationLabelButton: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationLabelButton,
      id: "verify",
      label: "Default NavigationLabelButton",
      path: "/verify",
    };

    render(<NavigationBarItem item={NavigationLabelButton} />);
    expect(screen.getAllByText("Default NavigationLabelButton")).toHaveLength(1);
    expect(screen.queryByText("CustomLink NavigationLabelButton")).not.toBeInTheDocument();
  });
});

describe("NavigationIconButton", () => {
  it("should render correctly with the given customLink", () => {
    const NavigationIconButton: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationIconButton,
      id: "settings",
      label: "Settings",
      path: "/settings",
      icon: Settings,
      customLink: (
        <a className="block w-full p-2 text-current hover:text-current" href={"/verify"}>
          CustomLink NavigationIconButton
        </a>
      ),
    };

    render(<NavigationBarItem item={NavigationIconButton} />);
    expect(screen.queryByTestId("settings")).toBeFalsy();
    expect(screen.getAllByText("CustomLink NavigationIconButton")).toHaveLength(1);
  });

  it("should render default style with no customLink", () => {
    const NavigationIconButton: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationIconButton,
      id: "settings",
      label: "Settings",
      path: "/settings",
      icon: Settings,
    };

    render(<NavigationBarItem item={NavigationIconButton} />);
    expect(screen.getAllByTestId("settings")).toHaveLength(1);
    expect(screen.queryByText("CustomLink NavigationLabelButton")).not.toBeInTheDocument();
  });
});

describe("NavigationDropDownList", () => {
  it("should render correctly with the given customLink", () => {
    const NavigationDropDownList: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationDropDownList,
      id: "news-events",
      label: "News & Events",
      path: "",
      dropdownItems: [
        {
          id: "news",
          label: "Default News",
          path: "/news",
          customLink: (
            <a className="block w-full px-4 py-2" href={"/news"}>
              CustomLink News
            </a>
          ),
        },
        {
          id: "event",
          label: "Default Event",
          path: "/event",
          customLink: (
            <a className="block w-full px-4 py-2" href={"/event"}>
              CustomLink Event
            </a>
          ),
        },
      ],
    };

    const NavBarItem = render(<NavigationBarItem item={NavigationDropDownList} />);
    const NewEventButton = NavBarItem.container.querySelector("#news-events-button");
    fireEvent.click(NewEventButton);
    expect(screen.queryByText("Default News")).not.toBeInTheDocument();
    expect(screen.queryByText("Default Event")).not.toBeInTheDocument();
    expect(screen.getAllByText("CustomLink News")).toHaveLength(1);
    expect(screen.getAllByText("CustomLink Event")).toHaveLength(1);
  });

  it("should render default style with no customLink", () => {
    const NavigationDropDownList: NavType.NavigationItem = {
      schema: NavType.NAVIGATION_ITEM_TYPE.NavigationDropDownList,
      id: "news-events",
      label: "News & Events",
      path: "",
      dropdownItems: [
        {
          id: "news",
          label: "Default News",
          path: "/news",
        },
        {
          id: "event",
          label: "Default Event",
          path: "/event",
        },
      ],
    };

    const NavBarItem = render(<NavigationBarItem item={NavigationDropDownList} />);
    const NewEventButton = NavBarItem.container.querySelector("#news-events-button");
    fireEvent.click(NewEventButton);
    expect(screen.getAllByText("Default News")).toHaveLength(1);
    expect(screen.getAllByText("Default Event")).toHaveLength(1);
    expect(screen.queryByText("CustomLink News")).not.toBeInTheDocument();
    expect(screen.queryByText("CustomLink Event")).not.toBeInTheDocument();
  });
});
