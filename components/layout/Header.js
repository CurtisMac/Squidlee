import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: blue;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>this is a header</h1>
    </StyledHeader>
  );
};

export default Header;
