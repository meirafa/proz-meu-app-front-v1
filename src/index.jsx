import './sentry';

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
