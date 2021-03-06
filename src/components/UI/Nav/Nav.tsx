import React, { FunctionComponent } from "react";
import { ArrowLeft } from "react-feather";

export const BackArrow: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <ArrowLeft />
    <span>Back</span>
  </div>
);

export interface TileInfoProps {
  title: string;
  description: string;
}

export const TileInfo: FunctionComponent<TileInfoProps> = ({ title, description }) => (
  <div className="p-4 w-full max-w-lg bg-white shadow-md inline-block mb-2 transition-colors duration-200 hover:bg-gray-50">
    <h4 className="text-cerulean-500">{title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);
