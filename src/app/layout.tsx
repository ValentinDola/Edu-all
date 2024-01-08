import React, { useEffect } from "react";
import { Providers, AuthProvider } from "./providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/navigation";
import { GlobalContextProvider } from "./context/store";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Career",
};

type DataType = {
  map(arg0: (item: any, i: any) => React.JSX.Element): React.ReactNode;
  name: String;
  nickname: String;
  location: String;
  logo: String;
  icon: String;
  website: String;
  type: String;
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
