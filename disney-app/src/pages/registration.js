import React from "react"
import { Row, Col } from 'antd';
import styled from 'styled-components';

import Layout from "../components/login-layout"
import Image from '../images/9 1_family.png';
import LoginForm from '../components/registration-form';

const RegistrationPage = () => (
  <Layout>
    <div className="main-container">
      <Row justify='center'>
        <ColStyled  xs={24} sm={24} md={12}>
          <img src={Image} />
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