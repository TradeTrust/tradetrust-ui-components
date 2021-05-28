import React, { useState } from "react";
import { FunctionComponent } from "react";
import * as NavType from "./type";

export const NavigationBarItem: FunctionComponent<{
  item: NavType.NavigationItem;
}> = ({ item }) => {
  switch (item.schema) {
    case NavType.NavigationItemType.IconButton:
      return <IconButton item={item} />;
    case NavType.NavigationItemType.LabelButton:
      return <LabelButton item={item} />;
    case NavType.NavigationItemType.DropDownList:
      return <DropDownList item={item} />;
    default:
      return <NavigationLink item={item} />;
  }
};

const NavigationLink: FunctionComponent<{ item: NavType.NavigationLink }> = ({ item }) => {
  return (
    <a
      className={`text-cloud-500 hover:text-black transition-color duration-200 ease-out font-medium ${item.className}`}
      href={item.path}
    >
      {item.label}
    </a>
  );
};

const LabelButton: FunctionComponent<{ item: NavType.LabelButton }> = ({ item }) => {
  return (
    <a
      href={item.path}
      className={`font-bold transition-color duration-200 ease-out shadow-lg rounded-xl border p-2 ${item.className}`}
      data-testid={item.id}
    >
      {item.label}
    </a>
  );
};

const IconButton: FunctionComponent<{ item: NavType.IconButton }> = ({ item }) => {
  const ButtonIcon = item.icon;
  return (
    <a
      className={`text-cloud-500 hover:text-black transition-color duration-200 ease-out  ${item.className}`}
      href={item.path}
      data-testid={item.id}
    >
      <ButtonIcon className="stroke-current" />
    </a>
  );
};

const DropDownList: FunctionComponent<{ item: NavType.DropDownList }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id={item.id + "-button"}
      >
        <span className="text-cloud-500 hover:text-black transition-color duration-200 ease-out font-medium">
          {item.label}
        </span>
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ease-out transform text-cloud-500 ${
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
            className="md:fixed z-20 inset-0 w-full h-full cursor-default focus:outline-none hidden lg:block"
          />
          <div
            className={`mt-2 w-full bg-white focus:outline-none rounded-md z-30 lg:origin-top-right lg:absolute lg:right-0 lg:mt-2 lg:shadow-dropdown lg:ring-1 lg:ring-black lg:ring-opacity-5`}
          >
            <div className="dropdown py-1">
              {item.dropdownItems?.map((dropdownItem: any, index: number) => {
                return (
                  <a
                    key={index}
                    className="text-cloud-500 hover:text-black transition-color duration-200 ease-out font-medium block px-4 py-2"
                    href={dropdownItem.path}
                    onClick={() => {
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
