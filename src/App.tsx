import React from "react";
import { useTheme } from "@mui/material";
import SignUpForm from "./atoms/SignUp/SignUp";
const App = () => {
  const theme: any = useTheme();
  console.log(theme, "theme");
  return (
    <div>
      <h1 style={{ color: theme.palette.main }}>
        Hello, React with TypeScript!
      </h1>
      <SignUpForm />
    </div>
  );
};

export default App;
