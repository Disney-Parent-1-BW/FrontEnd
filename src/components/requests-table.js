import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../components/axiosWithAuth';
import {Link} from 'gatsby';
import id from './getCurrentUser';
import {Button, Rate} from 'antd';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
 

const AccountTable = () => {
    const [requests, setRequests] = useState([]);
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    const [users, setUsers] = useState([]);
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
 

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
            dataIndex: 'link',
            render: (props) => props()
        }
    ]

    useEffect(() => {
        AxiosWithAuth().get('https://disney-kids.herokuapp.com/api/users')
        .then(res => {
            setUsers(res.data);
        })

        AxiosWithAuth().get(' https://disney-kids.herokuapp.com/api/acceptedRequests')
        .then(res => {
            console.log(res);
            setAcceptedRequests(res.data);
        }).catch(err => console.log(err));
    }, [])

    useEffect(() => {
        
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
                        link: () => (<Button onClick={()=> handleClick(request.id)} >Accept</Button>)
                    } 
                } 
                return {
                    id: request.id,
                    profile: user.name,
                    requestor_id: request.requestor_id,
                    location: request.location,
                    time: request.time,
                    rating: (<Rate disabled defaultValue={3.4} />),
                    link: () => {return(<a>Edit</a>)}
                }
            })
            .filter(request => {
                const acceptedRequest = acceptedRequests.find(acceptedRequest => {
                    return request.id === acceptedRequest.request.id;
                })
                if(!acceptedRequest.acceptedBy){
                    return request;
                }
            })
            );
        })
        .catch(err => {
            console.log(err);
        })

    },[users, acceptedRequests])

    useEffect(()=> {

    }, [requests])

    const handleClick = (requestId) => {
        const postData = {
            request_id: requestId,
            accepted_by: id
        }
        AxiosWithAuth().post('https://disney-kids.herokuapp.com/api/acceptedRequests', postData)
        .then(res => {
            console.log('Accepting request', res);
            const newData = [...requests]
            const index = newData.findIndex(request => request.id === res.data.request.id);
            const item = newData[index];
            newData.splice(index, 1, { ...item});
            setRequests(newData)
            setAcceptedRequests([
                ...acceptedRequests,
                res.data
            ]);

        })
        .catch(err => {
            console.log(err);
        })
    }
    
   

    return (
        <>
      
            <Table 
                columns={columns} 
                dataSource={requests}/>
        </>
    )
}

export default AccountTable;