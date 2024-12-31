import React from "react";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../features/loginSlice";
import {
  LoginContainer,
  Logo,
  StyledTextField,
  StyledButton,
} from "./LoginPage.styel";
import { Box, Typography, Link } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "./LoginSchema";
import { AppDispatch } from "../../store/store";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <LoginContainer maxWidth="xs">
      <Logo>
        <img src="#" alt="Decord-mistri Logo" style={{ marginBottom: 8 }} />
        <Typography variant="h5" fontWeight="bold">
          DECORD-MISTRI
        </Typography>
      </Logo>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(setLoginData(values)); // Corrected dispatch
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={StyledTextField}
              name="email"
              label="Email address"
              variant="outlined"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              as={StyledTextField}
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
            <StyledButton type="submit" variant="contained" fullWidth>
              Login
            </StyledButton>
          </Form>
        )}
      </Formik>

      <Box mt={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          <Link href="#" underline="none" color="inherit">
            Forgot password?
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={1}>
          <Link href="#" underline="none" color="inherit">
            Create an account
          </Link>
        </Typography>
      </Box>
    </LoginContainer>
  );
};

export default LoginPage;
