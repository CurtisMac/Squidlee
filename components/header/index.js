import React from "react";
import styled from "styled-components";

//components
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <FlexContainer>
      <FlexChild>
        <Logo />
      </FlexChild>
      <FlexChild>
        <Nav />
      </FlexChild>
    </FlexContainer>
  );
};

//styles
const FlexContainer = styled.header`
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const FlexChild = styled.div`
  /* flex styles */
`;

export default Header;
