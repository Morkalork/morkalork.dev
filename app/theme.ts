"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5b5b69",
    },
    secondary: {
      main: "#398083",
    },
    info: {
      main: "#2c6d90",
    },
    error: {
      main: "#8e3636",
    },
    warning: {
      main: "#8e5e36",
    },
  },
};

export const theme = createTheme(themeOptions);
