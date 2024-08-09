import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "./providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const user = {
  title: "Sahil Malviya",
  description: "Sahil Malviya Portfolio",
};

export const metadata: Metadata = {
  title: user.title,
  description: user.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
