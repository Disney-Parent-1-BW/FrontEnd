import React, { useEffect, useRef } from "react"
import axios from 'axios';
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import {Row, Input, Button} from 'antd';
import styled from "styled-components"
import "./layout.css"

const LoginForm = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm()
  const inputRef = useRef(register)
  
  const onSubmit = data => {
    const postValues = {
      username: data.loginEmail,
      password: data.loginPassword
    }
    axios.post('https://disney-kids.herokuapp.com/api/auth/login', postValues)
    .then(res => {
      console.log(res);
      reset();
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <Row>
          <label htmlFor="loginEmail">Email</label>
          <StyledInput
            size='large'
            ref={inputRef.current({ required: true })}
            name="loginEmail"
            id="loginEmail"
          />
          {errors.loginEmail && errors.loginEmail.type === "required" && (
            <span>This field is required</span>
          )}
        </Row>
        <Row className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <StyledInput
            size='large'
            ref={inputRef.current({ required: true, minLength: 6 })}
            name="loginPassword"
            id="loginPassword"
            type="password"
          />
          {errors.loginPassword && errors.loginPassword.type === "required" && (
            <span>This field is required</span>
          )}
          {errors.loginPassword &&
            errors.loginPassword.type === "minLength" && (
              <span>Please use more than 5 characters</span>
            )}
        </Row>
        <Row justify='center'>
          <StyledButton size="large" type="primary" htmlType='submit'>Login</StyledButton>
        </Row>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.form`
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