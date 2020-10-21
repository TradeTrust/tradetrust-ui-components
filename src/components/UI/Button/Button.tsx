import styled from "@emotion/styled";
import { mixin, vars } from "../../../styles";
import "../../../index.css";

export const Button = styled.button`
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.2), 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  display: inline-block;
  vertical-align: middle;
  letter-spacing: 0;
  outline: 2px solid transparent;
  outline-offset: 2px;
  ${mixin.fontRobotoBold()}
  ${mixin.fontSize(18)}
  min-height: 40px;

  &:not(:disabled):not(.disabled):active,
  &:focus,
  &.focus,
  &:hover,
  &:active,
  &.active {
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.2), 2px 2px 5px rgba(0, 0, 0, 0.4);
  }

  &[disabled] {
    pointer-events: none;
    box-shadow: none;
    color: ${vars.greyLighter};
    background-color: ${vars.lightgreyLighter};
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
