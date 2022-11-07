import React from "react";
import { FooterColumnData, FooterColumnItemProps, FooterColumnProps } from "./types";

const defaultRender = ({ label, to }: FooterColumnItemProps): React.ReactElement => {
  return (
    <a className="text-cloud-500" href={to}>
      {label}
    </a>
  );
};

export const mapper = (item: FooterColumnData, index: number): React.ReactElement => {
  const { render = defaultRender } = item;
  return (
    <div key={`row-${index}`} className={"pb-3"}>
      {render({ ...item })}
    </div>
  );
};

export const Bottom = ({ copyright, data }: { copyright: string; data: FooterColumnProps[] }): React.ReactElement => {
  return (
    <div className={"flex justify-center items-center pt-6"}>
      {data.map((bottomData) => {
        return bottomData.items && bottomData.items.map(mapper);
      })}
      <p className={"text-cloud-500 text-sm px-4 pb-3"}>{copyright}</p>
    </div>
  );
};

export const Category = ({ category }: { category: string }): React.ReactElement => {
  return <div className={"pb-4 font-gilroy-bold text-cloud-500"}>{category}</div>;
};
