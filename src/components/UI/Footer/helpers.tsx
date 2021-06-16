import React from "react";
import { FooterColumnItemProps } from "./types";

export const defaultRender = ({ label, to }: FooterColumnItemProps): React.ReactElement => {
  return <a href={to}>{label}</a>;
};
