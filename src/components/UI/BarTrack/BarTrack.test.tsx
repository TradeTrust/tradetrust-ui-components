import { render, screen } from "@testing-library/react";
import React from "react";
import { BarTrack } from "./BarTrack";

describe("BarTrack", () => {
  it("should display progress at start correctly", () => {
    render(<BarTrack progress={0} />);
    expect(screen.getByTestId("bar-progress")).toHaveStyle("width: 0%");
  });

  it("should display progress at midway correctly", () => {
    render(<BarTrack progress={0.5} />);
    expect(screen.getByTestId("bar-progress")).toHaveStyle("width: 50%");
  });

  it("should display progress at completed correctly", () => {
    render(<BarTrack progress={1} />);
    expect(screen.getByTestId("bar-progress")).toHaveStyle("width: 100%");
  });

  it("should display progress rounded down correctly", () => {
    render(<BarTrack progress={0.234} />);
    expect(screen.getByTestId("bar-progress")).toHaveStyle("width: 23%");
  });

  it("should display progress rounded up correctly", () => {
    render(<BarTrack progress={0.235} />);
    expect(screen.getByTestId("bar-progress")).toHaveStyle("width: 24%");
  });
});
