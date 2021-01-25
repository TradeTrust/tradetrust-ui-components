import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Pagination } from "./Pagination";

describe("pagination", () => {
  it("should render pagination component correctly on initial load", () => {
    render(<Pagination totalNoOfPages={8} currentPage={1} setCurrentPage={() => {}} />);

    expect(screen.getAllByTestId(/page-number/)).toHaveLength(6);
  });

  it("should render pagination component correctly despite what the user clicks", () => {
    const setCurrentPage = jest.fn();
    render(<Pagination totalNoOfPages={8} currentPage={2} setCurrentPage={setCurrentPage} />);

    fireEvent.click(screen.getByTestId("page-number-1"));
    fireEvent.click(screen.getByTestId("page-number-2"));
    fireEvent.click(screen.getByTestId("page-number-3"));
    fireEvent.click(screen.getByTestId("page-number-4"));
    fireEvent.click(screen.getByTestId("page-number-5"));
    fireEvent.click(screen.getByTestId("page-number-8"));
    fireEvent.click(screen.getByTestId("non-number-0"));
    fireEvent.click(screen.getByTestId("non-number-1"));
    fireEvent.click(screen.getByTestId("non-number-9"));
    fireEvent.click(screen.getByTestId("non-number-10"));
    expect(setCurrentPage).toHaveBeenCalledTimes(10);
  });
});
