import React from "react"
import image from "./../../images/image3.jpg"
import styled from "styled-components"
import theme from "./../../utils/theme"

const StyledSection = styled.section`
  ${theme.flexWrapper()};
  width: 100%;
  height: 23rem;
  background: url(${image}) no-repeat;
  background-size: cover;
`
const StyledH1 = styled.h1`
  font: 400 4rem ${theme.fonts.primaryFont};
  color: ${theme.colors.headerColor};
  text-transform: uppercase;
`

const Jumbotron = ({ text }) => {
  return (
    <StyledSection>
      <StyledH1>{text}</StyledH1>
    </StyledSection>
  )
}

export default Jumbotron
