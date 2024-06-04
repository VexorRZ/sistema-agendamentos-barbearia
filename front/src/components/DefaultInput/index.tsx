import React from "react";

import { StylezedInput } from "./styles";

interface IInputProps {
  type: string;
  value: string;
  placeHolder?: string;
  width?: string;
  height?: string;
  name?: string;
  id?: string;
  customMarginTop?: string;
  customPadding?: string;
  children?: React.ReactNode;
  scheduleScreen?: boolean;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  type,
  value,
  placeHolder,
  width,
  height,
  name,
  id,
  customMarginTop,
  children,
  customPadding,
  scheduleScreen,
  onChange,
}: IInputProps) => {
  return (
    <StylezedInput
      height={height}
      width={width}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      name={name}
      id={id}
      customMarginTop={customMarginTop}
      customPadding={customPadding}
      scheduleScreen={scheduleScreen}
    >
      {children}
    </StylezedInput>
  );
};

export default CustomInput;
