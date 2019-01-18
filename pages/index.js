import styled from "styled-components";
import Layout from "../components/Layout";

import { default as Head } from "../components/Meta";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

const Home = () => {
  return (
    <React.Fragment>
      <Head title={"Squidlee"} />
      <Header />
      <Main>
        <StyledH1>Hi! This is the home page</StyledH1>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

const StyledH1 = styled.h1`
  color: ${props => props.theme.textBody};
`;
const Main = styled.main`
  height: 80vh;
`;

export default Home;
