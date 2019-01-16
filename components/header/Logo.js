import React from "react";
import styled from "styled-components";

import { media } from "../styles/style-utils";

const Logo = () => {
  return <Title>Squidlee</Title>;
};

const Title = styled.h1`
  padding: 2px;
  margin: 10px 10px 5px;
  color: coral;
  ${media.phone`
    color: green;
  `}
`;

export default Logo;
