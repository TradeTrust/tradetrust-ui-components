import React from "react";
import { Settings } from "react-feather";
import styled from "@emotion/styled";
import { NavigationItem, NavigationItemType } from "./type";
import { NavigationBarItem } from "./NavigationBarItem";

export const NavigationBarStyle = styled.div`
  .create-btn {
    font-size: 16px;
    color: #3b8cc5;
    background: #ffffff;
    border: 1px solid #e7eaec;
    box-sizing: border-box;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }

  .verify-btn {
    font-size: 16px;
    color: #ffffff;
    background: #3b8cc5;
    border: 2px solid #3b8cc5;
    box-sizing: border-box;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
`;

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
    <div className="hidden lg:block md:ml-12">
      <div className="flex h-full items-center">
        {navigationItems.map((item, index) => {
          return (
            <div key={index} className="text-lg w-auto lg:ml-6">
              <NavigationBarItem item={item} />
            </div>
          );
        })}
      </div>
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
    className: "create-btn",
  },
  {
    schema: NavigationItemType.LabelButton,
    id: "verify",
    label: "Verify Doc",
    path: "/verify",
    className: "verify-btn",
  },
];

export const MockRightMenu = (navigationItems: NavigationItem[]): React.ReactNode => {
  return (
    <div className="hidden md:block md:absolute md:right-0 lg:relative lg:ml-auto">
      <div className="flex h-full items-center">
        {navigationItems.map((item, index) => {
          return (
            <div key={index} className="text-lg font-normal w-auto md:ml-3 lg:ml-6">
              <NavigationBarItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MockMobileMenu = (navigationItems: NavigationItem[]): React.ReactNode => {
  return navigationItems.map((item, index) => {
    if (item.id === "create-documents" || item.id === "verify" || item.id === "settings") {
      return (
        <div key={index} className="text-lg font-normal w-full py-4 md:hidden">
          <NavigationBarItem item={item} />
        </div>
      );
    }
    return (
      <div key={index} className="text-lg font-normal w-full py-4">
        <NavigationBarItem item={item} />
      </div>
    );
  });
};
