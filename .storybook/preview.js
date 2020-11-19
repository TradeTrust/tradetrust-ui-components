import React from "react";
import { addDecorator } from "@storybook/react";
import "./index.css";

addDecorator((storyFn) => <>{storyFn()}</>);
