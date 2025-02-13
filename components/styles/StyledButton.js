import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props =>
    props.solid
      ? props.theme[props.bgColor] || props.theme.primary
      : "transparent"};
  color: ${props =>
    props.solid
      ? props.txtColor || "white"
      : props.txtColor
      ? props.txtColor
      : props.theme[props.bgColor] || props.theme.primary};
  border: 2px solid
    ${props => props.theme[props.bgColor] || props.theme.primary};
  border-radius: 5px;
  margin: 0.5rem;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export default StyledButton;
