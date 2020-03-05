import React from 'react';
import DashboardHeader from '../components/dashboard-header';
import AccountTable from '../components/account-table';
import Layout from '../components/layout';
import styled from 'styled-components';

const Dash = styled.div`
    display: flex;
    align-content: center;
    
`;

const MyAccount = () => {
    return (
        <Dash>
        <Layout>
            <DashboardHeader />
            <AccountTable />
        </Layout>
        </Dash>
    )
}

export default MyAccount;