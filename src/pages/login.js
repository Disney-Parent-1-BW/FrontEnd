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
      <Row>
        <Col>
          <Image />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

const FullHeightRow = styled(Row)`
  height: 100vh;
`;

export default LoginPage;