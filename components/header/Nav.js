import Link from "next/link";
import styled from "styled-components";

//components
import StyledButton from "../styles/StyledButton";

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Link href="/login">
          <StyledButton bgColor={"green"}>Login</StyledButton>
        </Link>
        <Link href="/signup">
          <StyledButton bgColor={"blue"} solid>
            Signup
          </StyledButton>
        </Link>
      </StyledNav>
    );
  }
}

//styles
const StyledNav = styled.nav`
  color: red;
  font-size: 1.3rem;
`;

export default Nav;
