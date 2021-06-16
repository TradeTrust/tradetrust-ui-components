import React from "react";
import { FooterColumnData, FooterColumnProps, FooterProps } from "./types";
import { chunk } from "lodash";
import { defaultRender, Bottom, Category } from "./helpers";

const Top = (props: Pick<FooterProps, "title">): React.ReactElement => {
  const { title } = props;
  return (
    <div className={"flex justify-center items-center pb-12"}>
      <p className={"text-xl"}>{title}</p>
    </div>
  );
};

const mapper = (item: FooterColumnData, index: number): React.ReactElement => {
  const { render = defaultRender } = item;
  return <React.Fragment key={`row-${index}`}>{render({ ...item })}</React.Fragment>;
};
const MobileFooterColumn = (props: FooterColumnProps): React.ReactElement => {
  const { category, items } = props;
  return (
    <div className="flex flex-auto flex-col pb-7">
      <Category category={category} />
      {items.map(mapper)}
    </div>
  );
};

const CHUNK_SIZE = 2;
const chunkMapper = (chunk: FooterColumnProps[], i: number): React.ReactElement => {
  return (
    <div className={"flex"} key={i}>
      {chunk.map((columnData, index) => (
        <MobileFooterColumn key={`chunk-${index}-${columnData.category}`} {...columnData} />
      ))}
    </div>
  );
};

export const MobileFooter = (props: FooterProps): React.ReactElement => {
  const { className = "", title, copyright, data } = props;
  const [chunks, setChunks] = React.useState<FooterColumnProps[][]>([[]]);

  React.useEffect(() => {
    setChunks(chunk(data, CHUNK_SIZE));
  }, [data]);
  return (
    <footer className={`bg-white py-7 md:hidden ${className}`}>
      <div className="flex flex-col px-7">
        <Top title={title} />
        {chunks.map(chunkMapper)}
      </div>
      <hr />
      <Bottom copyright={copyright} />
    </footer>
  );
};
