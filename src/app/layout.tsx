// Importing React library and necessary dependencies
import React from "react";
import { Providers, AuthProvider } from "./providers"; // Importing custom Providers and AuthProvider components
import type { Metadata } from "next"; // Importing Metadata type from Next.js
import { Montserrat } from "next/font/google"; // Importing Montserrat font from Google Fonts
import "./globals.css"; // Importing global styles
import { GlobalContextProvider } from "./context/store"; // Importing GlobalContextProvider component

// Configuring the Montserrat font with specific subsets, styles, and weights
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata object containing title information for the application
export const metadata: Metadata = {
  title: "Career",
};

// Asynchronous functional component representing the root layout of the application
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // HTML document structure with lang attribute set to "en" and body containing Montserrat font class
    <html lang="en" className="light">
      {/* Body of the HTML document */}
      <body className={montserrat.className}>
        {/* Custom Providers for managing application state and authentication */}
        <Providers>
          <AuthProvider>
            {/* GlobalContextProvider for managing global context throughout the application */}
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
