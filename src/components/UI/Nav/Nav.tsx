import React, { FunctionComponent, SVGProps } from "react";
import { ChevronLeft } from "react-feather";

export const BackArrow: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <ChevronLeft className="text-cloud-900" />
    <h5 className="text-cloud-900">Back</h5>
  </div>
);

export interface TileInfoProps {
  title: string;
  description: string;
  tileIcon: React.ReactElement;
}

export const TileInfo: FunctionComponent<TileInfoProps> = ({ title, description, tileIcon }) => (
  <div className="flex p-3 w-96 h-28 font-normal rounded-xl max-w-lg bg-white shadow-xl inline-block transition-colors duration-200 hover:bg-gray-50">
    <div className="flex flex-col w-10/12">
      <h3 className="font-ubuntu font-normal text-2xl text-cerulean-200">{title}</h3>
      <p className="text-cloud-900 mt-1">{description}</p>
    </div>
    <div className="w-2/12 m-auto">{tileIcon}</div>
  </div>
);
