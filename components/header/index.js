import React from "react";
import styled from "styled-components";

//components
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <StyledHeader>
      <Title>LOGO</Title>
      <NavContainer />
    </StyledHeader>
  );
};

//styles
const StyledHeader = styled.header`
  background: transparent;
  display: flex;
`;

const Title = styled.h1`
  padding: 10px;
  margin: 0 0 20px 0;
  color: coral;
`;

const NavContainer = styled(HeaderNav)`
  /* flex styles */
`;

export default Header;
