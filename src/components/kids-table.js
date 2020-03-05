import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../components/axiosWithAuth';
import {Button, Rate, Row} from 'antd';
import {Table} from 'antd';
import { Link } from 'gatsby';

const KidsTable = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/requests')
        // .then(res => {
            
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    },[])
    
    const columns = [
        {
            title: '',
            dataIndex: 'profile',
            key: 'profile'
            
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location'
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: 'Children',
            dataIndex: 'children',
            key: 'children'
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating'
        },
        {
            title: '',
            dataIndex: 'link',
            key: 'link'
        }
    ]

    return (
        <>
            <Table columns={columns} dataSource={requests} />
            <Row justify="center">
                <Link to="/add-kids"><Button type="primary" size="large">Add Kids</Button></Link>
            </Row>
        </>
    )
}

export default KidsTable;