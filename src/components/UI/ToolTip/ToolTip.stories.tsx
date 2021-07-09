import React, { ReactElement } from "react";
import { ToolTip } from "./ToolTip";
import { HelpCircle } from "react-feather";

export default {
  title: "UI/ToolTip",
  component: ToolTip,
  parameters: {
    componentSubtitle: "Custom more Info icon component",
  },
};

export const Default = (): ReactElement => {
  return (
    <div className="mt-20">
      <ToolTip
        iconStyle="text-blue-500"
        toolTipText="testing testing testing testing testing testing testing testing testing testing testing"
      />
    </div>
  );
};

export const ResizeToolTip = (): ReactElement => {
  return (
    <div className="mt-20">
      <ToolTip
        iconStyle="text-blue-500 h-24 w-24"
        toolTipText="testing testing testing testing testing testing testing testing testing testing testing"
      />
    </div>
  );
};

export const ChangeToolTipStyle = (): ReactElement => {
  return (
    <div className="mt-20">
      <ToolTip
        iconStyle="text-blue-500"
        toolTipText="testing testing testing testing testing testing testing testing testing testing testing"
        toolTipStyle="text-red-400 rounded border-red-400 bg-yellow-100 text-lg"
      />
    </div>
  );
};

export const NoText = (): ReactElement => {
  return (
    <div className="mt-20">
      <ToolTip iconStyle="text-blue-500" />
    </div>
  );
};

export const ChangeIcon = (): ReactElement => {
  return (
    <div className="mt-20">
      <ToolTip
        iconStyle="text-yellow-500"
        toolTipText="testing testing testing testing testing testing testing testing testing testing testing"
      >
        <HelpCircle className="text-yellow-500" />
      </ToolTip>
    </div>
  );
};
