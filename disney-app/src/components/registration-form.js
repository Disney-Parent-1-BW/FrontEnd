import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Row, Button, Input, Form, Upload, Checkbox } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import axios from "axios"
import "./layout.css"
import { useHistory, Link } from "react-router-dom"

const LoginForm = () => {
  const [form] = Form.useForm();
  const [profileImageUrl, setProfileImageUrl] = useState();
  const [submitError, setSubmitError] = useState({});
  let history = useHistory();

  const onSubmit = data => {
    const postValues = {
      name: data.registerName,
      username: data.registerEmail,
      password: data.registerPassword,
      isProvider: data.isProvider,
    }
    axios
      .post("https://disney-kids.herokuapp.com/api/auth/register", postValues)
      .then(res => {
        console.log(res)
        setSubmitError({
          type: "success",
          message: "You've successfully registered!"
        })
        form.resetFields();
        history.push(`/login`)
      }) 
      .catch(err => {
        console.log(err)
        setSubmitError({
          type: 'error',
          message: "Registration failed. Check your username and password and try again."
        })
        form.resetFields();
      })
  }

  const normFile = e => {
    console.log("Upload event:", e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }

  const layout = {}

  useEffect(() => {
    console.log(profileImageUrl)
  }, [profileImageUrl])

  return (
    <>
      <FormContainer
        {...layout}
        form={form}
        layout="vertical"
        onFinish={onSubmit}
      >
        <h1>Registration</h1>
        <Form.Item
          label="Name"
          name="registerName"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <StyledInput
            id="registerName"
          />
        </Form.Item>
       
        <Form.Item
          label="Email"
          name="registerEmail"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <StyledInput />
        </Form.Item>
       
        <Form.Item
          label="Password"
          name="registerPassword"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <StyledInput.Password
            id="registerPassword"
          />
        </Form.Item>
       
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <StyledInput.Password
         
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
        </Form.Item>
       
        <Form.Item label="Profile Image">
          <Form.Item
            name="profileImage"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload.Dragger
              name="profileImage"
              action="/upload.do"
              listType="picture"
              showUploadList={{
                showPreviewIcon: true
              }}
              multiple={false}
            >
              <p>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>Click or drag file to this area to upload</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            name="isProvider" valuePropName="checked">
              <Checkbox>I am a childcare provider</Checkbox>
            </Form.Item>
        </Form.Item>
        <Row justify="center">
          <StyledButton htmlType="submit" type="primary">
            Register
          </StyledButton>
        </Row>
      </FormContainer>
      <Link to="/login">Already have an account?</Link>
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

const UploadContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #7d70fe;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  img {
    margin: 0;
  }

  p {
    margin: 8px 0;
  }
`

const StyledButton = styled(Button)`
  width: 185px;
  height: 41px;
  background: #7d70fe;
  border-radius: 4px;
  margin: 15px 0;
`

const UploadButton = styled.input`
  width: 148px;
  font-size: 11px;
  height: 41px;
  background: #7d70fe;
  border: none;
  border-radius: 5px;
  color: #fff;
  align-self: center;
  margin: 15px 0;
`

export default LoginForm
