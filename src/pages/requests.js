import React from 'react';
import RequestHeader from '../components/request-header';
import RequestTable from '../components/requests-table';
import Layout from '../components/layout';

const Requests = () => {
    return (
        <div>
            <RequestHeader />
            <RequestTable />
        </div>
    )
}

export default Requests;