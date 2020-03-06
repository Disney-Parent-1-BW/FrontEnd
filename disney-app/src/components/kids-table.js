import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../components/axiosWithAuth';
import {Button, Rate, Row} from 'antd';
import {Table} from 'antd';
import { Link } from 'react-router-dom';

const KidsTable = () => {
    const [kids, setKids] = useState([]);

    useEffect(() => {
        AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/kids')
        .then(res => {
            setKids(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
            
        },
        {
            title: 'Special Instructions',
            dataIndex: 'special_instructions',
            key: 'special_instructions'
        },
       
    ]

    return (
        <>
            <Table columns={columns} dataSource={kids} />
            <Row justify="center">
                <Link to="/add-kids"><Button type="primary" size="large">Add Kids</Button></Link>
            </Row>
        </>
    )
}

export default KidsTable;