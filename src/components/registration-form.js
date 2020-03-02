import React from "react"
import { withFormik, Form, Field } from "formik"
import styled from 'styled-components';
import * as Yup from "yup"
import "./layout.css"

const LoginForm = () => {
  return (
    <>
      <FormContainer>
        <h1>Registration</h1>
        <FormGroup className="form-group">
          <Label htmlFor="registerName">Name</Label>
          <Field as={Input} name="registerName" id="registerName" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="registerEmail">Email</Label>
          <Field as={Input} name="registerEmail" id="registerEmail" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="registerPassword">Password</Label>
          <Field as={Input} name="registerPassword" id="registerPassword" type="password" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Field as={Input} name="confirmPassword" id="confirmPassword" type="password" />
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
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      confirmPassword: "",
      image: "",
    }
  },
  validationSchema: Yup.object().shape({
    registerName: Yup.string().required(),
    registerEmail: Yup.string()
      .email()
      .required(),
      registerPassword: Yup.string()
      .length(6, "Password needs to be more than 5 characters")
      .required("Password is required"),
      confirmPassword: Yup.string().required(),
      image: null,
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log('submitted');
    console.log(values)
  },
})(LoginForm)
