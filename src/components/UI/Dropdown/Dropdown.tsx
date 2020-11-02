import React, { FunctionComponent, useState } from "react";
import { ChevronDown } from "react-feather";

export interface DropdownProps {
  dropdownButtonText: string;
  children: React.ReactNode;
}

export const Dropdown: FunctionComponent<DropdownProps> = ({ dropdownButtonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tw-relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tw-relative tw-z-10 tw-w-full tw-max-w-sm tw-border-grey-light tw-border-solid tw-border tw-rounded-none tw-cursor-pointer focus:tw-outline-none tw-p-3 tw-flex tw-justify-between hover:tw-bg-grey-lightest tw-text-grey-darker"
      >
        {dropdownButtonText}
        <ChevronDown />
      </button>
      {isOpen && (
        <>
          <button
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
            className="tw-fixed tw-inset-0 tw-w-full tw-h-full tw-cursor-default focus:tw-outline-none"
          />
          <div className="tw-absolute tw-w-full tw-max-w-sm tw-mt-1 tw-rounded tw-bg-white tw-border tw-border-solid tw-border-grey-light tw-py-2 tw-shadow-lg">
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
      className="hover:tw-bg-grey-lightest tw-p-3 tw-cursor-pointer tw-text-grey-darker active:tw-bg-blue"
      onClick={onClick}
    >
      {itemText}
    </div>
  );
};
