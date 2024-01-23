// Import NextResponse from the "next/server" module for handling responses
import { NextResponse } from "next/server";

// Import the PrismaClient for interacting with the database
import { PrismaClient } from '@prisma/client';

// Import the bcrypt library for password hashing
import bcrypt from 'bcrypt';

// Import the ConnectToDatabase function from the "lib/db" module
import { ConnectToDatabase } from "@/app/lib/db";

// Create an instance of the PrismaClient
const prisma = new PrismaClient();

// Define the POST endpoint for user registration
export const POST = async (req: Request) => {
    try {
        // Extract user registration data from the request body
        const { name, email, password } = await req.json();

        // Connect to the database
        await ConnectToDatabase();

        // Check for missing data in the request
        if (!name || !email || !password) 
            return NextResponse.json({ message: 'Invalid Data' }, { status: 442 });
        
        // Hash the user's password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a user object with hashed password
        const user = { name, email, password: hashedPassword };

        // Save the user to the database using Prisma
        const saved = await prisma.user.create({
            data: user
        });

        console.log(saved);

        // Return a JSON response with the saved user and HTTP status 201 (Created)
        return NextResponse.json({ user }, { status: 201 });
 
    } catch (error) {
        // Handle any errors that occur during user registration
        console.log(error);

        // Return a JSON response with an error message and HTTP status 500 (Internal Server Error)
        return NextResponse.json({ message: 'Server Error' }, { status: 500 });
    }
}
