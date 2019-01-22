import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Required")
    .email("Not a valid email address"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Must be at least 6 characters")
    .max(20, "Cannot be more than 20 characters")
});

export default validationSchema;
