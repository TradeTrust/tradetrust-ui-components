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
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        {...props}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-10 max-w-sm cursor-pointer focus:outline-none flex items-center justify-between ${className} ${
          fullWidth ? " w-full" : ""
        } ${alignRight ? " ml-auto" : ""}`}
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
            className="fixed z-20 inset-0 w-full h-full cursor-default focus:outline-none"
          />
          <div
            onClick={() => setIsOpen(false)}
            className={`absolute z-30 max-w-sm mt-1 rounded bg-white border border-solid border-gray-300 py-2 shadow-lg${
              fullWidth ? " w-full" : ""
            } ${alignRight ? " right-0" : ""}`}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

interface DropdownItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const DropdownItem: FunctionComponent<DropdownItemProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`hover:bg-gray-100 p-3 cursor-pointer text-gray-800 truncate w-full w-max-sm active:bg-gray-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
