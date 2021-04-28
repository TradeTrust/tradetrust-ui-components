import { render, screen } from "@testing-library/react";
import React from "react";
import { Settings } from "react-feather";
import { NavigationItemType, NavigationItem, NavigationBar } from "./NavigationBar";

const navItems: NavigationItem[] = [
  {
    schema: NavigationItemType.DropDownList,
    id: "news_events",
    label: "News & Events",
    position: "left",
    dropdownItems: [
      {
        id: "media",
        label: "Media",
        path: "/media",
      },
      {
        id: "event",
        label: "Event",
        path: "/event",
      },
    ],
  },
  {
    schema: NavigationItemType.NavigationLink,
    id: "contact",
    label: "Contact",
    path: "/contact",
    position: "left",
  },
  {
    schema: NavigationItemType.IconButton,
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
    position: "right",
  },
  {
    schema: NavigationItemType.LabelButton,
    id: "verify",
    label: "Verify Doc",
    path: "/verify",
    position: "right",
    className: "verify-btn",
  },
];

describe("errorPage", () => {
  it("should render correctly with the given title and description", () => {
    render(<NavigationBar navigationItems={navItems} />);
    expect(screen.getAllByText("News & Events")).toHaveLength(2);
    expect(screen.getAllByText("Contact")).toHaveLength(2);
    expect(screen.getAllByText("Verify Doc")).toHaveLength(2);
    expect(screen.getAllByTestId("settings")).toHaveLength(2);
  });
});
