import React from "react";
import { Settings } from "react-feather";
import { NavigationItem, NavigationItemType } from "./type";
import { NavigationBarItem } from "./NavigationBarItem";

export const MockLeftNavItems: NavigationItem[] = [
  {
    schema: NavigationItemType.DropDownList,
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
    schema: NavigationItemType.DropDownList,
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
    schema: NavigationItemType.NavigationLink,
    id: "contact",
    label: "Contact",
    path: "/contact",
  },
];

export const MockLeftMenu = (navigationItems: NavigationItem[]): React.ReactNode => {
  return (
    <div className="flex items-center">
      {navigationItems.map((item, index) => {
        return (
          <div key={index} className="lg:ml-6">
            <NavigationBarItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export const MockRightNavItems: NavigationItem[] = [
  {
    schema: NavigationItemType.IconButton,
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    schema: NavigationItemType.LabelButton,
    id: "create-documents",
    label: "Create Doc",
    path: "https://creator.tradetrust.io/",
    className: "bg-white text-primary border-primary-100 hover:bg-gray-100",
  },
  {
    schema: NavigationItemType.LabelButton,
    id: "verify",
    label: "Verify Doc",
    path: "/verify",
    className: "bg-primary text-white border-primary hover:bg-primary-300 hover:border-primary-300",
  },
];

export const MockRightMenu = (navigationItems: NavigationItem[]): React.ReactNode => {
  return (
    <div className="flex items-center">
      {navigationItems.map((item, index) => {
        return (
          <div key={index} className="md:ml-2 lg:ml-4">
            <NavigationBarItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export const MockMobileMenu = (navigationItems: NavigationItem[]): React.ReactNode => {
  return navigationItems.map((item, index) => {
    if (item.id === "create-documents" || item.id === "verify" || item.id === "settings") {
      return (
        <div key={index} className="py-4 md:hidden">
          <NavigationBarItem item={item} />
        </div>
      );
    }
    return (
      <div key={index} className="py-4">
        <NavigationBarItem item={item} />
      </div>
    );
  });
};
