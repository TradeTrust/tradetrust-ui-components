import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { mixin } from "../../../styles";
export interface InputProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  value?: string | number | string[];
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
}

export const Input: FunctionComponent<InputProps> = ({ className, errorMessage, ...props }) => {
  return (
    <div className={`${className} ${errorMessage ? "is-error" : ""}`}>
      <input type="text" {...props} />
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  );
};

export const InputDefault = styled(Input)`
  &.is-error {
    input {
      ${tw`border border-solid border-red`}
    }

    .message {
      ${tw`text-red`}
    }
  }

  input {
    ${mixin.baseStyleInput()};
    margin-bottom: 0;
  }

  .message {
    margin: 8px 0;
  }
`;

interface EditableAssetTitleProps {
  hasError?: boolean;
}

export const InputEditableAssetTitle = styled.input`
  ${mixin.baseStyleInput()};
  margin-bottom: 0;
  width: 100%;
  min-height: 40px;
  ${({ hasError }: EditableAssetTitleProps) => hasError && tw`border border-solid border-red`};
`;

export const InputEditableWrapper = styled.div`
  width: 288px;
`;

interface InputErrorProps {
  children: React.ReactNode;
}

export const InputError: FunctionComponent<InputErrorProps> = ({ children, ...props }: InputErrorProps) => (
  <div className="w-full text-sm mt-2 text-red" {...props}>
    {children}
  </div>
);
