// Importing necessary modules and types
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { ConnectToDatabase } from "../lib/db";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

// Defining the User type
type User = {
  id: string;
  name: string;
  email: string;
  password: string | null;
  createdAt: Date;
};

// Defining the Credentials type for the input
interface Credentials extends Record<"email" | "password", string> {}

// Exporting the authentication options for NextAuth
export const authOptions: NextAuthOptions = {
  // Configuring pages
  pages: {
    signIn: "/login",
  },
  // Configuring session strategy
  session: {
    strategy: "jwt",
  },
  // Configuring authentication providers
  providers: [
    // CredentialsProvider for custom authentication
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials) {
          return null; // Handle the case where credentials are undefined
        }

        const { email, password }: any = credentials;

        try {
          await ConnectToDatabase();
          const user = await prisma.user.findUnique({
            where: { email: email },
          });

          const uPassword: any = user?.password;

          if (user && (await bcrypt.compare(password, uPassword))) return user;

          return null;
        } catch (error) {
          console.log("Error", error);
          throw error;
        }
      },
    }),
    // GoogleProvider for Google authentication
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // LinkedInProvider for LinkedIn authentication
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  // Configuring callbacks for user sign-in
  callbacks: {
    async signIn({ user, account }: any) {
      console.log(account);

      // Handling Google provider sign-in
      if (account?.provider === "google") {
        const { email }: any = user;

        await ConnectToDatabase();

        const userExist = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        try {
          const { email, name, id } = user;
          const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              name,
              id,
            }),
          });

          if (res.ok) return user;
        } catch (error) {
          console.log("Error during registration", error);
        }
      }

      // Handling LinkedIn provider sign-in
      if (account?.provider === "linkedin") {
        const { email }: any = user;

        await ConnectToDatabase();

        const userExist = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        try {
          const { email, name, id } = user;
          const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              name,
              id,
            }),
          });

          if (res.ok) return user;
        } catch (error) {
          console.log("Error during registration", error);
        }
      }
      return user;
    },
  },

  // Configuring the NextAuth secret
  secret: process.env.NEXT_AUTH_SECRET,
};


