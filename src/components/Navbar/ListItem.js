import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "./../../utils/theme"

const StyledListItem = styled.li`
  list-style: none;
  margin: 0;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.linkColor};
  font-family: ${theme.fonts.linkFont};

  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.72rem;
  opacity: 0.5;
`
const ListItem = ({ route, text }) => {
  return (
    <StyledListItem>
      <StyledLink to={route} activeStyle={{ opacity: "1" }}>
        {text}
      </StyledLink>
    </StyledListItem>
  )
}

export default ListItem
