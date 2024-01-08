import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { ConnectToDatabase } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await ConnectToDatabase();
                    const user = await prisma.user.findUnique({
                        where: { email: email }
                    });
                    if (!user) return null;
                    const passwordMatch = bcrypt.compare(password, user.password);
                    if (!passwordMatch) return null;

                } catch (error) {
                    console.log('Error', error);
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
        })

    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log(account)
            if (account?.provider === "google") {

                const { email} = user;

                await ConnectToDatabase();

                const userExist = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })

                
                    try {
                        const { email, name, id } = user;
                        const res = await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email, name, id
                            }),
                        });

                        if (res.ok)
                            return user



                    } catch (error) {
                        console.log("Error during registration", error);
                    }
            }

            if (account?.provider === "linkedin") {

                const { email } = user;

                await ConnectToDatabase();

                const userExist = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })

                
                    try {
                        const { email, name, id } = user;
                        const res = await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email, name, id
                            }),
                        });

                        if (res.ok)
                            return user



                    } catch (error) {
                        console.log("Error during registration", error);
                    }
            }
            return user;
        }
    },

    secret: process.env.NEXT_AUTH_SECRET

}