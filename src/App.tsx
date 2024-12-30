import React from "react";
import { useTheme } from "@mui/material";
import LoginPage from "./atoms/Login/Login";

import SignUpForm from "./atoms/SignUp/SignUp";
const App = () => {
  const theme: any = useTheme();
  console.log(theme, "theme");
  return (
    <div>
      <LoginPage />
      <SignUpForm />
    </div>
  );
};

export default App;
