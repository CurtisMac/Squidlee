import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup
    .string()
    .required("Required")
    .email("Not a valid email address"),
  confirmEmail: yup
    .string()
    .required("Required")
    .email("Not a valid email address")
    .test("email-match", "Email does not match", function(value) {
      return this.parent.email === value;
    }),
  password: yup
    .string()
    .required("Required")
    .min(6, "Must be at least 6 characters")
    .max(20, "Cannot be more than 20 characters"),
  confirmPassword: yup
    .string()
    .required("Required")
    .test("password-match", "Passwords do not match", function(value) {
      return this.parent.password === value;
    }),
  agreeToPrivacyPolicyAndTerms: yup
    .boolean()
    .test(
      "acceptPrivacyPolicyandTerms",
      "You must agree to create an account",
      value => value === true
    )
});

const signupForm = () => {
  return (
    <div>
      <h1>Signup</h1>
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
              console.log(values);
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
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="text"
              name="firstName"
              autoComplete="name"
              placeholder="First name"
            />
            <ErrorMessage name="firstName" />
            <br />
            <Field
              type="text"
              name="lastName"
              autoComplete="name"
              placeholder="Last name"
            />
            <ErrorMessage name="lastName" />
            <br />
            <Field
              type="email"
              name="email"
              autoComplete="email"
              placeholder="E-mail"
            />
            <ErrorMessage name="email" />
            <br />
            <Field
              type="email"
              name="confirmEmail"
              autoComplete="email"
              placeholder="Confirm E-mail"
            />
            <ErrorMessage name="confirmEmail" />
            <br />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
            />
            <ErrorMessage name="password" />
            <br />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="new-password"
            />
            <ErrorMessage name="confirmPassword" />
            <br />
            <Field type="checkbox" name="agreeToPrivacyPolicyAndTerms" />
            <label htmlFor="agreeToPrivacyPolicyAndTerms">
              {" "}
              I have read and agree to the privacy policy and terms of use
            </label>
            <ErrorMessage name="agreeToPrivacyPolicyAndTerms" />
            <br />
            <Field type="checkbox" name="joinMailingList" />
            <label htmlFor="joinMailingList"> Join our mailing list?</label>
            <ErrorMessage name="joinMailingList" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {isSubmitting && <div>loader</div>}
          </form>
        )}
      </Formik>
      {/* Loader here */}
    </div>
  );
};

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
    }, 1000);
  });

export default signupForm;
