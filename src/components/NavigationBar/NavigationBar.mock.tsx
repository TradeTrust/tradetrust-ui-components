import React from "react";
import { Settings } from "react-feather";
import { NavigationItem, NAVIGATION_ITEM_TYPE } from "./type";
import { stylesButtonCreateDocument, stylesButtonVerifyDocument } from "./NavigationBar";

export const MockLogo = (): React.ReactElement => {
  return (
    <a href="https://www.tradetrust.io/" className="inline-block mx-auto">
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
    id: "news-events",
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
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationLabelButton,
    id: "create-documents",
    label: "Create Doc",
    path: "https://creator.tradetrust.io/",
    className: stylesButtonCreateDocument,
  },
  {
    schema: NAVIGATION_ITEM_TYPE.NavigationLabelButton,
    id: "verify",
    label: "Verify Doc",
    path: "/verify",
    className: stylesButtonVerifyDocument,
  },
];

export const MockMobileNavItems: NavigationItem[] = MockLeftNavItems.concat(MockRightNavItems);