import React from 'react';
import {Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import Image from '../components/image';

const Navbar = () => {


    return (
            <Menu style={{background: 'transparent', color: 'white'}}>
                <Menu.Item key="1" style={{}}>
                    <UserOutlined />
                    <span>My Account</span>
                </Menu.Item>
            </Menu>
    );
}

export default Navbar;