import { render, screen } from "@testing-library/react";
import React from "react";
import { ErrorStatusPage } from "./ErrorStatusPage";

describe("errorStatusPage", () => {
  it("should render correctly with the given title and description", () => {
    render(<ErrorStatusPage statusCode={404} />);

    expect(screen.getAllByText("Error")).toHaveLength(1);
    expect(screen.getAllByText("Something went wrong")).toHaveLength(1);
  });
});
