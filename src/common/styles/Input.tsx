import css, { SerializedStyles } from "@emotion/css";
import tw from "twin.macro";
import { fontSize } from "./shared";

export const StyledInput = (): SerializedStyles => {
  return css`
    ${tw`border border-solid border-grey-300`}
    padding: 5px 10px;
    margin-bottom: 10px;

    &[type="text"],
    &[type="email"] {
      width: 100%;
    }

    &::placeholder {
      ${tw`italic text-grey-500`}
      ${fontSize(16)}
    }
  `;
};
