import styled from "styled-components";

import { default as Head } from "../components/Meta";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

const Home = () => {
  return (
    <React.Fragment>
      <Head title={"Squidlee"} />
      <Container>
        <Header />
        <Main>
          <StyledH1>Hi! This is the home page</StyledH1>
        </Main>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  background: ${props => props.theme.gradient};
`;
const StyledH1 = styled.h1`
  color: ${props => props.theme.textBody};
`;
const Main = styled.main`
  height: 85vh;
`;

export default Home;
