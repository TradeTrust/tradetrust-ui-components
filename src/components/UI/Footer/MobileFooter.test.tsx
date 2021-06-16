import { render } from "@testing-library/react";
import React from "react";
import { MobileFooter } from "./MobileFooter";
import { FooterColumnItemProps } from "./types";

const renderLabel = ({ label }: FooterColumnItemProps) => <div>{label}</div>;
const renderSomethingElse = ({ to }: FooterColumnItemProps) => <div>{to}</div>;
const renderSpecial = ({ someOther }: FooterColumnItemProps) => <div>{someOther}</div>;
const defaultProps = {
  title: "title",
  copyright: "copyright",
};
describe("MobileFooter component", () => {
  it("should render the title and copyright if data is null", () => {
    const { getByText } = render(<MobileFooter {...defaultProps} />);
    expect(getByText("title")).toBeInTheDocument();
    expect(getByText("copyright")).toBeInTheDocument();
  });
  it("should render a grid of data if an array of single category is passed in", () => {
    const data = [
      {
        category: "Category A",
        items: [
          { label: "sdfsdf", to: "somewhe", render: renderSpecial, someOther: "A-1" },
          { label: "A-2", to: "https://google.com" },
          { label: "A-3", to: "somewhere", render: renderLabel },
        ],
      },
    ];
    const { getByText, getByRole } = render(<MobileFooter {...defaultProps} data={data} />);
    expect(getByText("Category A")).toBeInTheDocument();
    expect(getByText("A-1")).toBeInTheDocument();
    expect(getByText("A-2")).toBeInTheDocument();
    expect(getByRole("link")).toHaveAttribute("href", "https://google.com");
    expect(getByText("A-3")).toBeInTheDocument();
  });
  it("should render a grid of data if an array of categories are passed in", () => {
    const data = [
      {
        category: "Category A",
        items: [
          { label: "sdfsdf", to: "somewhe", render: renderSpecial, someOther: "A-1" },
          { label: "A-2", to: "https://google.com" },
          { label: "A-3", to: "somewhere", render: renderLabel },
        ],
      },
      {
        category: "Category B",
        items: [
          { label: "label", to: "B-1", render: renderSomethingElse },
          { label: "B-2", to: "somewhere", render: renderLabel },
        ],
      },
    ];
    const { getByText } = render(<MobileFooter {...defaultProps} data={data} />);
    expect(getByText("Category B")).toBeInTheDocument();
    expect(getByText("A-2")).toBeInTheDocument();
    expect(getByText("B-1")).toBeInTheDocument();
    expect(getByText("B-2")).toBeInTheDocument();
  });
});
