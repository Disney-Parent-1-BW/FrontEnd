import React from 'react';
import DashboardHeader from '../components/dashboard-header';
import AccountTable from '../components/account-table';
import Layout from '../components/layout';

const MyAccount = () => {
    return (
        <>
        <Layout/>
        <div>
            <DashboardHeader />
            <AccountTable />
        </div>
        </>
    )
}

export default MyAccount;