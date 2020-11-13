import React, { FunctionComponent, useState } from "react";
import { ChevronDown } from "react-feather";

export interface DropdownProps {
  dropdownButtonText: string;
  children: React.ReactNode;
  className?: string;
  alignRight?: boolean;
  fullWidth?: boolean;
}

export const Dropdown: FunctionComponent<DropdownProps> = ({
  dropdownButtonText,
  children,
  className,
  alignRight,
  fullWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-10 max-w-sm cursor-pointer focus:outline-none flex justify-between text-grey-darker ${className} ${
          fullWidth ? "w-full " : " "
        } ${alignRight ? "ml-auto " : " "}`}
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
            onClick={() => setIsOpen(false)}
            className={`absolute${
              fullWidth ? "w-full " : " "
            }max-w-sm mt-1 rounded bg-white border border-solid border-grey-light py-2 shadow-lg ${
              alignRight ? "right-0 " : " "
            }`}
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
  "data-testid"?: string;
  className?: string;
}

export const DropdownItem: FunctionComponent<DropdownItemProps> = ({
  onClick,
  itemText,
  "data-testid": dataTestid,
  className,
}) => {
  return (
    <div
      className={`hover:bg-grey-lightest p-3 cursor-pointer text-grey-darker active:bg-blue truncate w-full w-max-sm ${className}`}
      onClick={onClick}
      data-testid={dataTestid}
    >
      {itemText}
    </div>
  );
};
