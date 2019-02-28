import React from "react"
import styled from "styled-components"

import List from "./List"
import theme from "../../utils/theme"

const StyledHeader = styled.header`
  width: 100%;
  height: 2.77rem;
`
const StyledHeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`
const StyledLogo = styled.span`
  color: ${theme.colors.logoColor};
  text-transform: uppercase;
  font: bold 0.72rem ${theme.fonts.secondaryFont};
`
const StyledLinksWrapper = styled.nav`
  width: 23%;
  height: 100%;
  ${theme.flexWrapper()}
`

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledLogo>Logo</StyledLogo>
        <StyledLinksWrapper>
          <List />
        </StyledLinksWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}
export default Navbar
