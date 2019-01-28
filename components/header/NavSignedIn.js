import Link from "next/link";
import styled from "styled-components";

import logout from "../../firebase/logout";
import StyledButton from "../styles/StyledButton";

class NavSignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: false };
    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  toggle() {
    if (this.state.dropDown === false) {
      this.open();
      document.addEventListener("click", this.close);
    }
  }

  open() {
    this.setState({ dropDown: true });
  }
  close() {
    this.setState({ dropDown: false });
    document.removeEventListener("click", this.close);
  }

  render() {
    return (
      <Container
        onMouseOver={this.open}
        onMouseOut={this.close}
        onClick={this.toggle}
      >
        <DisplayName>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              d="M24 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm0 4c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"
              fill="#ffffff"
              stroke="#ffffff"
            />
          </svg>
          <strong>{this.props.user}</strong>
        </DisplayName>
        <DropDown dropDown={this.state.dropDown}>
          <Triangle />
          <Body>
            <Link href="/login">
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Link href="/login">
              <MenuItem>Account</MenuItem>
            </Link>
            <StyledButton
              solid
              bgColor={"secondary"}
              onClick={() => console.log("clicked")}
            >
              Logout
            </StyledButton>
          </Body>
        </DropDown>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 1rem 1.5rem;
`;

const DisplayName = styled.div`
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
`;

const DropDown = styled.div`
  display: ${props => (props.dropDown ? "block" : "none")};
  position: absolute;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  margin: 0 auto;
`;

const Body = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  background-color: white;
  border-radius: 3px;
  padding: 0.75rem 0.25rem 0.25rem;
`;

const MenuItem = styled.a`
  text-decoration: none;
`;

export default NavSignedIn;
