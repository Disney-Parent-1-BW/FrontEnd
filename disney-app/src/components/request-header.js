import React from 'react';
import {Row, Col, Button} from 'antd';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const RequestHeader = () => {
    return (
        <div>
            <Wrapper />
            <StyledRow justify="space-between" align="middle">
                <Col>  
                    <h1>Requests</h1>
                </Col>
                <Col>
                <Link to='/add-request'><Button type='primary' size='large'>Add Request</Button></Link>
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

export default RequestHeader;