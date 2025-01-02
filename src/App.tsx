import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '@mui/material';
import LoginPage from './atoms/Login/Login';
import Dashboard from './atoms/Dashbord/Dashbord';
import ForgetPassword from './ForgetPage/ForgotPassword';

import SignUpForm from './atoms/SignUp/SignUp';
// import SignUpData from "./atoms/SignUp/SignUpData";
// import LoginDataComponent from "./atoms/Login/LoginData";
const App = () => {
  const theme: any = useTheme();
  console.log(theme, 'theme');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/dashbord" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
