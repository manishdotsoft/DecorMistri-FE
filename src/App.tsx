import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '@mui/material';
import LoginPage from './atoms/Login/Login';
import ForgetPassword from './ForgetPage/ForgotPassword';
import SignUpForm from './atoms/SignUp/SignUp';

const App = () => {
  const theme: any = useTheme();
  console.log(theme, 'theme');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
