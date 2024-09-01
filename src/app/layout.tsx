import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/layouts/Navbar";
import React from "react";
import { sharedTitle, sharedDescription } from "@/app/shared-metadata";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://misakii.dev"),
  title: sharedTitle,
  description: sharedDescription,
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta content={sharedTitle} property="og:title" />
        <meta content={sharedDescription} property="og:description" />
        <meta content="https://misakii.dev" property="og:url" />
        <meta content="https://i.imgur.com/aeCeaGT.jpeg" property="og:image" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.imgur.com/aeCeaGT.jpeg"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="mx-5 xl:mx-0">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
