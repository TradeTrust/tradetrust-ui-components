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
    currentPage === pageNumber && (currentPage || pageNumber)
      ? "bg-cerulean-200 text-white hover:text-white"
      : "text-cerulean-200 hover:bg-cerulean-200 hover:text-white";
  const disabled = disable ? "bg-opacity-25 hover:bg-cloud-200 text-cloud-300 text-opacity-60 cursor-not-allowed" : "";

  return (
    <button
      className={`p-0 inline-block h-8 w-8 flex items-center justify-center focus:outline-none rounded-md ${active} ${disabled} ${
        className ? className : ""
      }`}
      disabled={disable}
      {...props}
    >
      {children}
    </button>
  );
};
