import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../components/axiosWithAuth';
import {Link} from 'gatsby';
import {Button, Rate} from 'antd';
import {Table} from 'antd';

const id = Number(localStorage.getItem('user_id'));
console.log(id);

const AccountTable = () => {
    const [requests, setRequests] = useState([]);
    const [requestsRetrieved, setRequestsRetrieved] = useState(false);

    useEffect(() => {
        AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/requests')
        .then(res => {
            console.log(res.data);
            setRequests(res.data.map(request => {
                if(request.requestor_id !== id){
                    return {
                        id: request.id,
                        requestor_id: request.requestor_id,
                        location: request.location,
                        time: request.time,
                        rating: (<Rate disabled defaultValue={3.4} />),
                        link: (<Button>Accept</Button>)
                    } 
                } 
                return {
                    id: request.id,
                        requestor_id: request.requestor_id,
                        location: request.location,
                        time: request.time,
                        rating: (<Rate disabled defaultValue={3.4} />),
                        link: (<Link>Edit</Link>)
                }
            }));
            setRequestsRetrieved(true);
        })
        .catch(err => {
            console.log(err);
        })

    },[])

    useEffect(() => {
        if(requestsRetrieved){
            requests.forEach((request, id) => {
                AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/users/' + request.requestor_id)
                .then(res => {
                })
                .catch(err => {
                    console.log(err);
                    return null
                });
            })
        }
        
    }, [requestsRetrieved, requests])

    
    
    const columns = [
        {
            title: 'Requester',
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