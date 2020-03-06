import React, {useState} from "react"
import PropTypes from "prop-types"
import {Route} from 'react-router-dom';
import { Layout } from "antd"
import styled from 'styled-components';
import Image from '../images/9 1_family.png';
import Navbar from '../components/navbar';
import MyAccount from '../pages/my-account';
import Requests from '../pages/requests';
import ManageKids from '../pages/manage-kids';
import "./layout.css"

const {Sider, Content} = Layout;

const Dash = styled.div`
    display: flex;
  `;


const LayoutComponent = ({  }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Dash>
      <Sider
        width="210px"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh", background: "#7D70FE" }}
      >
        <div style={{height: '42px', background: '#F83E49'}} ></div>
        <img style={{maxWidth: '100%'}} src={Image} />
        <Navbar />
      </Sider>
      <Content>
        <Route path='/dashboard/my-account'>
          <MyAccount />
        </Route>
        <Route path='/dashboard/dashboard'>
          <h1>Dashboard</h1>
        </Route>
        <Route path='/dashboard/requests'>
          <Requests />
        </Route>
        <Route path='/dashboard/manage-kids'>
          <ManageKids />
        </Route>
      </Content>
    </Dash>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
