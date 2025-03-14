import React from "react";
import {
  FooterColumnData,
  FooterColumnItemProps,
  legalDataProps,
} from "./types";

const defaultRender = ({
  label,
  to,
}: FooterColumnItemProps): React.ReactElement => {
  return (
    <a className="text-cloud-500" href={to}>
      {label}
    </a>
  );
};

export const mapper = (
  item: FooterColumnData,
  index: number
): React.ReactElement => {
  const { render = defaultRender } = item;
  return (
    <div key={`row-${index}`}>
      {render({ ...item })}
    </div>
  );
};

export const Bottom = ({
  legalData,
}: {
  legalData: legalDataProps;
}): React.ReactElement => {
  const { copyright, items } = legalData;

  return (
    <div className={"flex justify-center items-center pt-6 divide-x"}>
      {items.map(mapper)}
      {typeof copyright === 'string' ? (
        <p className={"text-cloud-500 text-sm px-4 flex items-center text-center"}>{copyright}</p>
      ) : (
        copyright
      )}
    </div>
  );
};

export const Category = ({
  category,
}: {
  category: string;
}): React.ReactElement => {
  return (
    <div className={"pb-4 font-gilroy-bold text-cloud-500"}>{category}</div>
  );
};
