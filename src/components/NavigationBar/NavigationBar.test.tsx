import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { Settings } from "react-feather";
import styled from "@emotion/styled";
import { NavigationBar } from "./NavigationBar";
import { NavigationBarItem, NavigationItem, NavigationItemType } from "./type";

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

const leftMenu = (navigationItems: NavigationItem[], onClick: (isOn: boolean) => void): React.ReactNode => {
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

const rightMenu = (navigationItems: NavigationItem[], onClick: (isOn: boolean) => void): React.ReactNode => {
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

const mobileMenu = (navigationItems: NavigationItem[], onClick: (isOn: boolean) => void): React.ReactNode => {
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

describe("errorPage", () => {
  it("should render correctly with the given title and description", () => {
    const [isOn, setIsOn] = useState(false);
    render(
      <NavigationBarStyle>
        <NavigationBar
          leftMenuChildren={leftMenu(leftNavItems, setIsOn)}
          rightMenuChildren={rightMenu(rightNavItems, setIsOn)}
          mobileMenuChildren={mobileMenu(leftNavItems.concat(rightNavItems), setIsOn)}
          onClick={setIsOn}
          toggleNavBar={isOn}
        />
      </NavigationBarStyle>
    );
    expect(screen.getAllByText("News & Events")).toHaveLength(2);
    expect(screen.getAllByText("Contact")).toHaveLength(2);
    expect(screen.getAllByText("Verify Doc")).toHaveLength(2);
    expect(screen.getAllByTestId("settings")).toHaveLength(2);
  });
});
