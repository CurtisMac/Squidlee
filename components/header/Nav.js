import Link from "next/link";
import styled, { withTheme } from "styled-components";
import logout from "../../firebase/logout";

//components
import StyledButton from "../styles/StyledButton";

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Link href="/login">
          <StyledButton bgColor={"complement"}>Login</StyledButton>
        </Link>
        <StyledButton
          bgColor={"complement"}
          onClick={() => {
            logout().then(r => {
              console.log(r);
            });
          }}
        >
          Logout
        </StyledButton>
      </StyledNav>
    );
  }
}

//styles
const StyledNav = styled.nav`
  color: red;
  font-size: 1.2rem;
  padding: 2px;
  margin: 10px;
`;

export default withTheme(Nav);
