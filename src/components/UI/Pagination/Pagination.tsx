import React, { FunctionComponent, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "react-feather";
import { PaginationBox } from "./PaginationBox";

export interface PaginationProps {
  totalNoOfPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({ totalNoOfPages, currentPage, setCurrentPage }) => {
  const range = 5; // has to be odd number, so curr active number would be center of range
  const rangeOverflow = ~~(range / 2);
  const hideLeftTruncate = currentPage <= rangeOverflow + 2;
  const hideRightTruncate = currentPage > totalNoOfPages - (rangeOverflow + 2);
  const [expandLeftPagination, setExpandLeftPagination] = useState(false);
  const [expandRightPagination, setExpandRightPagination] = useState(false);

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

  return (
    <div className="flex overflow-x-auto">
      <div className="border border-solid border-grey-200 border-r-0 flex ml-auto items-center justify-center">
        <PaginationBox onClick={goToFirstPage} disable={currentPage === 1} data-testid="page-first">
          <ChevronsLeft size={14} />
        </PaginationBox>
        <PaginationBox onClick={goPreviousPage} disable={currentPage === 1} data-testid="page-prev">
          <ChevronLeft size={14} />
        </PaginationBox>
        <PaginationBox
          currentPage={currentPage}
          pageNumber={1}
          onClick={() => {
            setCurrentPage(1);
            setExpandLeftPagination(false);
            setExpandRightPagination(false);
          }}
          data-testid={`page-number-${1}`}
        >
          1
        </PaginationBox>
        {!expandLeftPagination && !hideLeftTruncate && (
          <PaginationBox
            onClick={() => {
              setExpandLeftPagination(true);
            }}
            data-testid="truncate-left"
          >
            ...
          </PaginationBox>
        )}
        {[...Array(totalNoOfPages)].map((value, i) => {
          const pageNumber = i + 1;
          const toHideLeft = expandLeftPagination ? false : pageNumber < currentPage - rangeOverflow;
          const toHideRight = expandRightPagination ? false : pageNumber > currentPage + rangeOverflow;
          const isFirstOrLastPage = pageNumber === 1 || pageNumber === totalNoOfPages;
          const toHide = toHideLeft || toHideRight || isFirstOrLastPage;
          if (toHide) return null;
          return (
            <PaginationBox
              key={i}
              currentPage={currentPage}
              pageNumber={pageNumber}
              onClick={() => {
                setCurrentPage(pageNumber);
                setExpandLeftPagination(false);
                setExpandRightPagination(false);
              }}
              data-testid={`page-number-${pageNumber}`}
            >
              {pageNumber}
            </PaginationBox>
          );
        })}
        {!expandRightPagination && !hideRightTruncate && (
          <PaginationBox
            onClick={() => {
              setExpandRightPagination(true);
            }}
            data-testid="truncate-right"
          >
            ...
          </PaginationBox>
        )}
        <PaginationBox
          currentPage={currentPage}
          pageNumber={totalNoOfPages}
          onClick={() => {
            setCurrentPage(totalNoOfPages);
            setExpandLeftPagination(false);
            setExpandRightPagination(false);
          }}
          data-testid={`page-number-${totalNoOfPages}`}
        >
          {totalNoOfPages}
        </PaginationBox>
        <PaginationBox onClick={goNextPage} disable={currentPage === totalNoOfPages} data-testid="page-next">
          <ChevronRight size={14} />
        </PaginationBox>
        <PaginationBox onClick={goToLastPage} disable={currentPage === totalNoOfPages} data-testid="page-last">
          <ChevronsRight size={14} />
        </PaginationBox>
      </div>
    </div>
  );
};
