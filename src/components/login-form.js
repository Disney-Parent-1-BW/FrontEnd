import React from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import styled from 'styled-components';
import "./layout.css"

const LoginForm = () => {
  return (
    <>
      <FormContainer>
          <h1>Login</h1>
        <FormGroup className="form-group">
          <Label htmlFor="loginEmail">Email</Label>
          <Field as={Input} name="loginEmail" id="loginEmail" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="loginPassword">Password</Label>
          <Field as={Input} name="loginPassword" id="loginPassword" type="password" />
        </FormGroup>
        <Button type='submit'>Login</Button>
      </FormContainer>
    </>
  )
}

const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    margin-top: 65px;
    font-family: 'Roboto';

    h1 {
        text-align: center;
        font-weight: 400;
    }
`;

const FormGroup = styled.div`
    width: 100%;
`;

const Label = styled.label`
    width: 100%;
`;

const Input = styled.input`
    height: 58px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #7D70FE;
    background: #fff;
    padding: 0 20px;
`;

const Button = styled.button`
    width: 185px;
    height: 41px;
    background: #7D70FE;
    border: none;
    border-radius: 5px;
    color: #fff;
    align-self: center;
`;

export default withFormik({
  mapPropsToValues() {
    return {
      loginEmail: "",
      loginPassword: ""
    }
  },
  validationSchema: Yup.object().shape({
    loginEmail: Yup.string()
      .email()
      .required(),
      loginPassword: Yup.string()
      .length(6, "Password needs to be more than 5 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values)
  },
})(LoginForm);
