import React from "react"
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/login-layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LoginForm from '../components/login-form';

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <Container className="main-container">
      <Row xs='1' sm='1' md='2' xl='2'>
        <Col >
          <Image />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default LoginPage;