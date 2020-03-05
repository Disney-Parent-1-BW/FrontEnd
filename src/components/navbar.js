import React from 'react';
import {Menu} from 'antd';
import {
    UserOutlined,
    DashboardOutlined,
    createFromIconfontCN
  } from '@ant-design/icons';
import Image from '../components/image';
import {Link} from 'gatsby';


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1672229_gigk651avl9.js',
  });

const Navbar = () => {


    return (
            <Menu style={{background: 'transparent', color: 'white'}}>
                <Menu.Item key="1" style={{}}>
                <Link to='/my-account'>
                    <UserOutlined />
                    <span>My Account</span>
                </Link>
                </Menu.Item>
                
                <Menu.Item key="2" style={{}}>
                <Link to='/dashboard'>
                    <DashboardOutlined />
                    <span>Dashboard</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="3" style={{}}>
                <Link to="/requests">
                    <IconFont type="icon-Stroller" />
                    <span>Requests</span>
                </Link>
                </Menu.Item>
            </Menu>
    );
}

export default Navbar;