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
    currentPage === pageNumber && (currentPage || pageNumber) ? "bg-blue text-white rounded-md " : "text-blue";
  const disabled = disable ? "bg-opacity-25 text-opacity-25 cursor-not-allowed" : "";

  return (
    <button
      className={`p-0 inline-block h-8 w-8 flex items-center justify-center focus:outline-none ${active} ${disabled} ${
        className ? className : ""
      } `}
      disabled={disable}
      {...props}
    >
      {children}
    </button>
  );
};
