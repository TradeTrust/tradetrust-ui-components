import React from "react";
import { Footer } from "./";
import { FooterColumnItemProps } from "./types";

export default {
  title: "UI/Footer",
  component: Footer,
  parameters: {
    componentSubtitle: "Footer",
  },
};

const render = ({ label }: FooterColumnItemProps): React.ReactElement => <div>{label}</div>;
const renderSomethingElse = ({ to }: FooterColumnItemProps): React.ReactElement => <div>{to}</div>;
const renderSpecial = ({ someOther }: FooterColumnItemProps): React.ReactElement => <div>{someOther}</div>;
const data = [
  [
    { label: "sdfsdf", to: "somewhe", render: renderSpecial, someOther: "1-1" },
    { label: "2-1", to: "https://google.com" },
    { label: "3-1", to: "somewhere" },
  ],
  [
    { label: "label", to: "1-2", render: renderSomethingElse },
    { label: "2-2", to: "somewhere", render },
  ],
  [
    { label: "1-3", to: "somewhere", render },
    { label: "label", to: "2-3", render: renderSomethingElse },
    { label: "3-3", to: "somewhere", render },
    { label: "label", to: "4-3", render: renderSomethingElse },
  ],
  [{ label: "1-4", to: "somewhere", render }],
];

export const Default: React.FunctionComponent = () => {
  return <Footer title={"Title"} copyright={"Copyright \u00A9 2020"} data={data} />;
};
