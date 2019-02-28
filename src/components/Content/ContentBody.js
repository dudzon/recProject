import React from "react"
import styled from "styled-components"
import ContentImage from "./ContentImage"
import image from "./../../images/image2.jpg"
import image2 from "./../../images/image1.jpg"
import ContentText from "./ContentText"

const StyledSection = styled.section`
  display: grid;
  width: 100%;
  margin-top: 4rem;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 26rem);
  grid-row-gap: 5rem;
`
const ContentBody = () => {
  return (
    <StyledSection>
      <ContentImage column="1/6" image={image} />
      <ContentText column="7/9" />
      <ContentText column="1/3" />
      <ContentImage column="4/-1" image={image2} />
    </StyledSection>
  )
}

export default ContentBody
