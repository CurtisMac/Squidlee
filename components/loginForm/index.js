import { Formik, Field, ErrorMessage } from "formik";
import Link from "next/link";
import styled from "styled-components";

import validationSchema from "./validationSchema";
import StyledButton from "../styles/StyledButton";
import login from "../../firebase/login";

const LoginForm = () => (
  <React.Fragment>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        login(values.email, values.password)
          .then(s => {
            if (s) {
              //should redirect to user dashboard
              alert("success");
            }
          })
          .catch(e => alert(e))
          .finally(() => actions.resetForm());
      }}
    >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
        <FlexForm onSubmit={handleSubmit}>
          <StyledTitle>Login</StyledTitle>
          <StyledInput
            type="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail"
            error={touched.email && errors.email}
          />
          <StyledErrorContainer>
            <StyledErrorMessage>
              <ErrorMessage name="email" />
            </StyledErrorMessage>
          </StyledErrorContainer>
          <StyledInput
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            error={touched.password && errors.password}
          />
          <StyledErrorContainer>
            <StyledErrorMessage>
              <ErrorMessage name="password" />
            </StyledErrorMessage>
          </StyledErrorContainer>

          <PWLink>
            <Link href="/signup">
              <StyledLink> Forgot Password?</StyledLink>
            </Link>
          </PWLink>

          <SubmitButton
            disabled={isSubmitting}
            type="submit"
            bgColor={"complement"}
          >
            Submit
          </SubmitButton>
        </FlexForm>
      )}
    </Formik>
    <SignupLink>
      <p>
        Don't have an account?
        <Link href="/signup">
          <StyledLink> Signup</StyledLink>
        </Link>
      </p>
    </SignupLink>
  </React.Fragment>
);

const FlexForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 320px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const StyledTitle = styled.h2`
  color: ${props => props.theme.textBody};
  text-align: center;
  margin: 5px 0 10px 0;
`;

const StyledInput = styled(Field)`
  padding: 7px;
  margin: 0;
  border: 2px solid ${props => (props.error ? props.theme.error : "grey")};
  border-radius: 5px;
`;

const StyledErrorContainer = styled.div`
  height: 1.5rem;
`;

const StyledErrorMessage = styled.div`
  padding: 0.02rem 0 0 0.25rem;
  color: ${props => props.theme.error};
`;

const SubmitButton = styled(StyledButton)`
  font-size: 1.2rem;
  margin: 1.5rem 0;
`;

const SignupLink = styled.div`
  color: ${props => props.theme.textBody};
  font-size: 1.1rem;
  text-align: center;
`;

const PWLink = styled.div`
  color: ${props => props.theme.textBody};
  font-size: 1rem;
  text-align: right;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.complement};
  cursor: pointer;
`;

export default LoginForm;
