import React, {useState, useEffect} from "react";
import { Layout } from "antd";
import Image from '../components/image';
import Navbar from '../components/navbar';

const {Sider, Content} = Layout;


const Dashboard = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {

    }, [collapsed])

    return(
        <>
            <Layout style={{background: '#fff', width: '300px'}}>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight: '100vh', background: '#7D70FE'}}>
                    <Image />
                    <Navbar />
                </Sider>
                <Content>
                    <main>{children}</main>
                </Content>
            </Layout>
        </>
    )
}

export default Dashboard;