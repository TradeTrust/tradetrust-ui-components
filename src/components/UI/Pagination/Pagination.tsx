import React, { FunctionComponent } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
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
    <div className="flex overflow-x-auto">
      <div className="border border-solid border-grey-200 border-r-0 flex ml-auto items-center justify-center">
        <PaginationBox
          onClick={goPreviousPage}
          disable={currentPage === 1}
          data-testid="page-prev"
          className="hover:bg-grey-100 hover:text-grey"
        >
          <ChevronLeft size={14} />
        </PaginationBox>
        <PaginationBox
          currentPage={currentPage}
          pageNumber={1}
          onClick={() => {
            setCurrentPage(1);
          }}
          data-testid={`page-number-${1}`}
          className="hover:bg-grey-100 hover:text-grey"
        >
          1
        </PaginationBox>
        {!hideLeftTruncate && (
          <PaginationBox data-testid="truncate-left" className="cursor-default">
            ...
          </PaginationBox>
        )}
        {[...Array(totalNoOfPages)].map((value, i) => {
          const pageNumber = i + 1;
          const toHideLeft = pageNumber < currentPage - rangeOverflow;
          const toHideRight = pageNumber > currentPage + rangeOverflow;
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
              }}
              data-testid={`page-number-${pageNumber}`}
              className="hover:bg-grey-100 hover:text-grey"
            >
              {pageNumber}
            </PaginationBox>
          );
        })}
        {!hideRightTruncate && (
          <PaginationBox data-testid="truncate-right" className="cursor-default">
            ...
          </PaginationBox>
        )}
        {totalNoOfPages > 1 && (
          <PaginationBox
            currentPage={currentPage}
            pageNumber={totalNoOfPages}
            onClick={() => {
              setCurrentPage(totalNoOfPages);
            }}
            data-testid={`page-number-${totalNoOfPages}`}
            className="hover:bg-grey-100 hover:text-grey"
          >
            {totalNoOfPages}
          </PaginationBox>
        )}
        <PaginationBox
          onClick={goNextPage}
          disable={currentPage >= totalNoOfPages}
          data-testid="page-next"
          className="hover:bg-grey-100 hover:text-grey"
        >
          <ChevronRight size={14} />
        </PaginationBox>
      </div>
    </div>
  );
};
