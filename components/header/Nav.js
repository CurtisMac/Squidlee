import Link from "next/link";
import styled, { withTheme } from "styled-components";

//components
import StyledButton from "../styles/StyledButton";

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Link href="/login">
          <StyledButton bgColor={this.props.theme.complement}>
            Login
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

export default withTheme(Nav);
