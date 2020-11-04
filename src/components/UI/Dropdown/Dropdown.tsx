import React, { FunctionComponent, useState } from "react";
import { ChevronDown } from "react-feather";

export interface DropdownProps {
  dropdownButtonText: string;
  children: React.ReactNode;
}

export const Dropdown: FunctionComponent<DropdownProps> = ({ dropdownButtonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full max-w-sm border-grey-light border-solid border rounded-none cursor-pointer focus:outline-none p-3 flex justify-between hover:bg-grey-lightest text-grey-darker"
      >
        <span className="truncate">{dropdownButtonText}</span>
        <span>
          <ChevronDown />
        </span>
      </button>
      {isOpen && (
        <>
          <button
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 w-full h-full cursor-default focus:outline-none"
          />
          <div
            className="absolute w-full max-w-sm mt-1 rounded bg-white border border-solid border-grey-light py-2 shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

interface DropdownItemProps {
  onClick?: () => void;
  itemText: string;
}

export const DropdownItem: FunctionComponent<DropdownItemProps> = ({ onClick, itemText }) => {
  return (
    <div
      className="hover:bg-grey-lightest p-3 cursor-pointer text-grey-darker active:bg-blue truncate"
      onClick={onClick}
    >
      <span>{itemText}</span>
    </div>
  );
};
