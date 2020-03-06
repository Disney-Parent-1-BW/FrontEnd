import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Row, Input, Button, Form, Alert } from "antd"
import styled from "styled-components"
import "./layout.css"
import { Link, useHistory} from "react-router-dom"


const LoginForm = () => {
  const [submitError, setSubmitError] = useState({});
  const [form] = Form.useForm();
  let history = useHistory();

  const onSubmit = data => {
    const postValues = {
      username: data.loginEmail,
      password: data.loginPassword,
    }
    axios.post('https://disney-kids.herokuapp.com/api/auth/login', postValues)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token",res.data.token)
      localStorage.setItem('user_id', res.data.user.id)
            
      setSubmitError({
        type: 'success',
        message: 'Successfully logged in'
      })
      form.resetFields();
      history.push('/dashboard')
    })
    .catch(err => {
      console.log(err);
      setSubmitError({
        type: 'error',
        message: 'Login failed. Check your username and password'
      })
      
      form.resetFields();
      
    })
    
  }

  const onFinishFailed = ({values, errorFields, outOfDate}) => {
    console.log(errorFields);
  }

  
  return (
    <>
      <FormContainer form={form} layout="vertical" onFinish={onSubmit} onFinishFailed={onFinishFailed}>
        <h1>Login</h1>
        <Form.Item
          name="loginEmail"
          label="Email"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <StyledInput
            size="large"
            id="loginEmail"
          />
        </Form.Item>
        <Form.Item
          name="loginPassword"
          label="Password"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <StyledInput.Password
            size="large"
            id="loginPassword"
          />
        </Form.Item>
        <Row justify="center">
          <Form.Item>
            <StyledButton  size="large" type="primary" htmlType="submit">
              Login
            </StyledButton>
          </Form.Item>
        </Row>
      </FormContainer>
    </>
  )
}

const FormContainer = styled(Form)`
  font-family: "Roboto";

  h1 {
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const StyledInput = styled(Input)`
  height: 58px;
  border-color: #7d70fe;
  background: #fff;
  padding: 0 20px;
`

const StyledButton = styled(Button)`
  width: 185px;
  height: 41px;
  background: #7d70fe;
  border-radius: 4px;
`

export default LoginForm
