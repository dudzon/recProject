import React from "react"
import styled from "styled-components"
import theme from "./../../utils/theme"

const StyledSection = styled.section`
  width: 100%;
`
const StyledWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`
const StyledTitle = styled.h2`
  font: 700 1.33rem ${theme.fonts.primaryFont};
  text-transform: uppercase;
  color: ${theme.colors.primaryColor};
  width: 40%;
  margin: 2rem 0 0;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${theme.colors.primaryColor};
`
const Content = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledTitle>Who we are</StyledTitle>
      </StyledWrapper>
    </StyledSection>
  )
}

export default Content
