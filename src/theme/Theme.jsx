// #1976D2 blue
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkMode = createTheme({
  palette: {
    primary: {
      main: "#64ffda",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#64ffda",
      contrastText: "#ffffff",
    },
  },
});

const Theme = (props) => {
  const { children } = props;

  return <ThemeProvider theme={darkMode}>{children}</ThemeProvider>;
};

export default Theme;
