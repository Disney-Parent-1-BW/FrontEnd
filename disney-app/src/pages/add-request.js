import React from "react"
import AddRequestForm from "../components/add-request-form"
import styled from "styled-components"

const AddRequestPage = () => {
  return (
    <Container>
      <AddRequestForm />
    </Container>
  )
}

const Container = styled.div`
  padding: 35px;
`

export default AddRequestPage
