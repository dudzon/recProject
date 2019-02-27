import React from "react"
import Navbar from "../components/Navbar/Navbar"
import { createGlobalStyle } from "styled-components"
import theme from "../utils/theme"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
body{
    background: ${theme.colors.backgroundColor};
}

`
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
  </>
)

export default Layout
