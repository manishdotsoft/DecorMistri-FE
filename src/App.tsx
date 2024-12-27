import React from 'react';
import { useTheme } from '@mui/material';
import LoginPage from './atoms/Login/Login';
const App = () => {
  const theme: any = useTheme();
  console.log(theme, 'theme');
  return (
    <div>
      {/* <h1 style={{ color: theme.palette.main }}>
        Hello, React with TypeScript!
      </h1> */}
      <LoginPage />
    </div>
  );
};

export default App;
