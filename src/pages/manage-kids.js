import React from 'react';
import MangeKidsHeader from '../components/manage-kids-header';
import KidsTable from '../components/kids-table';
import Layout from '../components/layout';
import styled from 'styled-components';

const Dash = styled.div`
    display: flex;
    align-content: center;
`;

const ManageKids = () => {
    return (
        <div>
            <Dash>
            <Layout>
                <MangeKidsHeader />
                <KidsTable />
            </Layout>
            </Dash>
        </div>
    )
}

export default ManageKids;