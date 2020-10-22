import { Counter } from "./Counter";
import React, { FunctionComponent } from "react";
import { object } from "@storybook/addon-knobs";

export default {
  title: "Counter",
  component: Counter,
  parameters: {
    info: { inline: true, header: false },
  },
};

export const Basic: FunctionComponent = () => {
  return <Counter />;
};

export const WithInitialValue: FunctionComponent = () => {
  return <Counter initialValue={object("initialValue", 10)} />;
};
