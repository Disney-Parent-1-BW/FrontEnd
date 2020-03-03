import React, { useEffect, useRef } from "react"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import "./layout.css"

const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const inputRef = useRef(register)
  const onSubmit = data => {
    console.log(data)
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <FormGroup className="form-group">
          <Label htmlFor="loginEmail">Email</Label>
          <Input
            ref={inputRef.current({ required: true })}
            name="loginEmail"
            id="loginEmail"
          />
          {errors.loginEmail && errors.loginEmail.type === "required" && (
            <span>This field is required</span>
          )}
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="loginPassword">Password</Label>
          <Input
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
        </FormGroup>
        <Button type="submit">Login</Button>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  margin-top: 65px;
  font-family: "Roboto";

  h1 {
    text-align: center;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const FormGroup = styled.div`
  width: 100%;
`

const Label = styled.label`
  width: 100%;
`

const Input = styled.input`
  height: 58px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #7d70fe;
  background: #fff;
  padding: 0 20px;
`

const Button = styled.button`
  width: 185px;
  height: 41px;
  background: #7d70fe;
  border: none;
  border-radius: 5px;
  color: #fff;
  align-self: center;
`

export default LoginForm