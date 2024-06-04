import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 1024px;
  border: 1px solid #c2c2c2;
  border-radius: 12px;
  margin: auto;

  &:before {
    content: "";
    position: absolute;
    flex: 1;
    background: #6e74f8;
    width: 57px;
    height: inherit;
    border-radius: 12px 0px 0px 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    margin: 0;
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    color: #8585b0;
  }
`;

export const ErrorMessage = styled.h4`
  color: red;
  font-weight: bold;
  margin: 0;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 85px;
  margin-bottom: 98px;
`;

export const InputsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InputTitle = styled.h6`
  margin: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Values = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 0;
    font-family: Inter;
  }
`;

export const TotalValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 23px;
  height: 22px;
  border-radius: 7px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin-top: 32px;

  strong {
    font-family: Inter;
    font-size: 32px;
    font-weight: 300;
    line-height: 38.73px;
  }

  h3 {
    margin: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
