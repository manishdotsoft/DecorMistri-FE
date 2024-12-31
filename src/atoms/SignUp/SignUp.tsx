import React from "react";
import { Grid, Link, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { signUpSchema } from "./SchemasSignup";
import { theme } from "../../thems/primitives/theme";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setSignUpData } from "../../features/signUpSlice";

import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  StyledTextField,
  StyledTypography,
  StyledButton,
  StyledContainerWrapper,
  GooleSignUp,
} from "./SignUp.style";

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
}

const initialValues: SignUpFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        dispatch(setSignUpData(values));
        console.log("Form Submitted:", values);
        actions.resetForm();
      },
    });

  const isAnyFieldEmpty = Object.values(values).some((value) => value === "");

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledContainerWrapper>
          {/* @ts-ignore */}
          <StyledForm component="form" onSubmit={handleSubmit}>
            <StyledHeader>
              <Typography variant="h5">Sign Up</Typography>
              <Typography variant="h5">DECOR MISTRI</Typography>
              <Typography variant="body1" color="textSecondary">
                Create your free account to get started
              </Typography>
            </StyledHeader>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  label="First name"
                  variant="outlined"
                  type="text"
                  id="firstName"
                  size="small"
                  name="firstName"
                  autoComplete="off"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                />
                {errors.firstName && touched.firstName && (
                  <StyledTypography>{errors.firstName}</StyledTypography>
                )}
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  label="Last name"
                  variant="outlined"
                  type="text"
                  id="lastName"
                  size="small"
                  name="lastName"
                  autoComplete="off"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                />
                {errors.lastName && touched.lastName && (
                  <StyledTypography>{errors.lastName}</StyledTypography>
                )}
              </Grid>
            </Grid>
            <StyledTextField
              fullWidth
              label="Work email"
              variant="outlined"
              size="small"
              type="email"
              id="email"
              autoComplete="off"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
            />
            {errors.email && touched.email && (
              <StyledTypography>{errors.email}</StyledTypography>
            )}
            <StyledTextField
              fullWidth
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              id="password"
              autoComplete="off"
              name="password"
              placeholder="Input your password..."
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
            />
            {errors.password && touched.password && (
              <StyledTypography>{errors.password}</StyledTypography>
            )}
            <StyledTextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              size="small"
              type="password"
              id="confirm_password"
              autoComplete="off"
              name="confirm_password"
              placeholder="Input your confirm password..."
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.confirm_password && Boolean(errors.confirm_password)
              }
            />
            {errors.confirm_password && touched.confirm_password && (
              <StyledTypography>{errors.confirm_password}</StyledTypography>
            )}
            <StyledButton
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={isAnyFieldEmpty}
            >
              Sign Up
            </StyledButton>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link sx={{ cursor: "pointer", color: "blue" }}>Sign in</Link>
              </Typography>
            </Box>
            <GooleSignUp>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s"
                alt="goole-image"
                style={{ height: "34px" }}
              />
              {/* continue with google */}
              <Typography sx={{ fontSize: "0.8rem" }}>
                Continue with Google
              </Typography>
            </GooleSignUp>
          </StyledForm>
        </StyledContainerWrapper>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default SignUpForm;
