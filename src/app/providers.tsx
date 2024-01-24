"use client";

// Importing NextUIProvider from the NextUI library for UI theming
import { NextUIProvider } from "@nextui-org/react";
// Importing SessionProvider from NextAuth for managing user authentication state
import { SessionProvider } from "next-auth/react";

// Wrapper component for providing NextUI theming to its children
export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

// Wrapper component for providing authentication session to its children
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
