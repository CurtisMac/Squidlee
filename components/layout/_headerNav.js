import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  color: red;
  font-size: 20px;
`;

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledNav>
    );
  }
}

export default Nav;
