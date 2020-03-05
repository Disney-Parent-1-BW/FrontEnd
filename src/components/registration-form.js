import React, { useEffect, useState, useRef, useCallback } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { useDropzone } from "react-dropzone"
import { Row, Button, Input, Form, Upload, Alert, Checkbox } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import axios from "axios"
import * as Yup from "yup"
import uploadIcon from "../images/upload-icon.png"
import "./layout.css"
import { navigate } from "gatsby"

const LoginForm = () => {
  const { register, errors, handleSubmit, watch, reset } = useForm();
  const [form] = Form.useForm();
  const [profileImageUrl, setProfileImageUrl] = useState();
  const [submitError, setSubmitError] = useState({});
  const [profileImage, setProfileImage] = useState();
  const inputRef = useRef(register)

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
        navigate(`/login`)
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

  // const onDrop = useCallback(acceptedFiles => {
  //   let arrayBufferView
  //   let blob
  //   let urlCreator
  //   let imageUrl

  //   acceptedFiles.forEach(file => {
  //     if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
  //       console.log(file)
  //       const reader = new FileReader()

  //       reader.onabort = () => console.log("file reading was aborted")
  //       reader.onerror = () => console.log("file reading has failed")
  //       reader.addEventListener(
  //         "load",
  //         function() {
  //           arrayBufferView = new Uint8Array(this.result)
  //           blob = new Blob([arrayBufferView], { type: file.type })
  //           urlCreator = window.URL || window.webkitURL
  //           imageUrl = urlCreator.createObjectURL(blob)
  //           setProfileImageUrl(imageUrl)
  //           setProfileImage(blob)
  //         },
  //         false
  //       )
  //       reader.readAsArrayBuffer(file)
  //     }
  //   })
  // }, [])
  // const {
  //   acceptedFiles,
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  // } = useDropzone({ onDrop, accept: "image/*" })

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
  }, [errors, profileImageUrl])

  return (
    <>
      <FormContainer
        {...layout}
        form={form}
        layout="vertical"
        onFinish={onSubmit}
      >
        <h1>Registration</h1>
        {submitError.type === 'success' || submitError.type === 'error' ? <Alert type={submitError.type} message={submitError.message} /> : null}
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
            ref={inputRef.current({ required: true })}
            id="registerName"
          />
        </Form.Item>
        {errors.registerName && errors.registerName.type === "required" && (
          <span>This field is required</span>
        )}
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
          <StyledInput ref={inputRef.current({ required: true })} />
        </Form.Item>
        {errors.registerEmail && errors.registerEmail.type === "required" && (
          <span>This field is required</span>
        )}
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
            ref={inputRef.current({ required: true })}
            id="registerPassword"
          />
        </Form.Item>
        {errors.registerPassword &&
          errors.registerPassword.type === "required" && (
            <span>This field is required</span>
          )}
        {errors.registerPassword &&
          errors.registerPassword.type === "minLength" && (
            <span>Please use more than 5 characters</span>
          )}
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
            ref={inputRef.current({
              validate: value => value === watch("registerPassword"),
            })}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
        </Form.Item>
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <span>Does not match password</span>
          )}
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
