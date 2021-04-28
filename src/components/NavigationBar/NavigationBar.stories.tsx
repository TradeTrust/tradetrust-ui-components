import React, { FunctionComponent } from "react";
import { Settings } from "react-feather";
import { NavigationItemType, NavigationItem, NavigationBar } from "./NavigationBar";

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
const navItems: NavigationItem[] = [
  {
    schema: NavigationItemType.NavigationLink,
    id: "demo",
    label: "Demo",
    path: "/demo",
    position: "left",
  },
  {
    schema: NavigationItemType.DropDownList,
    id: "resources",
    label: "Resources",
    position: "left",
    dropdownItems: [
      {
        id: "learn",
        label: "Learn",
        path: "/learn",
      },
      {
        id: "faq",
        label: "FAQ",
        path: "/faq",
      },
    ],
  },
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
    id: "create-documents",
    label: "Create Doc",
    path: "https://creator.tradetrust.io/",
    position: "right",
    className: "create-btn",
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

export const Default: FunctionComponent = () => {
  return <NavigationBar navigationItems={navItems} />;
};
