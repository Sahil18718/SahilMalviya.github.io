// src/app/providers/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider attribute="class">
      {children}
    </NextThemesProvider>
  );
};
