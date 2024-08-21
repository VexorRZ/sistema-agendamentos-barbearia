import styled from "styled-components";

interface CircleProps {
  length: number;
  percent: number;
  bgCircle?: string;
  strokeWidth?: number;
}

interface ContainerProps {
  containerSize: number;
  font?: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${({ containerSize }) => `${containerSize}px`};
  height: ${({ containerSize }) => `${containerSize}px`};
  font-family: Inter;
  strong {
    position: absolute;
    left: 50%;
    top: 50%;
    font-family: "Inter";
    transform: translate(-50%, -50%);
    font-size: ${({ font }) => (font ? `${font}px` : "14px")};
  }
`;

export const CircleContainer = styled.svg<ContainerProps>`
  width: ${({ containerSize }) => `${containerSize * 2}px`};
  height: ${({ containerSize }) => `${containerSize * 2}px`};
  margin: ${({ containerSize }) => `-${containerSize / 2}px`};
  transform: rotate(270deg);
`;

export const Circle = styled.circle<CircleProps>`
  stroke-dasharray: ${({ length }) => length};
  stroke-dashoffset: ${({ percent }) => percent};
  stroke-width: ${({ strokeWidth }) => (strokeWidth ? strokeWidth : 4)};
  stroke-linecap: round;
  stroke: ${({ bgCircle }) => bgCircle};
`;
