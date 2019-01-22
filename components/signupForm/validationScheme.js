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

export default validationSchema;
