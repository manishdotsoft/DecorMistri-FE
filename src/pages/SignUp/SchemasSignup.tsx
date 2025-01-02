import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),

  lastName: Yup.string().min(1).max(25).required("Please enter your last name"),

  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),
});
