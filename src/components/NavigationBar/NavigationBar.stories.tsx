import React, { FunctionComponent, useState } from "react";
import { Settings } from "react-feather";
import styled from "@emotion/styled";
import { NavigationBar } from "./NavigationBar";
import { NavigationBarItem, NavigationItem, NavigationItemType } from "./type";

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

const NavigationBarStyle = styled.div`
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

const leftNavItems: NavigationItem[] = [
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

const LeftMenu = (navigationItems: NavigationItem[], onClick: (isOn: boolean) => void): React.ReactNode => {
  return (
    <div className="hidden lg:block md:ml-12">
      <div className="flex h-full items-center">
        {navigationItems.map((item, index) => {
          return (
            <div key={index} className="text-lg w-auto lg:ml-6">
              <NavigationBarItem item={item} onClick={onClick} />
            </div>
          );
          return "";
        })}
      </div>
    </div>
  );
};

const rightNavItems: NavigationItem[] = [
  {
    schema: NavigationItemType.IconButton,
    id: "settings",
    label: "Settings",
    path: "settings",
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

const RightMenu = (navigationItems: NavigationItem[], onClick: (isOn: boolean) => void): React.ReactNode => {
  return (
    <div className="hidden md:block md:absolute md:right-0 lg:relative lg:ml-auto">
      <div className="flex h-full items-center">
        {navigationItems.map((item, index) => {
          return (
            <div key={index} className="text-lg font-normal w-auto md:ml-3 lg:ml-6">
              <NavigationBarItem item={item} onClick={onClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MobileMenu = (navigationItems: NavigationItem[], onClick: (isOn: boolean) => void): React.ReactNode => {
  return navigationItems.map((item, index) => {
    if (item.id == "create-documents" || item.id == "verify" || item.id == "settings") {
      return (
        <div key={index} className="text-lg font-normal w-full py-4 md:hidden">
          <NavigationBarItem item={item} onClick={onClick} />
        </div>
      );
    }
    return (
      <div key={index} className="text-lg font-normal w-full py-4">
        <NavigationBarItem item={item} onClick={onClick} />
      </div>
    );
  });
};

export const Default: FunctionComponent = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <NavigationBarStyle>
      <NavigationBar
        leftMenuChildren={LeftMenu(leftNavItems, setIsOn)}
        rightMenuChildren={RightMenu(rightNavItems, setIsOn)}
        mobileMenuChildren={MobileMenu(leftNavItems.concat(rightNavItems), setIsOn)}
        onClick={setIsOn}
        toggleNavBar={isOn}
      />
    </NavigationBarStyle>
  );
};
