import React, { FunctionComponent } from "react";

export interface PaginationBoxProps {
  children: React.ReactNode;
  disable?: boolean;
  onClick?: () => void;
  pageNumber?: number;
  currentPage?: number;
  className?: string;
}

export const PaginationBox: FunctionComponent<PaginationBoxProps> = ({
  children,
  disable,
  pageNumber,
  currentPage,
  className,
  ...props
}) => {
  const active =
    currentPage === pageNumber && (currentPage || pageNumber) ? "text-gray-500 bg-gray-50" : "text-cerulean-500";
  const disabled = disable ? "bg-opacity-25 text-opacity-25 cursor-not-allowed" : "";

  return (
    <button
      className={`border-r border-solid border-gray-200 p-0 inline-block h-8 w-8 flex items-center justify-center focus:outline-none ${active} ${disabled} ${
        className ? className : ""
      } `}
      disabled={disable}
      {...props}
    >
      {children}
    </button>
  );
};
