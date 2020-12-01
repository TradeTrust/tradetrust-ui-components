import React from "react";
import { addDecorator } from "@storybook/react";
import "./styles.css";

addDecorator((storyFn) => <>{storyFn()}</>);
