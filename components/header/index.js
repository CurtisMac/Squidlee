import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";

import Logo from "./Logo";
import NavSignedIn from "./NavSignedIn";
import NavSignedOut from "./NavSignedOut";

const Header = props => {
  return (
    <FlexContainer {...props}>
      <div>
        <Logo />
      </div>
      {!props.noNav && (
        <div>
          <AppContext.Consumer>
            {value =>
              value.state.user ? (
                <NavSignedIn user={value.state.user} />
              ) : (
                <NavSignedOut />
              )
            }
          </AppContext.Consumer>
        </div>
      )}
    </FlexContainer>
  );
};

//styles
const FlexContainer = styled.header`
  /* background: transparent; */
  background: ${props => props.theme.gradient};
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${props => (props.noNav ? "center" : "space-between")};
`;

export default Header;
