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
  color: ${theme.colors.primaryColor};
  font: 700 0.72rem ${theme.fonts.primaryFont};
  text-transform: uppercase;
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
