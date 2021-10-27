import { render, screen } from "@testing-library/react";
import React from "react";
import { ErrorPage } from "./ErrorPage";
import errorImage from "../../static/images/ErrorPage/error-boundary.png";

describe("errorPage", () => {
  it("should render correctly with the given title and description", () => {
    render(<ErrorPage pageTitle="Error" header="Oops!" description="Something went wrong" image={errorImage} />);

    expect(screen.getAllByText("Error")).toHaveLength(1);
    expect(screen.getAllByText("Oops!")).toHaveLength(1);
    expect(screen.getAllByText("Something went wrong")).toHaveLength(1);
  });
});
