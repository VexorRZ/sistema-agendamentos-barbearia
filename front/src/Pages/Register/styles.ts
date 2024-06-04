import styled, { css } from "styled-components";

interface IContainerProps {
  width?: string;
  backgroundImage?: string;
  gap?: string;
  display?: string;
  justifyCOntent?: string;
  aligItems?: string;
  flexDirection?: string;
  leftSubContainer?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SubArea = styled.div<IContainerProps>`
  height: 100%;
  width: ${(props) => props.width};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  gap: ${(props) => props.gap};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyCOntent};
  align-items: ${(props) => props.aligItems};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
`;

export const ContentWrapper = styled.div<IContainerProps>`
  gap: ${(props) => props.gap ?? "6px"};
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.leftSubContainer &&
    css`
      margin: 64px 208px 60px 103px;
      justify-content: space-between;
      height: 100%;
    `};
`;

export const ErrorMessage = styled.h4`
  color: red;
  font-weight: bold;
  margin: 0;
`;

export const Title = styled.p`
  margin: 0;
  width: 211px;
  height: 39px;
  top: 247px;
  left: 830px;
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  text-align: left;
`;

export const BottomText = styled.p`
  margin: 0;
  margin-left: 46px;
  width: 353px;
  height: 156px;
  top: 804px;
  left: 149px;
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  text-align: left;
  color: #f9f9ff;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    text-align: left;
    color: #f9f9ff;
  }
`;
