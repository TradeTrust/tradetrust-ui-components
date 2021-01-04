import React, { FunctionComponent } from "react";
import { ArrowLeft } from "react-feather";

export const NavBack: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <ArrowLeft />
    <span>Back</span>
  </div>
);

export interface NavForwardProps {
  title: string;
  description: string;
}

export const NavForward: FunctionComponent<NavForwardProps> = ({ title, description }) => (
  <div className="p-4 w-full max-w-lg bg-white shadow-md inline-block mb-2 transition-colors duration-200 hover:bg-grey-100">
    <h4 className="text-blue">{title}</h4>
    <p className="text-grey-700">{description}</p>
  </div>
);
