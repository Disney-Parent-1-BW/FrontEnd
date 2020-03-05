import React, {useState, useEffect} from "react";
import Layout from '../components/layout';
import styled from 'styled-components';
import { Link } from "gatsby";

const Dash = styled.div`
    display: flex;
    
`;


const Dashboard = ({ children }) => {

    return(
        <Dash>
            <Layout style={{background: '#fff'}} />
            <h1>Dashboard</h1>
        </Dash>
    )
}

export default Dashboard;