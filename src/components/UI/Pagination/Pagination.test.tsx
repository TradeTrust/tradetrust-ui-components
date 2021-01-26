import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Pagination } from "./Pagination";

describe("pagination", () => {
  it("should render pagination component correctly on initial load", () => {
    render(<Pagination totalNoOfPages={8} currentPage={1} setCurrentPage={() => {}} />);

    expect(screen.getAllByTestId(/page-number/)).toHaveLength(6);
    expect(screen.queryAllByTestId("truncate-left")).toHaveLength(0);
    expect(screen.queryAllByTestId("truncate-right")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-first")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-prev")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-next")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-last")).toHaveLength(1);
  });

  it("should render pagination component correctly despite what the user clicks", () => {
    const setCurrentPage = jest.fn();
    render(<Pagination totalNoOfPages={8} currentPage={2} setCurrentPage={setCurrentPage} />);

    fireEvent.click(screen.getByTestId("page-number-1"));
    fireEvent.click(screen.getByTestId("page-number-2"));
    fireEvent.click(screen.getByTestId("page-number-3"));
    fireEvent.click(screen.getByTestId("page-number-4"));
    fireEvent.click(screen.getByTestId("page-number-5"));
    fireEvent.click(screen.getByTestId("truncate-right"));
    fireEvent.click(screen.getByTestId("page-number-8"));
    fireEvent.click(screen.getByTestId("page-first"));
    fireEvent.click(screen.getByTestId("page-prev"));
    fireEvent.click(screen.getByTestId("page-next"));
    fireEvent.click(screen.getByTestId("page-last"));
    expect(setCurrentPage).toHaveBeenCalledTimes(10);
  });

  it("should not render left truncate when currentPage is 3", () => {
    render(<Pagination totalNoOfPages={8} currentPage={3} setCurrentPage={() => {}} />);

    expect(screen.queryAllByTestId("truncate-left")).toHaveLength(0);
    expect(screen.queryAllByTestId("truncate-right")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-1")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-2")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-3")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-4")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-5")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-6")).toHaveLength(0);
    expect(screen.queryAllByTestId("page-number-7")).toHaveLength(0);
    expect(screen.queryAllByTestId("page-number-8")).toHaveLength(1);
  });

  it("should render left truncate when currentPage is 4", () => {
    render(<Pagination totalNoOfPages={8} currentPage={4} setCurrentPage={() => {}} />);

    expect(screen.queryAllByTestId("truncate-left")).toHaveLength(1);
    expect(screen.queryAllByTestId("truncate-right")).toHaveLength(0);
    expect(screen.queryAllByTestId("page-number-1")).toHaveLength(0);
    expect(screen.queryAllByTestId("page-number-2")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-3")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-4")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-5")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-6")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-7")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-8")).toHaveLength(1);
  });

  it("should not render right truncate when currentPage is 6", () => {
    render(<Pagination totalNoOfPages={8} currentPage={6} setCurrentPage={() => {}} />);

    expect(screen.queryAllByTestId("truncate-left")).toHaveLength(1);
    expect(screen.queryAllByTestId("truncate-right")).toHaveLength(0);
    expect(screen.queryAllByTestId("page-number-1")).toHaveLength(0);
    expect(screen.queryAllByTestId("page-number-2")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-3")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-4")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-5")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-6")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-7")).toHaveLength(1);
    expect(screen.queryAllByTestId("page-number-8")).toHaveLength(1);
  });
});
