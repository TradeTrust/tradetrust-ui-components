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
  const [expandLeftPagination, setExpandLeftPagination] = useState(false);
  const [expandRightPagination, setExpandRightPagination] = useState(false);
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
    const lastNumberBeforeTruncation = 4;
    const pageNumber = index + 1;
    const isFirst4Pages = currentPage < lastNumberBeforeTruncation;
    const isLast4pages = currentPage >= totalNoOfPages - 4;
    const isAfterFirst4Pages = currentPage >= lastNumberBeforeTruncation;
    const isBeforeLast4Pages = currentPage < totalNoOfPages - 4;
    const shouldDisplayFirst4Pages = index < lastNumberBeforeTruncation + 1;
    const displayLastPageNumber = pageNumber === totalNoOfPages;
    const display2PagesBeforeCurrentPage = index >= currentPage - 3;
    const display2PagesAfterCurrentPage = index <= currentPage + 1;
    const shouldDisplayLast7Pages = index >= totalNoOfPages - 7;

    switch (true) {
      case (isFirst4Pages && shouldDisplayFirst4Pages) || displayLastPageNumber:
      case isAfterFirst4Pages && isBeforeLast4Pages && display2PagesBeforeCurrentPage && display2PagesAfterCurrentPage:
      case isLast4pages && shouldDisplayLast7Pages:
        return pageNumber;

      default:
        return "...";
    }
  };

  const generatePageNumbers = (): ReactElement[] => {
    const pagesArray = [...Array(totalNoOfPages)].map((pages, i) => {
      const pageNumber = i + 1;
      if (expandLeftPagination && pageNumber < currentPage) {
        return pageNumber;
      } else if (expandRightPagination && pageNumber > currentPage) {
        return pageNumber;
      }
      return populateNumbers(i);
    });

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
            setExpandLeftPagination(false);
            setExpandRightPagination(false);
          }}
        >
          {pages}
        </PaginationBox>
      ) : (
        <PaginationBox
          key={i}
          index={index++}
          onClick={() => {
            return i + 1 < currentPage ? setExpandLeftPagination(true) : setExpandRightPagination(true);
          }}
          testid={`${i + 1 < currentPage ? "truncate-left" : "truncate-right"}`}
        >
          {pages}
        </PaginationBox>
      );
    });
  };

  return (
    <div className="flex">
      <div className="border border-solid border-grey-200 border-r-0 flex ml-auto items-center justify-center">
        <PaginationBox index={index++} onClick={goToFirstPage} disable={currentPage === 1} testid="page-first">
          <ChevronsLeft size={14} />
        </PaginationBox>
        <PaginationBox index={index++} onClick={goPreviousPage} disable={currentPage === 1} testid="page-prev">
          <ChevronLeft size={14} />
        </PaginationBox>
        {generatePageNumbers()}
        <PaginationBox index={index++} onClick={goNextPage} disable={currentPage === totalNoOfPages} testid="page-next">
          <ChevronRight size={14} />
        </PaginationBox>
        <PaginationBox
          index={index++}
          onClick={goToLastPage}
          disable={currentPage === totalNoOfPages}
          testid="page-last"
        >
          <ChevronsRight size={14} />
        </PaginationBox>
      </div>
    </div>
  );
};
