import Link from "next/link";
import styled from "styled-components";

import { media } from "../styles/style-utils";

const Logo = () => (
  <div>
    <Link href="/">
      <Title>Squidlee</Title>
    </Link>
  </div>
);
const Title = styled.h1`
  padding: 2px;
  margin: 10px 10px 5px;
  color: coral;
  cursor: pointer;
  ${media.phone`
    color: green;
  `}
`;

export default Logo;
