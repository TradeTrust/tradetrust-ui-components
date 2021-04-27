import styled from "@emotion/styled";
import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

export enum NavItemPropsType {
  NavLinks = "NavLinks",
  DropDownList = "DropDownList",
  StaticButton = "StaticButton",
  IconButton = "IconButton",
}

interface NavLinks {
  schema: NavItemPropsType.NavLinks;
  id: string;
  label: string;
  className?: string;
  path: string;
  position: "left" | "center" | "right";
  type: "internal" | "external";
}

interface DropDownList extends Omit<NavLinks, "schema"> {
  schema: NavItemPropsType.DropDownList;
  dropdownItems: { id: string; label: string; path: string }[];
}

interface StaticButton extends Omit<NavLinks, "schema"> {
  schema: NavItemPropsType.StaticButton;
  path: string;
}

interface IconButton extends Omit<NavLinks, "schema"> {
  schema: NavItemPropsType.IconButton;
  path: string;
  icon: string;
}

export type NavItemsProps = NavLinks | DropDownList | StaticButton | IconButton;

export const NavBarStyle = styled.nav`
  button {
    color: #6e787f;
    font-size: 16px;
    font-family: "Roboto";
  }

  a {
    color: #6e787f;
    display: block;
    font-size: 16px;
    font-family: "Roboto";
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
    }

    .icon-bar {
      background-color: #454b50;
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
      transition: all 0.2s;
    }

    .icon-bar + .icon-bar {
      margin-top: 10px;
    }

    .top-bar {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }

    .bottom-bar {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }

    &.collapsed .top-bar {
      transform: rotate(0);
    }

    &.collapsed .bottom-bar {
      transform: rotate(0);
    }
  }

  .dropdown-item {
    font-size: 14px;
  }

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

export const NavigationBar: React.FunctionComponent<NavItemsProps[]> = (navItems) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <NavBarStyle>
      <div className={`container py-2`}>
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              className={`navbar-toggler outline-none ${isOn ? "" : "collapsed"}`}
              onClick={() => {
                setIsOn(!isOn);
              }}
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0">
              <a href="https://www.tradetrust.io/">
                <img
                  data-testid="nav-logo-home"
                  className="img-fluid h-12"
                  src="/static/images/tradetrust_logo.svg"
                  alt="TradeTrust"
                />
              </a>
            </div>
            <div className="hidden lg:block md:ml-12">
              <div className="flex h-full items-center">
                {navItems.map((item, index) => {
                  if (item.position == "center") {
                    return (
                      <div key={index} className="text-lg w-auto lg:ml-6">
                        {NavBarItem(item, setIsOn)}
                      </div>
                    );
                  }
                  return "";
                })}
              </div>
            </div>
            <div className="hidden md:block md:absolute md:right-0 lg:relative lg:ml-auto">
              <div className="flex h-full items-center">
                {navItems.map((item, index) => {
                  if (item.position == "right") {
                    return (
                      <div key={index} className="text-lg font-normal w-auto md:ml-3 lg:ml-6">
                        {NavBarItem(item, setIsOn)}
                      </div>
                    );
                  }
                  return "";
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden`}>
        <div
          className={`container  w-full bg-white overflow-auto  transition-height ease-in-out duration-700 h-full max-h-0 ${
            isOn ? "max-h-full" : ""
          }`}
        >
          {navItems.map((item, index) => {
            if (item.id == "create-documents" || item.id == "verify" || item.id == "settings") {
              return (
                <div key={index} className="text-lg font-normal w-full py-4 md:hidden">
                  {NavBarItem(item, setIsOn)}
                </div>
              );
            }
            return (
              <div key={index} className="text-lg font-normal w-full py-4">
                {NavBarItem(item, setIsOn)}
              </div>
            );
          })}
        </div>
      </div>
    </NavBarStyle>
  );
};

export const NavBarItem = (item: NavItemsProps, offNavBar: (isOn: boolean) => void): React.ReactNode => {
  switch (item.schema) {
    case NavItemPropsType.DropDownList:
      return DropdownList(item, offNavBar);
    case NavItemPropsType.StaticButton:
      return StaticButton(item, offNavBar);
    case NavItemPropsType.IconButton:
      return IconButton(item, offNavBar);
    default:
      return NavLink(item, offNavBar);
  }
};

export const DropdownList = (item: DropDownList, offNavBar: (isOn: boolean) => void): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex w-full font-medium focus:outline-none items-center dropdown-link"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {item.label}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ease-linear transform ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <>
          <button
            tabIndex={-1}
            onClick={() => {
              setIsOpen(false);
            }}
            className="md:fixed z-20 inset-0 w-full h-full cursor-default focus:outline-none sm:hidden lg:block"
          />
          <div
            className={`mt-2 w-full bg-white focus:outline-none rounded-md z-30 lg:origin-top-right lg:absolute lg:right-0 lg:mt-2 lg:shadow-dropdown lg:ring-1 lg:ring-black lg:ring-opacity-5`}
          >
            <div className="py-1" role="none">
              {item.dropdownItems.map((dropdownItem: any, index: number) => {
                if ((item.type = "internal")) {
                  return (
                    <NavHashLink
                      to={dropdownItem.path}
                      key={index}
                      className="block px-4 py-2 font-medium dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        offNavBar(false);
                        setIsOpen(false);
                      }}
                    >
                      {dropdownItem.label}
                    </NavHashLink>
                  );
                } else {
                  return (
                    <a href={item.path} className="block px-4 py-2 font-medium dropdown-item" role="menuitem">
                      {dropdownItem.label}
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const StaticButton = (item: StaticButton, offNavBar: (isOn: boolean) => void): React.ReactNode => {
  return (
    <a href={item.path} className="w-full">
      <button
        className={`font-bold py-2 px-3 ${item.className}`}
        onClick={() => {
          offNavBar(false);
        }}
      >
        {item.label}
      </button>
    </a>
  );
};

export const IconButton = (item: IconButton, offNavBar: (isOn: boolean) => void): React.ReactNode => {
  if ((item.type = "internal")) {
    return (
      <NavHashLink
        to={item.path}
        className={`font-medium ${item.className}`}
        activeClassName=""
        onClick={() => {
          offNavBar(false);
        }}
        smooth
      >
        {item.icon}
      </NavHashLink>
    );
  } else {
    return (
      <a href={item.path} className={`font-medium ${item.className}`}>
        {item.icon}
      </a>
    );
  }
};

export const NavLink = (item: NavLinks, offNavBar: (isOn: boolean) => void): React.ReactNode => {
  if ((item.type = "internal")) {
    return (
      <NavHashLink
        to={item.path}
        className={`font-medium ${item.className}`}
        activeClassName=""
        smooth
        onClick={() => {
          offNavBar(false);
        }}
      >
        {item.label}
      </NavHashLink>
    );
  } else {
    return (
      <a href={item.path} className={`font-medium ${item.className}`}>
        {item.label}
      </a>
    );
  }
};
