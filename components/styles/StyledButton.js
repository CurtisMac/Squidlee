import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props =>
    props.solid ? props.bgColor || props.theme.purple : "transparent"};
  color: ${props =>
    props.solid
      ? props.txtColor || "white"
      : props.txtColor
      ? props.txtColor
      : props.bgColor || props.theme.purple};
  border: 2px solid ${props => props.bgColor || props.theme.purple};
  border-radius: 3px;
  margin: 0.5rem;
  padding: 0.25em 1em;
`;

export default StyledButton;
