import React, { FunctionComponent } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { PaginationNumber } from "./PaginationNumber";

export interface PaginationProps {
  totalNoOfPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({ totalNoOfPages, currentPage, setCurrentPage }) => {
  const goPreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = (): void => {
    if (currentPage < totalNoOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex">
      <div className="border border-solid border-grey-200 flex ml-auto items-center justify-center">
        <button
          className={`p-0 inline-block text-blue h-8 w-8 flex items-center justify-center hover:bg-grey-100 hover:text-grey focus:outline-none ${
            currentPage === 1 && "opacity-25 cursor-not-allowed"
          }`}
          onClick={goPreviousPage}
        >
          <ArrowLeft size={14} />
        </button>
        {totalNoOfPages > 1 ? (
          [...Array(totalNoOfPages)].map((x, i) => (
            <PaginationNumber key={i} currentPage={currentPage} pageNumber={i + 1} setCurrentPage={setCurrentPage} />
          ))
        ) : (
          <PaginationNumber currentPage={currentPage} pageNumber={1} setCurrentPage={setCurrentPage} />
        )}
        <button
          className={`p-0 inline-block text-blue h-8 w-8 flex items-center justify-center hover:bg-grey-100 hover:text-grey focus:outline-none ${
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
