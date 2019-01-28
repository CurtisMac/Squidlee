import Link from "next/link";
// import styled from "styled-components";
import StyledButton from "../styles/StyledButton";

const NavSignedOut = () => {
  return (
    <Link href="/login">
      <StyledButton bgColor={"complement"}>Login</StyledButton>
    </Link>
  );
};

export default NavSignedOut;
