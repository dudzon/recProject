import React from "react"
import Layout from "../layout/layout"
import Jumbotron from "./../components/Jumbotron/Jumbotron"
import Content from "./../components/Content/Content"
const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron text="home" />
      <Content />
    </Layout>
  )
}

export default IndexPage
