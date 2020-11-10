import React, { ReactElement } from "react";
import { Pagination } from "./Pagination";

export default {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    componentSubtitle: "Pagination",
  },
};

export const Default = (): ReactElement => {
  return (
    <Pagination
      onPageClick={() => {
        alert("page changed!!");
      }}
      totalNoOfPages={3}
      currentPage={1}
      setCurrentPage={() => {
        console.log("current page set to 1");
      }}
    />
  );
};
