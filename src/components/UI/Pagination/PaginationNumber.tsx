import React, { FunctionComponent } from "react";

export interface PaginationNumberProps {
  pageNumber: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const PaginationNumber: FunctionComponent<PaginationNumberProps> = ({
  currentPage,
  pageNumber,
  setCurrentPage,
}) => {
  return (
    <button
      key={pageNumber}
      onClick={() => {
        setCurrentPage(pageNumber);
      }}
      className={`${
        pageNumber === 1 ? "border-l " : ""
      }border-r border-solid border-grey-200 p-1 inline-block h-8 w-8 ${
        currentPage === pageNumber ? "text-grey bg-grey-100" : "text-blue"
      } hover:bg-grey-100 hover:text-grey focus:outline-none`}
    >
      {pageNumber}
    </button>
  );
};
