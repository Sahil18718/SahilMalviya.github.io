import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "./providers/theme-provider"; // Correct import

const inter = Inter({ subsets: ["latin"] });

const user = {
  title: "Sahil Malviya",
  description: "Sahil Malviya Portfolio",
};

export const metadata: Metadata = {
  title: user.title,
  description: user.description,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
