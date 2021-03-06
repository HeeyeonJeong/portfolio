import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./Styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/Global.style";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
