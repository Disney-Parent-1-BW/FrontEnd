import React from 'react';
import {Menu} from 'antd';
import {
    UserOutlined,
    DashboardOutlined,
    createFromIconfontCN
  } from '@ant-design/icons';
import {NavLink as Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1672229_gigk651avl9.js',
  });

const Navbar = (props) => {
console.log(props.location);

    return (
            <StyledMenu selectedKeys={[props.location.pathname]} >
                <MenuItem key="/dashboard/my-account" style={{}}>
                <Link to='/dashboard/my-account'>
                    <UserOutlined />
                    <span>My Account</span>
                </Link>
                </MenuItem>
                
                <MenuItem key="/dashboard/dashboard" style={{}}>
                <Link to='/dashboard/dashboard'>
                    <DashboardOutlined />
                    <span>Dashboard</span>
                </Link>
                </MenuItem>
                <MenuItem key="/dashboard/requests" style={{}}>
                <Link to="/dashboard/requests">
                    <IconFont type="icon-Stroller" />
                    <span>Requests</span>
                </Link>
                </MenuItem>
            </StyledMenu>
    );
}

const MenuItem = styled(Menu.Item)`

    &.ant-menu-item-selected {
        a{
            color: rgb(125, 112, 254);
        }
    }

    &:first-child {
        margin-top: 0;
    }

    a{
        color: white;
        font-size: 24px;
        font-weight:200;
    }
`;

const StyledMenu = styled(Menu)`
    background: transparent;
    width: 100%;
    &.ant-menu:not(ant-menu-horizontal) .ant-menu-item-selected {
        background-color: white;
    }

    &.ant-menu:not(ant-menu-horizontal) .ant-menu-item {
        height: 59px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding-left: 25px;

        svg {
            width: 20px;
            height: auto;
        }
    }
`;

export default withRouter(props => <Navbar {...props}/>);