import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode') as 'light' | 'dark';
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home colorMode={colorMode} />
    </ThemeProvider>
  );
}
