import React from "react"
import Layout from "../layout/layout"
import Jumbotron from "./../components/Jumbotron/Jumbotron"
import Content from "./../components/Content/Content"
const Products = () => {
  return (
    <Layout>
      <Jumbotron text="products" />
      <Content />
    </Layout>
  )
}

export default Products
