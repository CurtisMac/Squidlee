import Link from "next/link";
import styled from "styled-components";

const MainNav = styled.nav`
  color: red;
`;

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    );
  }
}

export default Nav;
