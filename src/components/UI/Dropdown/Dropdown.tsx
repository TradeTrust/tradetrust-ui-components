import React, { FunctionComponent, useState } from "react";
import { ChevronDown } from "react-feather";

export interface DropdownProps {
  dropdownButtonText: string;
  children: React.ReactNode;
  className?: string;
  alignRight?: boolean;
  classNameShared?: string;
}

export const Dropdown: FunctionComponent<DropdownProps> = ({
  dropdownButtonText,
  children,
  className,
  alignRight,
  classNameShared,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const addonStylesShared = classNameShared ? classNameShared : "";
  const addonStylesButton = alignRight ? "ml-auto" : "";
  const addonStylesItem = alignRight ? "right-0" : "";

  return (
    <div className="relative">
      <button
        {...props}
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={`relative z-10 cursor-pointer focus:outline-none flex items-center justify-between ${className} ${addonStylesShared} ${addonStylesButton}`}
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
            className={`absolute z-30 rounded bg-white border border-gray-300 py-2 shadow-lg ${addonStylesShared} ${addonStylesItem}`}
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
      className={`truncate cursor-pointer text-cloud-900 p-3 hover:bg-gray-50 active:bg-gray-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
