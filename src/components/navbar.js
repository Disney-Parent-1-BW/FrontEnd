import React from 'react';
import {Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DashboardOutlined,
    createFromIconfontCN
  } from '@ant-design/icons';
import Image from '../components/image';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1672229_gigk651avl9.js',
  });

const Navbar = () => {


    return (
            <Menu style={{background: 'transparent', color: 'white'}}>
                <Menu.Item key="1" style={{}}>
                    <UserOutlined />
                    <span>My Account</span>
                </Menu.Item>
                <Menu.Item key="2" style={{}}>
                    <DashboardOutlined />
                    <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item key="3" style={{}}>
                    <IconFont type="icon-Stroller" />
                    <span>Requests</span>
                </Menu.Item>
            </Menu>
    );
}

export default Navbar;