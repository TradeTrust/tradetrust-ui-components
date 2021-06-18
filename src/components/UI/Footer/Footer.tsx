import React from "react";
import { FooterColumnData, FooterColumnProps, FooterProps } from "./types";
import { defaultRender, Bottom, Category } from "./helpers";

const Left = (props: Pick<FooterProps, "title">): React.ReactElement => {
  const { title } = props;
  return (
    <div className={"w-full md:w-44 mb-12 md:mb-0"}>
      <p className={"text-xl md:text-3xl text-center md:text-left font-headings font-bold"}>{title}</p>
    </div>
  );
};

const mapper = (item: FooterColumnData, index: number): React.ReactElement => {
  const { render = defaultRender } = item;
  return (
    <div key={`row-${index}`} className={"pb-3"}>
      {render({ ...item })}
    </div>
  );
};
const FooterColumn = (props: FooterColumnProps): React.ReactElement => {
  const { category, items } = props;
  return (
    <div className={"w-1/2 md:w-auto px-0 md:px-3 lg:px-8 mb-8 md:mb-0"}>
      <Category category={category} />
      {items.map(mapper)}
    </div>
  );
};

export const Footer = (props: FooterProps): React.ReactElement => {
  const { className = "", title, copyright, data } = props;
  return (
    <footer className={`bg-white py-6 no-print container ${className}`}>
      <div className="flex flex-wrap md:flex-nowrap pb-3.5 md:justify-between">
        <Left title={title} />
        {data ? (
          data.map((columnData, index) => <FooterColumn key={`col-${index}`} {...columnData} />)
        ) : (
          <div className="flex-auto" />
        )}
        <div className={"hidden md:block md:w-44"} />
      </div>
      <hr />
      <Bottom copyright={copyright} />
    </footer>
  );
};
