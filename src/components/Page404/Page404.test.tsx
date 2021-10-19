import { render, screen } from "@testing-library/react";
import React from "react";
import { Page404 } from "./Page404";

describe("Page404", () => {
  it("should render correctly", () => {
    render(<Page404 />);

    expect(screen.getAllByText("Error 404")).toHaveLength(1);
    expect(screen.getAllByText("Oops!")).toHaveLength(1);
    expect(screen.getAllByText("The page you are trying to reach doesn't seem to exist.")).toHaveLength(1);
  });
});
