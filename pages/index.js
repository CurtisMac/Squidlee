import styled from "styled-components";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <StyledH1>Hi! This is the home page</StyledH1>
    </Layout>
  );
};

const StyledH1 = styled.h1`
  color: ${props => props.theme.textBody};
`;

export default Home;
