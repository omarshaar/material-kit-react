/* eslint-disable perfectionist/sort-imports */
import { useEffect } from 'react';
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { handleLogin } from './utils/handle-login';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const navigate = useNavigate();
  useEffect(()=>{
    handleLogin((isLoggedIn)=> {
      if (!isLoggedIn) navigate('/login', { replace: true });
    });
  },[]);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
