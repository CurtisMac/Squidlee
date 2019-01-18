import React from "react";
import styled from "styled-components";

//components
import Nav from "./Nav";
import Logo from "./Logo";
import { normalize } from "path";

const Header = props => {
  return (
    <FlexContainer {...props}>
      <FlexChild>
        <Logo />
      </FlexChild>
      {!props.noNav && (
        <FlexChild>
          <Nav />
        </FlexChild>
      )}
    </FlexContainer>
  );
};

//styles
const FlexContainer = styled.header`
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props => (props.noNav ? "center" : "space-between")};
`;

const FlexChild = styled.div`
  /* flex styles */
`;

export default Header;
