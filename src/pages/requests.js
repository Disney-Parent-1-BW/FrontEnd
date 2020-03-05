import React from 'react';
import RequestHeader from '../components/request-header';
import RequestTable from '../components/requests-table';
import Layout from '../components/layout';
import styled from 'styled-components';

const Dash = styled.div`
    display: flex;
    align-content: center;
    
`;

const Requests = () => {
    return (
        <div>
            <Dash>
            <Layout>
            <RequestHeader />
            <RequestTable />
            </Layout>
            </Dash>
        </div>
    )
}

export default Requests;