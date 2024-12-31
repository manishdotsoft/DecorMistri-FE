import React from "react";
import { useTheme } from "@mui/material";
import LoginPage from "./atoms/Login/Login";

import SignUpForm from "./atoms/SignUp/SignUp";
import SignUpData from "./atoms/SignUp/SignUpData";
import LoginDataComponent from "./atoms/Login/LoginData";
const App = () => {
  const theme: any = useTheme();
  console.log(theme, "theme");
  return (
    <div>
      <LoginPage />
      <SignUpForm />
      <SignUpData />
      <LoginDataComponent />
    </div>
  );
};

export default App;
