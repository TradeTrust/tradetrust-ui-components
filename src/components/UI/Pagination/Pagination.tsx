import _ from "lodash";
import React, { FunctionComponent, ReactElement, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "react-feather";
import { PaginationBox } from "./PaginationBox";

export interface PaginationProps {
  totalNoOfPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({ totalNoOfPages, currentPage, setCurrentPage }) => {
  const [expandPagination, setExpandPagination] = useState(false);
  let index = 0;

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

  const goToFirstPage = (): void => {
    setCurrentPage(1);
  };

  const goToLastPage = (): void => {
    setCurrentPage(totalNoOfPages);
  };

  const populateNumbers = (index: number): number | string => {
    switch (true) {
      case (currentPage < 4 && index < 5) || index + 1 === totalNoOfPages:
      case currentPage >= 4 && currentPage < totalNoOfPages - 4 && index >= currentPage - 3 && index <= currentPage + 1:
      case currentPage >= totalNoOfPages - 4 && index >= totalNoOfPages - 7:
        return index + 1;

      default:
        return "...";
    }
  };

  const generatePageNumbers = (): ReactElement[] => {
    const pagesArray = [...Array(totalNoOfPages)].map((pages, i) => (!expandPagination ? populateNumbers(i) : i + 1));

    const filteredPagesArray = _.uniq(pagesArray.slice(0, currentPage)).concat(
      _.uniq(pagesArray.slice(currentPage, totalNoOfPages))
    );

    return filteredPagesArray.map((pages, i) => {
      return typeof pages === "number" ? (
        <PaginationBox
          key={i}
          index={index++}
          currentPage={currentPage}
          pageNumber={pages}
          onClick={() => {
            setCurrentPage(pages);
            setExpandPagination(false);
          }}
        >
          {pages}
        </PaginationBox>
      ) : (
        <PaginationBox key={i} index={index++} onClick={() => setExpandPagination(true)}>
          {pages}
        </PaginationBox>
      );
    });
  };

  return (
    <div className="flex">
      <div className="border border-solid border-grey-200 border-r-0 flex ml-auto items-center justify-center">
        <PaginationBox index={index++} onClick={goToFirstPage} disable={currentPage === 1}>
          <ChevronsLeft size={14} />
        </PaginationBox>
        <PaginationBox index={index++} onClick={goPreviousPage} disable={currentPage === 1}>
          <ChevronLeft size={14} />
        </PaginationBox>
        {generatePageNumbers()}
        <PaginationBox index={index++} onClick={goNextPage} disable={currentPage === totalNoOfPages}>
          <ChevronRight size={14} />
        </PaginationBox>
        <PaginationBox index={index++} onClick={goToLastPage} disable={currentPage === totalNoOfPages}>
          <ChevronsRight size={14} />
        </PaginationBox>
      </div>
    </div>
  );
};
