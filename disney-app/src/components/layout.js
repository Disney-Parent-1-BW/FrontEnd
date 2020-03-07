import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import Image from "../images/9 1_family.png";
import Navbar from "../components/navbar";
import MyAccount from "../pages/my-account";
import Requests from "../pages/requests";
import ManageKids from "../pages/manage-kids";
import AddKids from "../pages/add-kids";
import AddRequest from "../pages/add-request";
import "./layout.css";

const { Sider, Content } = Layout;

const Dash = styled.div`
  display: flex;
`;

const LayoutComponent = ({}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Dash>
      <Sider
        width="240px"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh", background: "#7D70FE" }}
      >
        <div style={{ height: "42px", background: "#F83E49" }}></div>
        <ImageWrapper>
          <img
            style={{
              maxWidth: "100%",
              marginBottom: "8px",
              background: "white"
            }}
            src={Image}
          />
        </ImageWrapper>
        <Navbar />
      </Sider>
      <Content>
        <Route path="/dashboard/my-account">
          <MyAccount />
        </Route>
        <Route path="/dashboard/dashboard">
          <h1>Dashboard</h1>
        </Route>
        <Route path="/dashboard/requests">
          <Requests />
        </Route>
        <Route path="/dashboard/manage-kids">
          <ManageKids />
        </Route>
        <Route path="/dashboard/add-kids">
          <AddKids />
        </Route>
        <Route path="/dashboard/add-request">
          <AddRequest />
        </Route>
      </Content>
    </Dash>
  );
};

const ImageWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;

  img {
    height: 138px;
    width: 154px;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutComponent;
