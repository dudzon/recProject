import React from "react"
import styled from "styled-components"
import theme from "./../../utils/theme"
import ContentBody from "./ContentBody"

const StyledSection = styled.section`
  width: 100%;
  margin-top: 4rem;
`
const StyledWrapper = styled.div`
  width: 70%;
  margin: 0 auto 3rem;
`
const StyledTitle = styled.h2`
  font: 700 1.33rem ${theme.fonts.primaryFont};
  text-transform: uppercase;
  color: ${theme.colors.primaryColor};
  width: 58%;
  margin: 0;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${theme.colors.primaryColor};
`
const Content = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledTitle>Who we are</StyledTitle>
        <ContentBody />
      </StyledWrapper>
    </StyledSection>
  )
}

export default Content
