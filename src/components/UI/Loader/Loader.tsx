import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { mixin } from "../../../styles";

export interface LoaderProps {
  width?: string;
  className?: string;
  children?: React.ReactNode;
  primary?: string;
  secondary?: string;
}

export const Loader: FunctionComponent<LoaderProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const LoaderSpinner = styled(Loader)`
  ${(props) => mixin.loaderSpinner({ w: props.width, primary: props.primary, secondary: props.secondary })};
`;
