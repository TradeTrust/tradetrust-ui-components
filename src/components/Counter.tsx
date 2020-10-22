import React, { useState, FunctionComponent } from "react";
import styled from "@emotion/styled";
import { getLogger } from "../logger";
const { trace } = getLogger("Counter");
import "../index.css";
import tw from "twin.macro";

export interface CounterProps {
  /** Initial counter value */
  initialValue?: number;
}

const StyledButton = styled.button`
  ${tw`text-xl`}
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  cursor: pointer;
  margin: 1px;
`;
/**
 * Use `Counter` to embed a simple counter into your awesome application. It provides 2 buttons to increment / decrement counter value as well as an initial optional value.
 */
export const Counter: FunctionComponent<CounterProps> = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);
  return (
    <div css={{ textAlign: "center" }}>
      <h1>Counter: {counter}</h1>
      <StyledButton
        onClick={() => {
          trace("Increment the counter by 1");
          setCounter((counter) => counter + 1);
        }}
      >
        Increment
      </StyledButton>
      <StyledButton
        onClick={() => {
          trace("Decrement the counter by 1");
          setCounter((counter) => counter - 1);
        }}
      >
        Decrement
      </StyledButton>
      <div className="text-pink text-xl">Tailwindcss</div>
    </div>
  );
};
