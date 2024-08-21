import React from "react";
import ProgressCircleBar from "../../components/ProgressCircleBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentsIcon from "@mui/icons-material/Payments";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import icon1 from "../../assets/icons/ic1.svg";

import {
  Container,
  Header,
  ItemWrapper,
  ScheduleItemContainer,
} from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header>
        <div className="iconArea">
          <strong>Home</strong>
        </div>
        <div className="headerInfo">
          <h3>Bem vindo Carlos</h3>
          <div className="IconsWrapper">
            <ChatIcon />
            <NotificationsIcon />
          </div>
        </div>
      </Header>
      <Container>
        <div className="sideMenu">
          <div className="menuIcons">
            <div className="iconWrapper">
              <DashboardIcon className="icon" /> <p>Dashboard</p>
            </div>

            <div className="iconWrapper">
              <PaymentsIcon className="icon" /> <p>Pagamentos</p>
            </div>

            <div className="iconWrapper">
              <ContactSupportIcon className="icon" /> <p>Suporte</p>
            </div>

            <div className="iconWrapper">
              <AccountBoxIcon className="icon" /> <p>Minha Conta</p>
            </div>
            <div className="iconWrapper">
              <GroupIcon className="icon" />
              <p>Usuários</p>
            </div>
          </div>

          <footer className="footerMenu">
            <LogoutIcon className="logoutButton" /> <p>Sair</p>
          </footer>
        </div>
        <div className="containerContent">
          <div className="firstRow">
            <div className="chartContainer">
              <div className="chartHeader">
                <div className="totalRaised">
                  <strong className="amountTitle">Total Arrecadado</strong>
                  <strong className="amountRaised">$456465465</strong>
                </div>
                <div className="chartDropDown">dropdown</div>
              </div>
            </div>

            <div className="services">
              <ProgressCircleBar progress={20} size={130} />
            </div>
          </div>
          <div className="secondRow">
            <div className="servicesContainer">
              <div className="servicesRow">
                <ItemWrapper>
                  <p className="title">total visits</p>
                  <p className="amount">10.8m</p>
                </ItemWrapper>
                <ItemWrapper>
                  <p className="title">total visits</p>
                  <p className="amount">10.8m</p>
                </ItemWrapper>
                <ItemWrapper>
                  <p className="title">total visits</p>
                  <p className="amount">10.8m</p>
                </ItemWrapper>
                <ItemWrapper>
                  <p className="title">total visits</p>
                  <p className="amount">10.8m</p>
                </ItemWrapper>
              </div>
              <strong>Agenda hoje</strong>
              <ScheduleItemContainer>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
              </ScheduleItemContainer>
              <ScheduleItemContainer>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
                <div className="scheduleItemColumn">
                  <p className="itemTitle">Item</p>
                  <p className="itemPrice">$200</p>
                </div>
              </ScheduleItemContainer>
            </div>
            <div className="scheduleStatus"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
