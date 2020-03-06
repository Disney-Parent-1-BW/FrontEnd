import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../components/axiosWithAuth';
import {Link} from 'gatsby';
import {Button, Rate} from 'antd';
import {Table} from 'antd';


const AccountTable = () => {
    const [requests, setRequests] = useState([]);
    const [requestsRetrieved, setRequestsRetrieved] = useState(false);
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/users')
        .then(res => {
            setUsers(res.data);
        })
        
        AxiosWithAuth().get(' https://disney-kids.herokuapp.com/api/acceptedRequests')
        .then(res => {
            console.log("this", res.data);
            setAcceptedRequests(res.data);
        }).catch(err => console.log(err));
    }, [])
    
    useEffect(() => {
        const id = Number(localStorage.getItem('user_id'));
        
        AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/requests')
        .then(res => {
            setRequests(res.data.map(request => {
                const user =  users.find(user => {
                    return request.requestor_id == user.id;
                })
                if(request.requestor_id !== id){
                    return {
                        id: request.id,
                        profile: user.name,
                        requestor_id: request.requestor_id,
                        location: request.location,
                        time: request.time,
                        rating: (<Rate disabled defaultValue={3.4} />),
                        link: (<Button onClick={()=> handleClick(request.id)} >Accept</Button>)
                    } 
                } 
                return {
                    id: request.id,
                    profile: user.name,
                        requestor_id: request.requestor_id,
                        location: request.location,
                        time: request.time,
                        rating: (<Rate disabled defaultValue={3.4} />),
                        link: (<Link>Edit</Link>)
                }
            }).filter(request => {
                const acceptedRequest = acceptedRequests.find(acceptedRequest => {
                    return request.id === acceptedRequest.request.id;
                })
                if(!acceptedRequest){
                    return request;
                }
            }));
        })
        .catch(err => {
            console.log(err);
        })

    },[users, acceptedRequests])

    const handleClick = (requestId) => {
        const id = Number(localStorage.getItem('user_id'));

        const postData = {
            request_id: requestId,
            accepted_by: id
        }
        console.log(requestId);
        AxiosWithAuth().post('https://disney-kids.herokuapp.com/api/acceptedRequests', postData)
        .then(res => {
            console.log('Accepting request', res);
            setAcceptedRequests([
                ...acceptedRequests,
                res.data
            ]);

        })
        .catch(err => {
            console.log(err);
        })
    }
    
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
            key: 'link',
            render: (props) => props.link
        }
    ]

    return (
        <>
            <Table columns={columns} dataSource={requests} />
        </>
    )
}

export default AccountTable;