// Import the ConnectToDatabase function from the "lib/db" module
import { ConnectToDatabase } from "@/app/lib/db";

// Import the PrismaClient instance
import { prisma } from "@/app/lib/prisma";

// Import NextResponse from the "next/server" module for handling responses
import { NextResponse } from "next/server";

// Define the POST endpoint for handling user registration
export const POST = async (request: Request) => {
    // Extract email and name from the request body
    const { email, name } = await request.json();

    // Connect to the database
    await ConnectToDatabase();

    // Check if a user with the provided email already exists
    const userExist = await prisma.user.findUnique({
        where: {
            email: email
        }            
    });

    // Create a user object with the provided email and name
    const user = { email, name };

    // If the user already exists, log the existing user and return a JSON response with the user (HTTP status 201)
    if (userExist) {
        console.log(userExist);
        return NextResponse.json({ user }, { status: 201 });
    } else {
        // If the user does not exist, save the user to the database using Prisma
        const saved = await prisma.user.create({
            data: user
        });

        console.log(saved);

        // Return a JSON response with the saved user (HTTP status 201)
        return NextResponse.json({ user }, { status: 201 });
    }
};
