import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/mainTheme";
import GlobalStyle from "theme/GlobalStyle";
import Navbar from "components/organisms/Navbar/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
