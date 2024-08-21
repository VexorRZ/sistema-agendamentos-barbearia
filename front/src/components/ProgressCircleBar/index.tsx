import React from "react";
import { fixDigits } from "../../utils/formaters";

import { Circle, CircleContainer, Container } from "./styles";

interface ProgressCircleProps {
  progress: number;
  size: number;
  backgroundStrokeColor?: string;
  className?: string;
  fontSize?: number;
  hasBgCircle?: boolean;
  strokeColor?: string;
  strokeThickness?: number;
  title?: string;
  trackColor?: string;
}

const ProgressCircleBar = ({
  backgroundStrokeColor,
  className,
  fontSize,
  hasBgCircle,
  progress,
  size,
  strokeColor,
  strokeThickness,
  title,
}: ProgressCircleProps) => {
  const [totalLength, setTotalLength] = React.useState<number>(0);
  const circleRef = React.useRef<SVGCircleElement>(null);
  const calculate = (progress / 100) * totalLength;
  const currentProgress = totalLength - calculate;

  React.useEffect(() => {
    if (circleRef.current) {
      setTotalLength(Number(circleRef.current.getTotalLength().toFixed()));
    }
  }, [circleRef.current]);

  const showDecimals = Math.abs(progress) < 1 ? 2 : 0;

  return (
    <Container
      containerSize={size}
      data-test-id="circle-progress"
      className={className}
      font={fontSize}
    >
      <CircleContainer containerSize={size}>
        <Circle
          bgCircle={backgroundStrokeColor ? backgroundStrokeColor : "red"}
          ref={circleRef}
          cx={size}
          cy={size}
          r={size / 2}
          strokeWidth={strokeThickness}
          fill="transparent"
          length={totalLength}
          percent={0}
        />
        {hasBgCircle && (
          <Circle
            ref={circleRef}
            cx={size}
            cy={size}
            r={size / 2}
            strokeWidth={strokeThickness && strokeThickness * 2}
            bgCircle={"red"}
            fill="transparent"
            length={totalLength}
            percent={currentProgress}
          />
        )}
        <Circle
          ref={circleRef}
          cx={size}
          cy={size}
          r={size / 2}
          strokeWidth={strokeThickness}
          bgCircle={strokeColor}
          fill="transparent"
          length={totalLength}
          percent={currentProgress}
        />
      </CircleContainer>
      {title ? (
        <strong>{title}</strong>
      ) : (
        <strong>{fixDigits(Math.abs(progress), showDecimals)}%</strong>
      )}
    </Container>
  );
};

export default ProgressCircleBar;
