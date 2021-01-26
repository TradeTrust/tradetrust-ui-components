import React, { ReactElement, useState } from "react";
import { Pagination } from "./Pagination";
import { PaginationBox } from "./PaginationBox";

export default {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    componentSubtitle: "Pagination",
  },
};

export const SinglePageDefault = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination totalNoOfPages={1} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
};

export const MultiPagesDefault = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination totalNoOfPages={18} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
};

export const PaginationNumberSelected = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PaginationBox
      pageNumber={1}
      currentPage={currentPage}
      onClick={() => {
        setCurrentPage(1);
      }}
    >
      1
    </PaginationBox>
  );
};

export const PaginationNumberUnselected = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <PaginationBox
      pageNumber={1}
      currentPage={currentPage}
      onClick={() => {
        setCurrentPage(1);
      }}
    >
      1
    </PaginationBox>
  );
};
