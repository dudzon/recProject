import React from "react"
import styled from "styled-components"
import theme from "./../../utils/theme"

const StyledDiv = styled.div`
  grid-column: ${({ column }) => column};
  display: flex;
  flex-direction: column;
`

const StyledH3 = styled.h3`
  font: 400 1.77rem ${theme.fonts.primaryFont};
  color: ${theme.colors.primaryColor};
`

const StyledParagraph = styled.p`
  font: 0.77rem/1.33rem ${theme.fonts.secondaryFont};
  color: ${theme.colors.textColor};
`

const ContentText = ({ column }) => {
  return (
    <StyledDiv column={column}>
      <StyledH3> Quisque viverra </StyledH3>
      <StyledParagraph>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis,
        mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur
        non habitasse iaculis tempor nec egestas fames augue, platea porta
        integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque
        ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur
        ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam.
      </StyledParagraph>
      <StyledParagraph>
        {" "}
        Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus
        neque.Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque
        primis penatibus platea, dictum himenaeos eget mi
      </StyledParagraph>
    </StyledDiv>
  )
}

export default ContentText
