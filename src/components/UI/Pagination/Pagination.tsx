import React, { FunctionComponent, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export interface PaginationProps {
  totalNoOfPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  onPageClick: (pageNumber: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  totalNoOfPages,
  currentPage,
  setCurrentPage,
  onPageClick,
}) => {
  const pageNumberComponent = (i: number): ReactNode => {
    return (
      <button
        key={i}
        onClick={() => {
          setCurrentPage(i);
          onPageClick(i);
        }}
        className={`${i === 1 ? "border-l " : ""}border-r border-solid border-grey-light p-1 inline-block h-8 w-8 ${
          currentPage === i ? "text-grey bg-grey-light" : "text-brand-blue"
        } hover:bg-grey-light hover:text-grey focus:outline-none`}
      >
        {i}
      </button>
    );
  };

  const generateNumberOfPages = (): ReactNode => {
    const numberOfPages = [];
    for (let i = 1; i <= totalNoOfPages; i++) {
      numberOfPages.push(pageNumberComponent(i));
    }
    return numberOfPages;
  };

  const goPreviousPage = (): void => {
    if (currentPage > 1) {
      onPageClick(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = (): void => {
    if (currentPage < totalNoOfPages) {
      onPageClick(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex">
      <div className="border border-solid border-grey-light flex ml-auto items-center justify-center">
        <button
          className={`p-0 inline-block text-brand-blue h-8 w-8 flex items-center justify-center hover:bg-grey-light hover:text-grey focus:outline-none ${
            currentPage === 1 && "opacity-25 cursor-not-allowed"
          }`}
          onClick={goPreviousPage}
        >
          <ArrowLeft size={14} />
        </button>
        {totalNoOfPages && totalNoOfPages > 1 ? generateNumberOfPages() : pageNumberComponent(1)}
        <button
          className={`p-0 inline-block text-brand-blue h-8 w-8 flex items-center justify-center hover:bg-grey-light hover:text-grey focus:outline-none ${
            currentPage === totalNoOfPages && "opacity-25 cursor-not-allowed"
          }`}
          onClick={goNextPage}
        >
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
