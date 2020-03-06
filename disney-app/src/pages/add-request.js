import React from "react"
import AddRequestForm from "../components/add-request-form"
import AddRequestHeader from '../components/add-request-header';
import styled from "styled-components"

const AddRequestPage = () => {
  return (
    <>
    <AddRequestHeader />
    <Container>
      <AddRequestForm />
    </Container>
    </>
  )
}

const Container = styled.div`
  padding: 20px;
`

export default AddRequestPage
