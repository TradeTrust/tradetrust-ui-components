import { render } from "@testing-library/react";
import React from "react";
import { Footer } from "./Footer";
import { FooterColumnItemProps } from "./types";

const renderLabel = ({ label }: FooterColumnItemProps) => <div>{label}</div>;
const renderSomethingElse = ({ to }: FooterColumnItemProps) => <div>{to}</div>;
const renderSpecial = ({ someOther }: FooterColumnItemProps) => <div>{someOther}</div>;
const defaultProps = {
  title: "title",
  copyright: "copyright",
};
describe("footer component", () => {
  it("should render the title and copyright if data is null", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    expect(getByText("title")).toBeInTheDocument();
    expect(getByText("copyright")).toBeInTheDocument();
  });
  it("should render a column of data if an array of array are passed in", () => {
    const data = [
      [
        { label: "sdfsdf", to: "somewhe", render: renderSpecial, someOther: "1-1" },
        { label: "2-1", to: "https://google.com" },
        { label: "3-1", to: "somewhere", render: renderLabel },
        { label: "lala", to: "4-1", render: renderSomethingElse },
      ],
    ];
    const { getByText } = render(<Footer {...defaultProps} data={data} />);
    expect(getByText("1-1")).toBeInTheDocument();
    expect(getByText("2-1")).toBeInTheDocument();
    expect(getByText("3-1")).toBeInTheDocument();
    expect(getByText("4-1")).toBeInTheDocument();
  });
  it("should render columns of data if an array of array are passed in", () => {
    const data = [
      [
        { label: "sdfsdf", to: "somewhe", render: renderSpecial, someOther: "1-1" },
        { label: "2-1", to: "https://google.com" },
        { label: "3-1", to: "somewhere", render: renderLabel },
        { label: "lala", to: "4-1", render: renderSomethingElse },
      ],
      [
        { label: "label", to: "1-2", render: renderSomethingElse },
        { label: "2-2", to: "somewhere", render: renderLabel },
      ],
    ];
    const { getByText } = render(<Footer {...defaultProps} data={data} />);
    expect(getByText("1-2")).toBeInTheDocument();
    expect(getByText("2-2")).toBeInTheDocument();
  });
});
