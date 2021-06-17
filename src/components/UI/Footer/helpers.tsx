import React from "react";
import { FooterColumnItemProps } from "./types";

export const defaultRender = ({ label, to }: FooterColumnItemProps): React.ReactElement => {
  return <a href={to}>{label}</a>;
};

export const Bottom = ({ copyright }: { copyright: string }): React.ReactElement => {
  return (
    <div className={"flex justify-center items-center pt-5 pb-7"}>
      <p className={"text-cloud-500 text-sm"}>{copyright}</p>
    </div>
  );
};

export const Category = ({ category }: { category: string }): React.ReactElement => {
  return <div className={"pb-4 font-bold text-cloud-500"}>{category}</div>;
};
