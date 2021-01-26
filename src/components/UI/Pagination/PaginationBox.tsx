import React, { FunctionComponent } from "react";

export interface PaginationBoxProps {
  children: React.ReactNode;
  disable?: boolean;
  onClick: () => void;
  pageNumber?: number;
  currentPage?: number;
}

export const PaginationBox: FunctionComponent<PaginationBoxProps> = ({
  children,
  disable,
  pageNumber,
  currentPage,
  ...props
}) => {
  const active = currentPage === pageNumber && (currentPage || pageNumber) ? "text-grey bg-grey-100" : "text-blue";
  const disabled = disable ? "bg-opacity-25 text-opacity-25 cursor-not-allowed" : "";

  return (
    <button
      className={`border-r border-solid border-grey-200 p-0 inline-block h-8 w-8 flex items-center justify-center hover:bg-grey-100 hover:text-grey focus:outline-none ${active} ${disabled}`}
      disabled={disable}
      {...props}
    >
      {children}
    </button>
  );
};
