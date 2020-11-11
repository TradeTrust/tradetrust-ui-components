import React, { ReactElement, useState } from "react";
import { Pagination } from "./Pagination";

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
