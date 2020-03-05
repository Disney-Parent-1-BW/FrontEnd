import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../components/axiosWithAuth';
import {Button, Rate} from 'antd';
import {Table} from 'antd';

const AccountTable = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/requests')
        .then(res => {
            console.log(res);
            setRequests(res.data.map(request => {
                return {
                    id: request.id,
                    location: request.location,
                    time: request.time,
                    rating: (<Rate disabled defaultValue={3.4} />),
                    link: (<Button>Message</Button>)
                } 
            }));
        })
        .catch(err => {
            console.log(err);
        })
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
        </>
    )
}

export default AccountTable;