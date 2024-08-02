import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import { primaryFont } from "@/fonts";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "The Ruckus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${primaryFont.className} text-white bg-black`}>
        <MantineProvider defaultColorScheme="dark">
          <Nav />
          <div>{children}</div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
