import React from 'react';
import {Row, Col} from 'antd';
import ProfileImg from '../images/profile.png';
import styled from 'styled-components';

const DashboardHeader = () => {
    return (
        <div>
            <Wrapper />
            <StyledRow justify="space-between" align="middle">
                <Col>  
                    <h1>My Account</h1>
                </Col>
                <Col>
                    <img src={ProfileImg} />
                </Col>
            </StyledRow>
            <Wrapper />
        </div>
    )
}

const Wrapper = styled.div`
    height: 42px;
    background: #E8E8E8;
`;

const StyledRow = styled(Row)`
    height: 146px;
    background: #F7F7F7;
    padding: 0 20px;
`;

export default DashboardHeader;