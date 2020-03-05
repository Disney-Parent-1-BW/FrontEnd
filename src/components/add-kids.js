import React from 'react';
import {Form, Input, Button} from 'antd';
import axios from 'axios';

const currentUser = {
    id: 6
}

const AddKids = () => {

    const onsubmit = (values) => {
        const postData = {
            name: values.addKidsName,
            special_instructions: values.specialInstructions
        }
        axios.post(`https://disney-kids.herokuapp.com/api/users/${currentUser.id}/kids`, postData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Form layout="vertical" onFinish={onsubmit}>
            <Form.Item
                name="addKidsName"
                label="Kids Name"
                rules={[
                    {
                        required: true,
                        message: 'This field is required!'
                    }
                ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="specialInstructions"
                    label="Special Instructions">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Save Kid</Button>
                </Form.Item>

        </Form>
    );
}

export default AddKids;