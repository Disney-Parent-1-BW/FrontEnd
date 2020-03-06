import React from "react"
import { Row, Col, Menu, Dropdown } from "antd"
import ProfileImg from "../images/profile.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ManageKidsHeader = () => {
  const manageKidsMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/dashboard/manage-kids">Manage Kids</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Wrapper />
      <StyledRow justify="space-between" align="middle">
        <Col>
          <h1>Manage Kids</h1>
        </Col>
        <Col>
          <Dropdown overlay={manageKidsMenu} trigger={["click"]} placement="bottomCenter">
            <img src={ProfileImg} />
          </Dropdown>
        </Col>
      </StyledRow>
      <Wrapper />
    </div>
  )
}

const Wrapper = styled.div`
  height: 42px;
  background: #e8e8e8;
`

const StyledRow = styled(Row)`
  height: 188px;
  background: #f7f7f7;
  padding: 0 20px;
`

export default ManageKidsHeader
