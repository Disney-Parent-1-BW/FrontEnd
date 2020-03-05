import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Layout } from "antd"
import Image from '../components/image';
import Navbar from '../components/navbar';
import "./layout.css"

const {Sider, Content} = Layout;

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sider
        width="240px"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh", background: "#7D70FE" }}
      >
        <Image />
        <Navbar />
      </Sider>
      <Content>
        <main>{children}</main>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
