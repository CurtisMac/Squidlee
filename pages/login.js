import styled from "styled-components";

import { default as Head } from "../components/Meta";
import Header from "../components/header/index";
import LoginForm from "../components/loginForm/index";

const login = () => {
  return (
    <React.Fragment>
      <Head title={"Login"} />
      <Container>
        <Header />
        <main>
          <LoginForm />
        </main>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default login;
