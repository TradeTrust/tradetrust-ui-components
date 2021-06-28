import React from "react";
import { Settings } from "react-feather";
import { NavigationItem, NAVIGATION_ITEM_TYPE } from "./type";

export const MockLogo = (): React.ReactElement => {
  return (
    <a href="https://www.tradetrust.io/">
      <img
        data-testid="nav-logo-home"
        className="img-fluid h-10"
        src="https://www.tradetrust.io/static/images/tradetrust_logo.svg"
        alt="TradeTrust"
      />
    </a>
  );
};

export const MockLeftNavItems: NavigationItem[] = [
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationDropDownList,
    id: "resources",
    label: "Resources",
    path: "",
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
    schema: NAVIGATION_ITEM_TYPE.NavigationDropDownList,
    id: "news_events",
    label: "News & Events",
    path: "",
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
    schema: NAVIGATION_ITEM_TYPE.NavigationLink,
    id: "contact",
    label: "Contact",
    path: "/contact",
  },
];

export const MockRightNavItems: NavigationItem[] = [
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationIconButton,
    id: "desktop-settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationLabelButton,
    id: "create-documents",
    label: "Create Doc",
    path: "https://creator.tradetrust.io/",
    className: "bg-white text-cerulean border-cerulean-100 hover:bg-gray-50",
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationLabelButton,
    id: "verify",
    label: "Verify Doc",
    path: "/verify",
    className: "bg-cerulean text-white border-cerulean hover:bg-cerulean-300 hover:border-cerulean-300",
  },
];

export const MockMobileNavItems: NavigationItem[] = [
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationDropDownList,
    id: "resources",
    label: "Resources",
    path: "",
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
    schema: NAVIGATION_ITEM_TYPE.NavigationDropDownList,
    id: "news_events",
    label: "News & Events",
    path: "",
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
    schema: NAVIGATION_ITEM_TYPE.NavigationLink,
    id: "contact",
    label: "Contact",
    path: "/contact",
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationIconButton,
    id: "mobile-settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationLabelButton,
    id: "create-documents",
    label: "Create Doc",
    path: "https://creator.tradetrust.io/",
    className: "bg-white text-cerulean border-cerulean-100 hover:bg-gray-50",
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationLabelButton,
    id: "verify",
    label: "Verify Doc",
    path: "/verify",
    className: "bg-cerulean text-white border-cerulean hover:bg-cerulean-300 hover:border-cerulean-300",
  },
];
