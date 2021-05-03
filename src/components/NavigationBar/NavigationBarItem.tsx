import React, { useState } from "react";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import * as NavType from "./type";

export const NavigationBarItem: FunctionComponent<{
  item: NavType.NavigationItem;
  onClick: (isOn: boolean) => void;
}> = ({ item, onClick }) => {
  switch (item.schema) {
    case NavType.NavigationItemType.IconButton:
      return <IconButton item={item} onClick={onClick} />;
    case NavType.NavigationItemType.LabelButton:
      return <LabelButton item={item} onClick={onClick} />;
    case NavType.NavigationItemType.DropDownList:
      return <DropDownList item={item} onClick={onClick} />;
    default:
      return <NavigationLink item={item} onClick={onClick} />;
  }
};

const NavigationLink: FunctionComponent<{ item: NavType.NavigationLink; onClick: (isOn: boolean) => void }> = ({
  item,
  onClick,
}) => {
  if (item.path.indexOf("http://") === 0 || item.path.indexOf("https://") === 0) {
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
  } else {
    return (
      <NavLink
        className={`font-medium ${item.className}`}
        to={item.path}
        onClick={() => {
          onClick(false);
        }}
      >
        {item.label}
      </NavLink>
    );
  }
};

const LabelButton: FunctionComponent<{ item: NavType.LabelButton; onClick: (isOn: boolean) => void }> = ({
  item,
  onClick,
}) => {
  if (item.path.indexOf("http://") === 0 || item.path.indexOf("https://") === 0) {
    return (
      <a href={item.path} className="w-full">
        <button
          className={`font-bold py-2 px-3 ${item.className}`}
          data-testid={item.id}
          onClick={() => {
            onClick(false);
            {
              if (typeof item.onClick === "function") {
                item.onClick();
              }
            }
          }}
        >
          {item.label}
        </button>
      </a>
    );
  } else {
    return (
      <NavLink to={item.path} className="w-full">
        <button
          className={`font-bold py-2 px-3 ${item.className}`}
          data-testid={item.id}
          onClick={() => {
            onClick(false);
            {
              if (typeof item.onClick === "function") {
                item.onClick();
              }
            }
          }}
        >
          {item.label}
        </button>
      </NavLink>
    );
  }
};

const IconButton: FunctionComponent<{ item: NavType.IconButton; onClick: (isOn: boolean) => void }> = ({
  item,
  onClick,
}) => {
  const ButtonIcon = item.icon;
  if (item.path.indexOf("http://") === 0 || item.path.indexOf("https://") === 0) {
    return (
      <a
        className={`font-medium ${item.className}`}
        href={item.path}
        data-testid={item.id}
        onClick={() => {
          onClick(false);
        }}
      >
        <ButtonIcon />
      </a>
    );
  } else {
    return (
      <NavLink
        className={`font-medium ${item.className}`}
        to={item.path}
        data-testid={item.id}
        onClick={() => {
          onClick(false);
        }}
      >
        <ButtonIcon />
      </NavLink>
    );
  }
};

const DropDownList: FunctionComponent<{ item: NavType.DropDownList; onClick: (isOn: boolean) => void }> = ({
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
                if (dropdownItem.path.indexOf("http://") === 0 || dropdownItem.path.indexOf("https://") === 0) {
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
                } else {
                  return (
                    <NavLink
                      key={index}
                      role="menuitem"
                      className="block px-4 py-2 font-medium dropdown-item"
                      to={dropdownItem.path}
                      onClick={() => {
                        onClick(false);
                        setIsOpen(false);
                      }}
                    >
                      {dropdownItem.label}
                    </NavLink>
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
