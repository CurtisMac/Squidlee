import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = props => {
  return (
    <LoadingDots>
      <Dot color={props.color} />
      <Dot color={props.color} />
      <Dot color={props.color} />
    </LoadingDots>
  );
};

const LoadingDots = styled.div`
  text-align: center;
  width: 100%;
`;

const Bounce = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(1, 1);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
`;

const Dot = styled(LoadingDots)`
  animation: ${Bounce} 1.5s infinite ease-in-out;
  background-color: ${props => props.theme[props.color]};
  border-radius: 10px;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 3px;

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

export default Loader;
