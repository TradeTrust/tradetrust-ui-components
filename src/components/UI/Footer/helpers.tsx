import React from "react";
import { FooterColumnItemProps } from "./types";

export const defaultRender = ({ label, to }: FooterColumnItemProps) => {
  return <a href={to}>{label}</a>;
};
