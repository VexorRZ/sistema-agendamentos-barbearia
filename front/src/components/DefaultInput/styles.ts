/* eslint-disable @typescript-eslint/member-delimiter-style */
import styled, { css } from "styled-components";

interface ICustomInput {
  customBackgroundColor?: string;
  customColor?: string;
  customBorderColor?: string;
  width?: string;
  height?: string;
  customMarginTop?: string;
  customPadding?: string;
  scheduleScreen?: boolean;
  borderRadius?: string;
}

export const StylezedInput = styled.input<ICustomInput>`
  padding: ${(props) => (props.customPadding ? props.customPadding : "0px")};
  width: ${(props) => props.width ?? "458px"};
  height: ${(props) => props.height ?? "44px"};
  border: ${(props) => (props.scheduleScreen ? "none" : "1px solid #3e5b5b")};
  border-radius: ${(props) => props.borderRadius ?? "5px"};
  background-color: ${(props) => (props.scheduleScreen ? " #EEEEEE" : "none")};
  top: 306px;
  left: 830px;
`;
