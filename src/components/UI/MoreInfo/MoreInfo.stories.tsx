import React, { ReactElement } from "react";
import { MoreInfo } from "./MoreInfo";
import { HelpCircle } from "react-feather";

export default {
  title: "UI/MoreInfo",
  component: MoreInfo,
  parameters: {
    componentSubtitle: "Custom more Info icon component",
  },
};

export const Default = (): ReactElement => {
  return (
    <MoreInfo
      className="text-blue-500"
      info="testing testing testing testing testing testing testing testing testing testing testing"
    />
  );
};

export const Resize = (): ReactElement => {
  return (
    <MoreInfo
      className="text-blue-500 h-24 w-24 p-4"
      info="testing testing testing testing testing testing testing testing testing testing testing"
    />
  );
};

export const ChangeInformationStyle = (): ReactElement => {
  return (
    <MoreInfo
      className="text-blue-500"
      info="testing testing testing testing testing testing testing testing testing testing testing"
      infoStyle="text-red-200"
    />
  );
};

export const NoInfo = (): ReactElement => {
  return <MoreInfo className="text-blue-500" />;
};

export const QuestionMarkIcon = (): ReactElement => {
  return (
    <MoreInfo
      className="text-yellow-500"
      info="testing testing testing testing testing testing testing testing testing testing testing"
    >
      <HelpCircle className="text-yellow-500" />
    </MoreInfo>
  );
};
