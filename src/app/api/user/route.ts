import { ConnectToDatabase } from "@/app/lib/db";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request : Request) => {
    const {email, name} = await request.json();
    await ConnectToDatabase();
    
    const userExist = await prisma.user.findUnique({
        where: {
            email: email
        }            
    })
    const user = { email, name };
    
    if (userExist) {
        console.log(userExist)
        return NextResponse.json({user}, {status: 201})
    } else {
        const saved = await prisma.user.create({
        data: user
        })
        console.log(saved)
        return NextResponse.json({user}, {status: 201})
    }
    
}