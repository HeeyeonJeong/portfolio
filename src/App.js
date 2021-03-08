import React from "react";
import { ThemeProvider } from "styled-components";
import { useLightMode } from "./hooks/useLightMode";
import Layout from "./components/Layout";
import GlobalStyle from "./Styles/Global.style";
import { theme } from "./Styles/theme";
import { ThemeContext } from "./context/ThemeContext";

const { darkTheme, lightTheme } = theme;

function App() {
  const { mode, toggleTheme } = useLightMode();

  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={mode === darkTheme ? darkTheme : lightTheme} />
          <Layout />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
