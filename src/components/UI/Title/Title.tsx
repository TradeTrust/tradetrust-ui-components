import styled from "@emotion/styled";
import { mixin, vars } from "../../../styles";
import "../../../index.css";

export const Title = styled.h1`
  ${mixin.fontRobotoBold}
  ${mixin.fontSize(28)}
  color: ${vars.greyDark};
`;
