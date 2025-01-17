import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Darshil Gajul | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
     
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
