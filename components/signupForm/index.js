import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const signupForm = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik>
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default signupForm;
