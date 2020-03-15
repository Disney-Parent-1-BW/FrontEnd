import React from 'react';
import AddKidsForm from '../components/add-kids';
import ManageKidsHeader from '../components/manage-kids-header';
import styled from 'styled-components';
const AddKids = () => {
    return (
        <>
        <ManageKidsHeader />
        <Wrapper>
            <AddKidsForm />
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    padding: 0 20px;
`;

export default AddKids;