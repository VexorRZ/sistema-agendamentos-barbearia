/* eslint-disable @typescript-eslint/member-delimiter-style */
import styled from "styled-components";

interface ICustomButton {
  customBackgroundColor?: string;
  customColor?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  opacity?: number;
  customBorder?: string;
  fontFamily?: string;
}

export const ButtonStyles = styled.button<ICustomButton>`
  width: ${(props) => props.width ?? "480px"};
  height: ${(props) => props.height ?? "60px"};
  gap: 10px;
  border-radius: 5px;
  opacity: 0px;
  background-color: ${(props) => props.customBackgroundColor};
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  letter-spacing: 0.1em;
  text-align: center;
  color: ${(props) => props.customColor};
  padding: 0;
  box-shadow: 0px 4px 4px 0px #00000040;

  &:hover {
    cursor: pointer;
  }
`;
