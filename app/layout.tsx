import type { Metadata } from "next";
import "./globals.css";
import React from "react";
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
          <div>{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
