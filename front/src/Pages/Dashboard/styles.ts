import styled from "styled-components";

export const Header = styled.div`
  width: 1440px;
  height: 128px;
  border: 1px solid #c2c2c2;
  border-radius: 12px;
  margin: auto;
  border-radius: 12px 12px 0px 0px;
  display: flex;

  .iconArea {
    border-top-left-radius: 12px;
    width: 292px;
    height: inherit;
    background-color: #6e74f8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    strong {
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 38.73px;
    }
  }

  .headerInfo {
    width: 1157px;
    display: flex;
    justify-content: space-between;
    padding: 60px 20px 20px 20px;

    .IconsWrapper * {
      height: 37px;
      width: 37px;
      color: #5686e1;
      margin: 0px 12px 0px 12px;
      align-items: center;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 1440px;
  height: 1024px;
  border: 1px solid #c2c2c2;
  border-radius: 12px 0px 12px 0px;
  margin: auto;
  border-bottom-left-radius: 12px;
  p {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
  }

  .sideMenu {
    border-bottom-left-radius: inherit;
    width: 237px;
    height: auto;
    background-color: #6e74f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    color: #ffffff;

    .menuIcons {
      gap: 30px;
      display: flex;
      flex-direction: column;

      .iconWrapper {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        align-items: center;
        &:hover {
          cursor: pointer;
        }

        .icon {
          width: 66px;
          height: 36px;
        }
      }
    }

    .footerMenu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      .logoutButton {
        width: 48px;
        height: 48px;
      }
    }
  }
  .containerContent {
    padding: 38px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    width: 1125px;
    gap: 30px;

    .firstRow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .chartContainer {
        width: 772px;
        height: 494px;
        box-shadow: 0px 4px 4px 0px #00000040;
        border-radius: 12px;
        padding: 20px 20px 52px 20px;

        .chartHeader {
          display: flex;
          justify-content: space-between;
          .totalRaised {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-family: Roboto;
            font-weight: 500;

            .amountTitle {
              font-size: 24px;
              color: #a7a7a7;
            }
            .amountRaised {
              font-size: 20px;
              color: #000000;
            }
          }
          .chartDropDown {
          }
        }
      }
      .services {
        width: 287px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .secondRow {
      display: flex;
      justify-content: space-between;

      .servicesContainer {
        width: 748px;
        height: 274px;
        box-shadow: 0px 4px 4px 0px #00000040;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        padding: 32px;
        gap: 16px;

        .servicesRow {
          display: flex;
          justify-content: space-between;
        }

        strong {
        }

        .scheduleDetails {
        }
      }
    }
  }
`;

export const ItemWrapper = styled.div`
  width: 108px;
  height: 55px;
  background-color: #eeeeee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 11px;

  .title {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 600;
    line-height: 15.23px;
    margin: 0;
  }

  .amount {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.58px;
    margin: 0;
  }
`;

export const ScheduleItemContainer = styled.div`
  width: 100%;
  background-color: #eeeeee;
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr 1fr 1fr;
  border-radius: 10px;
  padding: 10px 40px 12px 10px;
  width: 696px;

  .scheduleItemColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-family: Roboto;
    font-weight: 500;

    .itemTitle {
      margin: 0;
      font-size: 15px;
      line-height: 17.58px;
      color: #7b7878;
    }

    .itemPrice {
      margin: 0;
      font-size: 13px;
      line-height: 15.23px;
      color: #000000;
    }
  }
`;
