import React from "react";
import { MobileFooter } from "./";
import { FooterColumnItemProps } from "./types";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "UI/MobileFooter",
  component: MobileFooter,
  parameters: {
    componentSubtitle: "Mobile Footer component",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
};

const render = ({ label }: FooterColumnItemProps): React.ReactElement => <div>{label}</div>;
const renderSomethingElse = ({ to }: FooterColumnItemProps): React.ReactElement => <div>{to}</div>;
const renderSpecial = ({ someOther }: FooterColumnItemProps): React.ReactElement => <div>{someOther}</div>;
const data = [
  {
    category: "Category A",
    items: [
      { label: "sdfsdf", to: "somewhe", render: renderSpecial, someOther: "A-1" },
      { label: "A-2", to: "https://google.com" },
      { label: "A-3", to: "somewhere", render },
    ],
  },
  {
    category: "Category B",
    items: [
      { label: "label", to: "B-1", render: renderSomethingElse },
      { label: "B-2", to: "somewhere", render },
    ],
  },
  {
    category: "Category C",
    items: [
      { label: "C-1", to: "somewhere", render },
      { label: "label", to: "C-2", render: renderSomethingElse },
      { label: "C-3", to: "somewhere", render },
      { label: "label", to: "C-4", render: renderSomethingElse },
    ],
  },
  {
    category: "Category D",
    items: [
      { label: "D-1", to: "somewhere", render },
      { label: "D-2", to: "somewhere", render },
      { label: "D-3", to: "somewhere", render },
    ],
  },
  {
    category: "Category E",
    items: [{ label: "E-1", to: "somewhere", render }],
  },
];

export const Default: React.FunctionComponent = () => {
  return <MobileFooter title={"Title"} copyright={"Copyright \u00A9 2020"} data={data} />;
};
