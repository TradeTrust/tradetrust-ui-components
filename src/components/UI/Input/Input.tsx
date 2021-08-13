import styled from "@emotion/styled";
import React, { FunctionComponent, InputHTMLAttributes } from "react";
import tw from "twin.macro";

const InputStyled = styled.input`
  &::placeholder {
    ${tw`text-cloud-200 text-base`}
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  errorMessage?: string;
}

export const Input: FunctionComponent<InputProps> = ({ className, hasError, errorMessage, ...props }) => {
  return (
    <div>
      <InputStyled
        className={`border rounded-md px-2 py-1 mb-0 focus:border-cloud-900 focus:outline-none ${
          className ? className : ""
        } ${hasError || errorMessage ? "border-rose" : "border-cloud-200"}`}
        {...props}
      />
      {errorMessage && <p className="text-rose my-2">{errorMessage}</p>}
    </div>
  );
};
