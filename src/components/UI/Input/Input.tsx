import styled from "@emotion/styled";
import React, { FunctionComponent, InputHTMLAttributes } from "react";
import tw from "twin.macro";

const InputStyled = styled.input`
  &::placeholder {
    ${tw`text-gray-500 text-base`}
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
        className={`w-full border px-2 py-1 mb-0 ${className ? className : ""} ${
          hasError || errorMessage ? "border-rose-400" : "border-gray-300"
        }`}
        {...props}
      />
      {errorMessage && <p className="text-rose-400 my-2">{errorMessage}</p>}
    </>
  );
};
