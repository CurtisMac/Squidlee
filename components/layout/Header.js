import React from "react";
import styled from "styled-components";

//Components
import Nav from "./Nav";

const StyledHeader = styled.header`
  background-color: blue;
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
