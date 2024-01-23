// Import the ConnectToDatabase function from the "lib/db" module
import { ConnectToDatabase } from "@/app/lib/db";

// Import NextResponse from the "next/server" module for handling responses
import { NextResponse } from "next/server";

// Import the PrismaClient for interacting with the database
import { PrismaClient } from '@prisma/client';

// Create an instance of the PrismaClient
const prisma = new PrismaClient();

// Define the POST endpoint for fetching user data by email
export const POST = async (req: Request) => {
    try {
        // Connect to the database
        await ConnectToDatabase();

        // Extract email from the request body
        const { email } = await req.json();

        // Query the database to find a user with the provided email
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            // Select only the "id" field from the user data
            select: {
                id: true
            }
        });

        // Log the user data to the console
        console.log(user);

        // Return a JSON response with the user data
        return NextResponse.json({ user });
    } catch (error) {
        // Handle any errors that occur during the process
        console.log(error);

        // Return a JSON response with an error message and HTTP status 500 (Internal Server Error)
        return NextResponse.json({ message: 'Server Error' }, { status: 500 });
    }
};
