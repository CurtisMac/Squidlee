import styled from "styled-components";
import { default as Head } from "../components/Meta";
import Header from "../components/header/index";
import SignupForm from "../components/signupForm/index";

const signup = () => {
  return (
    <React.Fragment>
      <Head title={"Signup"} />
      <Container>
        <Header noNav />
        <main>
          <SignupForm />
        </main>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

export default signup;
