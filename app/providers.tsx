"use client";
import { ThemeProvider, useTheme } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import { theme } from "./theme";

type Props = {
  children: ReactNode;
};
export const Providers = ({ children }: Props) => {
  const reactTheme = useTheme();
  const allThemes = {
    ...reactTheme,
    ...theme,
  };

  return (
    <ThemeProvider theme={allThemes}>
      <AppRouterCacheProvider>
        <main>{children}</main>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
};
