import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { NetworkBar } from "./NetworkBar";

describe("networkBar", () => {
  it("should render NetworkBar according to network", () => {
    render(<NetworkBar network="local" />);
    expect(screen.queryByTestId("network-bar")).not.toBeNull();
    expect(screen.queryAllByText("local")).toHaveLength(1);
  });

  it("should dismiss network bar when x clicked", () => {
    render(<NetworkBar network="local" />);
    fireEvent.click(screen.getByTestId("network-bar-close"));
    expect(screen.queryByTestId("network-bar")).toBeNull();
  });
});
