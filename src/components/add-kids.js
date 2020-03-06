import React, { useState } from 'react';
import {Form, Input, Button, Alert} from 'antd';
import {navigate} from 'gatsby';
import AxiosWithAuth from './axiosWithAuth';

const AddKids = () => {

    const [submitError, setSubmitError] = useState({});
    const onsubmit = (values) => {
        const postData = [{
            name: values.addKidsName,
            special_instructions: values.specialInstructions || ''
        }]
        console.log(postData);
        AxiosWithAuth().post(`https://disney-kids.herokuapp.com/api/kids`, postData)
        .then(res => {
            navigate('/manage-kids');
        })
        .catch(err => {
            console.log(err);
            setSubmitError({
                type: 'error',
                message: 'Failed to add kid'
            })
        })
    }

    return (
        <Form layout="vertical" onFinish={onsubmit}>
            {submitError.type === 'error' ? (<Alert type='error' message={submitError.message} />) : null}
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