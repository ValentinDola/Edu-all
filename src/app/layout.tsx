import React from "react";
import { Providers, AuthProvider } from "./providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/store";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Career",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={montserrat.className}>
        <Providers>
          <AuthProvider>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
