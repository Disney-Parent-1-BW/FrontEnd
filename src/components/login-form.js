import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { navigate } from 'gatsby';
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { Row, Input, Button, Form, Alert } from "antd"
import styled from "styled-components"
import "./layout.css"
import { Link, navigate } from "gatsby"


const LoginForm = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm()
  const [submitError, setSubmitError] = useState({});
  const [form] = Form.useForm();
  const inputRef = useRef(register)

  const onSubmit = data => {
    const postValues = {
      username: data.loginEmail,
      password: data.loginPassword,
    }
    axios.post('https://disney-kids.herokuapp.com/api/auth/login', postValues)
    .then(res => {
      console.log(res);
      localStorage.setItem("token",res.data.token)
            
      setSubmitError({
        type: 'success',
        message: 'Successfully logged in'
      })
      form.resetFields();
      navigate(`/dashboard`)
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

  useEffect(() => {
    console.log(errors)
  }, [errors])

  
  return (
    <>
      <FormContainer form={form} layout="vertical" onFinish={onSubmit} onFinishFailed={onFinishFailed}>
        <h1>Login</h1>
        {submitError.type === 'success' || submitError.type === 'error' ? <Alert type={submitError.type} message={submitError.message} />  : null }
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
        {errors.loginEmail && errors.loginEmail.type === "required" && (
          <span>This field is required</span>
        )}
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
        {errors.loginPassword && errors.loginPassword.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.loginPassword && errors.loginPassword.type === "minLength" && (
          <span>Please use more than 5 characters</span>
        )}
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
