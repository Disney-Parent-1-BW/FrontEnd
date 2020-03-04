import React from "react"
import { Row, Col } from 'antd';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/login-layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LoginForm from '../components/registration-form';

const RegistrationPage = () => (
  <Layout>
    <SEO title="Login" />
    <div className="main-container">
      <Row justify='center'>
        <ColStyled  xs={24} sm={24} md={12}>
          <Image />
        </ColStyled>
        <ColStyled  xs={24} sm={24} md={12}>
          <LoginForm />
        </ColStyled>
      </Row>
    </div>
  </Layout>
)

const ColStyled = styled(Col)`
  max-width: 415px;
`;

export default RegistrationPage;