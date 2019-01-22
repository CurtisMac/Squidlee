import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import validationSchema from "./validationScheme";
import StyledButton from "../styles/StyledButton";
import Loader from "../modules/Loader";

const signupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
          agreeToPrivacyPolicyAndTerms: false,
          joinMailingList: false
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          serverSimulation({ email: values.email })
            .then(() => {
              //Give success message and then redirect to login page
              alert("Success!");
            })
            .catch(e => {
              alert(e);
              //Give error message and then redirect as appropriate
            })
            .finally(() => {
              actions.resetForm();
            });
        }}
      >
        {({ handleSubmit, isSubmitting, errors, touched, values }) => (
          <FlexForm onSubmit={handleSubmit}>
            <StyledTitle>Sign up</StyledTitle>

            <FlexRowContainer>
              <StyledNameInput
                type="text"
                name="firstName"
                autoComplete="name"
                placeholder="First name"
                error={touched.firstName && errors.firstName}
              />

              <StyledNameInput
                type="text"
                name="lastName"
                autoComplete="name"
                placeholder="Last name"
                error={touched.lastName && errors.lastName}
              />
            </FlexRowContainer>

            <FlexRowContainer>
              <StyledNameErrorContainer>
                <StyledErrorMessage>
                  <ErrorMessage name="firstName" />
                </StyledErrorMessage>
              </StyledNameErrorContainer>
              <StyledNameErrorContainer>
                <StyledErrorMessage>
                  <ErrorMessage name="lastName" />
                </StyledErrorMessage>
              </StyledNameErrorContainer>
            </FlexRowContainer>

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
              type="email"
              name="confirmEmail"
              autoComplete="email"
              placeholder="Confirm E-mail"
              error={touched.confirmEmail && errors.confirmEmail}
            />
            <StyledErrorContainer>
              <StyledErrorMessage>
                <ErrorMessage name="confirmEmail" />
              </StyledErrorMessage>
            </StyledErrorContainer>

            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              error={touched.password && errors.password}
            />
            <StyledErrorContainer>
              <StyledErrorMessage>
                <ErrorMessage name="password" />
              </StyledErrorMessage>
            </StyledErrorContainer>

            <StyledInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="new-password"
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <StyledErrorContainer>
              <StyledErrorMessage>
                {touched.confirmPassword && errors.confirmPassword ? (
                  <ErrorMessage name="confirmPassword" />
                ) : (
                  <StyledPasswordMessage>
                    Password must be 6 or more characters
                  </StyledPasswordMessage>
                )}
              </StyledErrorMessage>
            </StyledErrorContainer>

            <CheckboxContainer>
              <StyledCheckboxContainer>
                <Field
                  type="checkbox"
                  name="joinMailingList"
                  checked={values.joinMailingList}
                />
                <StyledLabel htmlFor="joinMailingList">
                  Join our mailing list?
                </StyledLabel>
              </StyledCheckboxContainer>

              <StyledCheckboxContainer>
                <Field
                  type="checkbox"
                  name="agreeToPrivacyPolicyAndTerms"
                  checked={values.agreeToPrivacyPolicyAndTerms}
                />

                <StyledLabel htmlFor="agreeToPrivacyPolicyAndTerms">
                  I agree to the Privacy Policy and Terms of Use
                </StyledLabel>
              </StyledCheckboxContainer>

              <StyledErrorContainer>
                <StyledErrorMessage>
                  <ErrorMessage name="agreeToPrivacyPolicyAndTerms" />
                </StyledErrorMessage>
              </StyledErrorContainer>
            </CheckboxContainer>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader color={"complementLight"} /> : "Submit"}
            </SubmitButton>
          </FlexForm>
        )}
      </Formik>
    </div>
  );
};

const FlexForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 320px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
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

const StyledNameInput = styled(StyledInput)`
  width: 50%;
  :first-child {
    margin-right: 1rem;
  }
`;

const CheckboxContainer = styled.div`
  margin-top: 0.5rem;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${props => props.theme.textBody};
  font-size: 0.95rem;
  margin: 5px 0;
`;

const StyledCheckbox = styled.input`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
`;

const StyledLabel = styled.label`
  margin-left: 10px;
`;

const StyledErrorContainer = styled.div`
  height: 1.5rem;
`;

const StyledNameErrorContainer = styled(StyledErrorContainer)`
  width: 50%;
  :last-child {
    margin-left: 1rem;
  }
`;

const StyledErrorMessage = styled.div`
  padding: 0.02rem 0 0 0.25rem;
  color: ${props => props.theme.error};
`;

const StyledPasswordMessage = styled.div`
  padding: 0.2rem 0 0 0;
  color: ${props => props.theme.complement};
`;

const SubmitButton = styled(StyledButton).attrs(props => ({
  bgColor: props.theme.complement
}))`
  font-size: 1.2rem;
  margin: 10px 0;
`;

//Development helper functions
const serverSimulation = ({ email }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "a@a.com") {
        reject(
          new Error(`There is already an account associated with ${email}.`)
        );
      }
      resolve(true);
    }, 4000);
  });

export default signupForm;
