import React, {useEffect, useState, useRef, useCallback} from "react";
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {useDropzone} from 'react-dropzone';
import * as Yup from "yup"
import uploadIcon from '../images/upload-icon.png';
import "./layout.css"

const LoginForm = () => {
  const {register, errors, handleSubmit, watch, reset} = useForm();
  const [profileImageUrl, setProfileImageUrl] = useState();
  const [profileImage, setProfileImage] = useState();
  const inputRef = useRef(register);

  const onSubmit = data => {
    console.log({
      ...data,
      image: profileImage
    })
    setProfileImageUrl(null);
    setProfileImage(null);
    reset();
  };

  const onDrop = useCallback(acceptedFiles => {
    let arrayBufferView;
    let blob;
    let urlCreator;
    let imageUrl;

    acceptedFiles.forEach((file) => {
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        console.log(file)
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.addEventListener('load', function(){
          arrayBufferView = new Uint8Array( this.result );
          blob = new Blob([ arrayBufferView ], { type: file.type });
          urlCreator = window.URL || window.webkitURL;
          imageUrl = urlCreator.createObjectURL( blob );
          setProfileImageUrl(imageUrl);
          setProfileImage(blob);
        }, false)
        reader.readAsArrayBuffer(file);
      }
    })
  }, [])
  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop, accept: 'image/*'})
  

  useEffect(() => {
    console.log(profileImageUrl);
  }, [errors, profileImageUrl, acceptedFiles])

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <FormGroup className="form-group">
          <Label htmlFor="registerName">Name</Label>
          <Input ref={inputRef.current({required: true})} name="registerName" id="registerName" />
          {(errors.registerName && errors.registerName.type  === 'required') && <span>This field is required</span>}
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="registerEmail">Email</Label>
          <Input ref={inputRef.current({required: true})} name="registerEmail" id="registerEmail" />
          {(errors.registerEmail && errors.registerEmail.type  === 'required') && <span>This field is required</span>}
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="registerPassword">Password</Label>
          <Input ref={inputRef.current({required: true})} name="registerPassword" id="registerPassword" type="password" />
          {(errors.registerPassword && errors.registerPassword.type  === 'required') && <span>This field is required</span>}
          {(errors.registerPassword && errors.registerPassword.type  === 'minLength') && <span>Please use more than 5 characters</span>}
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input ref={inputRef.current({validate: (value) => value === watch('registerPassword')})} name="confirmPassword" id="confirmPassword" type="password" />
          {(errors.confirmPassword && errors.confirmPassword.type  === 'validate') && <span>Does not match password</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor='profileImage'>Profile Image</Label>
          <UploadContainer {...getRootProps()}>
            <img src={uploadIcon} />
            {
              isDragActive ? 
              <p>Drop the files here ...</p> :
              <p>Drag and Drop File Here to Upload</p>
            }
            {profileImageUrl ? <img src={profileImageUrl} /> : null}
            <UploadButton name="profileImage" {...getInputProps()} />
          </UploadContainer>
        </FormGroup>
        <Button type='submit'>Register</Button>
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

const UploadContainer = styled.div`
    width: 100%:
    height: auto;
    border: 1px solid #7D70FE;
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
`;

const Button = styled.button`
    width: 185px;
    height: 41px;
    background: #7D70FE;
    border: none;
    border-radius: 5px;
    color: #fff;
    align-self: center;
    margin: 15px 0;
`;

const UploadButton = styled.input`
    width: 148px;
    font-size: 11px;
    height: 41px;
    background: #7D70FE;
    border: none;
    border-radius: 5px;
    color: #fff;
    align-self: center;
    margin: 15px 0;
`;

export default LoginForm;
