import React from "react"
import { Link } from "react-router-dom"

import Layout from "../components/layout"
import Image from "../images/9 1_family.png";

const IndexPage = () => (
  <>
    <h1>Disney Parent</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Image} />
    </div>
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </>
)

export default IndexPage
