import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <StyledH1>Hi! This is the home page</StyledH1>
    </div>
  );
};

const StyledH1 = styled.h1`
  color: ${props => props.theme.textBody};
`;

export default Home;
