import React from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import AppContainer from './components/appContainer/AppContainer';
// Stlye
import GlobalStyle from './components/globalStyle/GlobalStyle';
import { useDarkMode } from './hooks/useDarkMode';
import { darkTheme, lightTheme } from './styles/theme';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className='app'>
        <GlobalStyle />
        <AppContainer theme={theme} themeToggler={themeToggler} />
      </div>
    </ThemeProvider>
  );
};

export default App;
