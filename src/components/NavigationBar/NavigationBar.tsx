import styled from "@emotion/styled";
import { IconItem } from "@storybook/components";
import React, { useState, FunctionComponent } from "react";
import { Icon } from "react-feather";

export enum NavigationItemType {
  NavigationLink = "NavigationLink",
  DropDownList = "DropDownList",
  LabelButton = "LabelButton",
  IconButton = "IconButton",
}

interface NavigationLink {
  schema: NavigationItemType.NavigationLink;
  id: string;
  label: string;
  className?: string;
  path: string;
  position: "left" | "center" | "right";
}

interface DropDownList extends Omit<NavigationLink, "schema" | "path"> {
  schema: NavigationItemType.DropDownList;
  dropdownItems: { id: string; label: string; path: string }[];
}

interface LabelButton extends Omit<NavigationLink, "schema"> {
  schema: NavigationItemType.LabelButton;
}

interface IconButton extends Omit<NavigationLink, "schema"> {
  schema: NavigationItemType.IconButton;
  icon: Icon;
}

export type NavigationItem = NavigationLink | DropDownList | LabelButton | IconButton;

export interface NavigationBarProps {
  navigationItems: NavigationItem[];
}

const NavigationBarStyle = styled.nav`
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
`;

export const NavigationBar: FunctionComponent<NavigationBarProps> = (props) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <NavigationBarStyle>
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
                {props.navigationItems.map((item, index) => {
                  if (item.position == "left") {
                    return (
                      <div key={index} className="text-lg w-auto lg:ml-6">
                        <NavigationBarItem item={item} onClick={setIsOn} />
                      </div>
                    );
                  }
                  return "";
                })}
              </div>

              <div className="flex h-full mx-auto items-center">
                {props.navigationItems.map((item, index) => {
                  if (item.position == "center") {
                    return (
                      <div key={index} className="text-lg w-auto lg:ml-6">
                        <NavigationBarItem item={item} onClick={setIsOn} />
                      </div>
                    );
                  }
                  return "";
                })}
              </div>
            </div>
            <div className="hidden md:block md:absolute md:right-0 lg:relative lg:ml-auto">
              <div className="flex h-full items-center">
                {props.navigationItems.map((item, index) => {
                  if (item.position == "right") {
                    return (
                      <div key={index} className="text-lg font-normal w-auto md:ml-3 lg:ml-6">
                        <NavigationBarItem item={item} onClick={setIsOn} />
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
          {props.navigationItems.map((item, index) => {
            if (item.id == "create-documents" || item.id == "verify" || item.id == "settings") {
              return (
                <div key={index} className="text-lg font-normal w-full py-4 md:hidden">
                  <NavigationBarItem item={item} onClick={setIsOn} />
                </div>
              );
            }
            return (
              <div key={index} className="text-lg font-normal w-full py-4">
                <NavigationBarItem item={item} onClick={setIsOn} />
              </div>
            );
          })}
        </div>
      </div>
    </NavigationBarStyle>
  );
};

const NavigationBarItem: FunctionComponent<{ item: NavigationItem; onClick: (isOn: boolean) => void }> = ({
  item,
  onClick,
}) => {
  switch (item.schema) {
    case NavigationItemType.IconButton:
      return <IconButton item={item} onClick={onClick} />;
    case NavigationItemType.LabelButton:
      return <LabelButton item={item} onClick={onClick} />;
    case NavigationItemType.DropDownList:
      return <DropDownList item={item} onClick={onClick} />;
    default:
      return <NavigationLink item={item} onClick={onClick} />;
  }
};

const NavigationLink: FunctionComponent<{ item: NavigationLink; onClick: (isOn: boolean) => void }> = ({
  item,
  onClick,
}) => {
  return (
    <a
      className={`font-medium ${item.className}`}
      href={item.path}
      onClick={() => {
        onClick(false);
      }}
    >
      {item.label}
    </a>
  );
};

const LabelButton: FunctionComponent<{ item: LabelButton; onClick: (isOn: boolean) => void }> = ({ item, onClick }) => {
  return (
    <a href={item.path} className="w-full">
      <button
        className={`font-bold py-2 px-3 ${item.className}`}
        onClick={() => {
          onClick(false);
        }}
      >
        {item.label}
      </button>
    </a>
  );
};

const IconButton: FunctionComponent<{ item: IconButton; onClick: (isOn: boolean) => void }> = ({ item, onClick }) => {
  const Icon = item.icon;
  return (
    <a
      className={`font-medium ${item.className}`}
      href={item.path}
      onClick={() => {
        onClick(false);
      }}
    >
      <Icon />
    </a>
  );
};

const DropDownList: FunctionComponent<{ item: DropDownList; onClick: (isOn: boolean) => void }> = ({
  item,
  onClick,
}) => {
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
        id={item.id + "-button"}
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
              {item.dropdownItems?.map((dropdownItem: any, index: number) => {
                return (
                  <a
                    key={index}
                    role="menuitem"
                    className="block px-4 py-2 font-medium dropdown-item"
                    href={dropdownItem.path}
                    onClick={() => {
                      onClick(false);
                      setIsOpen(false);
                    }}
                  >
                    {dropdownItem.label}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
