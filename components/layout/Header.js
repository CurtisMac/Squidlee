import React from "react";
import styled from "styled-components";

//Components
import Nav from "./_headerNav";

const StyledHeader = styled.header`
  background-color: ${props => props.theme.purpleDark};
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>this is a header</h1>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
