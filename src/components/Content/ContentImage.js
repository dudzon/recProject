import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  height: 100%;
  grid-column: ${({ column }) => column};
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  border-radius: 5px;
`

const ContentImage = ({ column, image }) => {
  return <StyledDiv column={column} image={image} />
}

export default ContentImage
