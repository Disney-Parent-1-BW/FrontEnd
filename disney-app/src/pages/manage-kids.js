import React from 'react';
import MangeKidsHeader from '../components/manage-kids-header';
import KidsTable from '../components/kids-table';
import styled from 'styled-components';
const Dash = styled.div`
    display: flex;
    align-content: center;
`;

const ManageKids = () => {
    return (
        <>
            <MangeKidsHeader />
            <KidsTable />
        </>
    )
}

export default ManageKids;