import styled from "@emotion/styled";
import React, { FunctionComponent, InputHTMLAttributes } from "react";
import tw from "twin.macro";
import { fontSize } from "./../../../common/styles/shared";

const InputStyled = styled.input`
  min-height: 40px;

  &::placeholder {
    ${tw`italic text-gray-500`}
    ${fontSize(16)}
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  errorMessage?: string;
}

export const Input: FunctionComponent<InputProps> = ({ className, hasError, errorMessage, ...props }) => {
  return (
    <>
      <InputStyled
        className={`w-full border border-solid px-2 py-1 mb-0 ${className ? className : ""} ${
          hasError || errorMessage ? "border-error-400" : "border-gray-300"
        }`}
        {...props}
      />
      {errorMessage && <p className="text-error-400 my-2">{errorMessage}</p>}
    </>
  );
};
