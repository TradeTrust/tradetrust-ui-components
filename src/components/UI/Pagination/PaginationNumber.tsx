import React, { FunctionComponent } from "react";

export interface PaginationNumberProps {
  pageNumber: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  onPageClick: (pageNumber: number) => void;
}

export const PaginationNumber: FunctionComponent<PaginationNumberProps> = ({
  currentPage,
  pageNumber,
  setCurrentPage,
  onPageClick,
}) => {
  return (
    <button
      key={pageNumber}
      onClick={() => {
        setCurrentPage(pageNumber);
        onPageClick(pageNumber);
      }}
      className={`${
        pageNumber === 1 ? "border-l " : ""
      }border-r border-solid border-grey-light p-1 inline-block h-8 w-8 ${
        currentPage === pageNumber ? "text-grey bg-grey-light" : "text-brand-blue"
      } hover:bg-grey-light hover:text-grey focus:outline-none`}
    >
      {pageNumber}
    </button>
  );
};
