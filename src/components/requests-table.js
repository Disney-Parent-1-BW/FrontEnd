import React from 'react';
import {Table} from 'antd';

const AccountTable = () => {
    
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
            <Table columns={columns} />
        </>
    )
}

export default AccountTable;