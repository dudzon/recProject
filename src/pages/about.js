import React from "react"
import Layout from "../layout/layout"
import Jumbotron from "./../components/Jumbotron/Jumbotron"
import Content from "./../components/Content/Content"

const About = () => {
  return (
    <Layout>
      <Jumbotron text="about" />
      <Content />
    </Layout>
  )
}
export default About
