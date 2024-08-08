import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const user = {
  title: "Sahil Malviya",
  description: "Sahii Malviya Portfolio",
};

export const metadata: Metadata = {
  title: user.title,
  description: user.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
