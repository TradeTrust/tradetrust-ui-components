import React, { useState } from "react";
import { FunctionComponent } from "react";
import * as NavType from "./../type";
import { LinkButton } from "./../../UI/Button";

export const NavigationBarItem: FunctionComponent<{
  item: NavType.NavigationItem;
}> = ({ item }) => {
  switch (item.schema) {
    case NavType.NAVIGATION_ITEM_TYPE.NavigationIconButton:
      return <IconButton item={item} />;
    case NavType.NAVIGATION_ITEM_TYPE.NavigationLabelButton:
      return <LabelButton item={item} />;
    case NavType.NAVIGATION_ITEM_TYPE.NavigationDropDownList:
      return <DropDownList item={item} />;
    default:
      return <NavigationLink item={item} />;
  }
};

const NavigationLink: FunctionComponent<{ item: NavType.NavigationLink }> = ({ item }) => {
  return (
    <div
      className={`text-cloud-500 hover:text-cloud-900 transition-color duration-200 ease-out font-medium ${
        item.className ? item.className : ""
      }`}
    >
      {item.customLink ? item.customLink : <a href={item.path}>{item.label}</a>}
    </div>
  );
};

const LabelButton: FunctionComponent<{ item: NavType.NavigationLabelButton }> = ({ item }) => {
  return (
    <div
      className={`font-bold transition-color duration-200 ease-out rounded-xl border ${
        item.className ? item.className : ""
      }`}
    >
      {item.customLink ? (
        item.customLink
      ) : (
        <LinkButton href={item.path} className={`p-2 rounded-xl shadow-none`} data-testid={item.id}>
          {item.label}
        </LinkButton>
      )}
    </div>
  );
};

const IconButton: FunctionComponent<{ item: NavType.NavigationIconButton }> = ({ item }) => {
  const ButtonIcon = item.icon;

  return (
    <div
      className={`text-cloud-500 hover:text-cloud-900 transition-color duration-200 ease-out ${
        item.className ? item.className : ""
      }`}
    >
      {item.customLink ? (
        item.customLink
      ) : (
        <a href={item.path} className={`p-2`} data-testid={item.id}>
          <ButtonIcon className="stroke-current" />
        </a>
      )}
    </div>
  );
};

const DropDownList: FunctionComponent<{ item: NavType.NavigationDropDownList }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center text-cloud-500 hover:text-cloud-900 focus:outline-none outline-none transition-color duration-200 ease-out "
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id={item.id + "-button"}
      >
        <span className="font-medium">{item.label}</span>
        <svg
          className={`-mr-1 ml-1 h-5 w-5 transition-transform duration-200 ease-out transform ${
            isOpen ? "rotate-180" : "rotate-0"
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
              {item.dropdownItems?.map((dropdownItem: NavType.NavigationDropDownItems, index: number) => {
                return (
                  <div
                    key={index}
                    className={`text-cloud-500 hover:text-cloud-900 transition-color duration-200 ease-out font-medium block`}
                  >
                    {dropdownItem.customLink ? (
                      <div className="relative">
                        <div
                          className="absolute w-full h-full"
                          onClick={(event) => {
                            event.currentTarget.parentElement?.getElementsByTagName("a")[0].click();
                            setIsOpen(false);
                          }}
                        />
                        {dropdownItem.customLink}
                      </div>
                    ) : (
                      <a
                        key={index}
                        className="px-4 py-2"
                        href={dropdownItem.path}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        {dropdownItem.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
