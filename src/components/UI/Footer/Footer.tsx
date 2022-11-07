import React from "react";
import defaultTradeTrustLogo from "../../../static/images/tradetrust_logo.svg";
import { Bottom, Category, mapper } from "./helpers";
import { FooterColumnProps, FooterProps } from "./types";

const sharedColumnPadding = `px-0 lg:px-6 xl:px-8`;

const Logo = (props: Pick<FooterProps, "title" | "logoUrl">): React.ReactElement => {
  const { title, logoUrl } = props;

  return (
    <div className="w-full lg:w-auto mb-12 lg:mb-0">
      {title ? (
        <p className={"text-xl lg:text-3xl text-center lg:text-left font-gilroy-bold max-w-[142px]"}>{title}</p>
      ) : (
        <img className="max-w-[142px]" src={logoUrl || defaultTradeTrustLogo} />
      )}
    </div>
  );
};

const FooterColumn = (props: FooterColumnProps): React.ReactElement => {
  const { category, items } = props;
  return (
    <div className={`w-1/2 lg:w-auto mb-8 lg:mb-0 text-cloud-500 ${sharedColumnPadding}`}>
      <Category category={category} />
      {items.map(mapper)}
    </div>
  );
};

export const Footer = (props: FooterProps): React.ReactElement => {
  const { className = "", title = "", logoUrl = "", copyright, data } = props;
  const topData = data ? data.filter((data) => data.category.includes("Category")) : [];
  const bottomData = data ? data.filter((data) => data.category.includes("Bottom")) : [];

  return (
    <footer className={`bg-white no-print ${className}`}>
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap pb-3.5 lg:justify-between">
          <Logo title={title} logoUrl={logoUrl} />
          {topData ? (
            topData.map((columnData, index) => <FooterColumn key={`col-${index}`} {...columnData} />)
          ) : (
            <div className="flex-auto" />
          )}
        </div>
        <hr />
        <Bottom copyright={copyright} data={bottomData} />
      </div>
    </footer>
  );
};
