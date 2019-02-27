import React from "React"
import styled from "styled-components"
import ListItem from "./ListItem"

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`

const List = () => {
  return (
    <StyledList>
      <ListItem route="/" text="Home" />
      <ListItem route="/products" text="products" />
      <ListItem route="/about" text="about" />
      <ListItem route="contact" text="contact" />
    </StyledList>
  )
}
export default List
