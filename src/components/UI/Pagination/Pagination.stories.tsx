import React, { ReactElement, useState } from "react";
import { Pagination } from "./Pagination";
import { PaginationNumber } from "./PaginationNumber";

export default {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    componentSubtitle: "Pagination",
  },
};

export const Default = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      onPageClick={() => {
        console.log("page changed!!");
      }}
      totalNoOfPages={3}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export const PaginationNumberSelected = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationNumber
      pageNumber={1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onPageClick={(i: number) => {
        console.log(`page ${i} changed!!`);
      }}
    />
  );
};

export const PaginationNumberUnselected = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <PaginationNumber
      pageNumber={1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onPageClick={(i: number) => {
        console.log(`page ${i} changed!!`);
      }}
    />
  );
};
