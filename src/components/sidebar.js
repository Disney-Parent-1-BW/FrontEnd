import React from 'react';
import {
    UserOutlined,
    DashboardOutlined,
    createFromIconfontCN
  } from '@ant-design/icons';
  import {Router} from '@reach/router';


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1672229_gigk651avl9.js',
  });

const Sidebar = () => {


    return (
            <Menu style={{background: 'transparent', color: 'white'}}>
                <Link to='/my-account'>
                    <UserOutlined />
                    <span>My Account</span>
                </Link>
                
                <Link to='/dashboard'>
                    <DashboardOutlined />
                    <span>Dashboard</span>
                </Link>
                <Link to="/requests">
                    <IconFont type="icon-Stroller" />
                    <span>Requests</span>
                </Link>
            </Menu>
    );
}

const Menu = styled.div`

`;

export default Sidebar;