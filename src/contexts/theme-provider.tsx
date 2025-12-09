// src/contexts/AppThemeProvider.tsx

import  { type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PerformanceProvider } from "./performance-provider";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemesProvider 
attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange storageKey="port-theme">
      <PerformanceProvider>
        {children}
      </PerformanceProvider>
    </NextThemesProvider>
  );
};
