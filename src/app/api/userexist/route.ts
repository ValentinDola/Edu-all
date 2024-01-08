import { ConnectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    try {
        await ConnectToDatabase();
        const { email } = await req.json();
        const user = prisma.user.findUnique({
            where: {
                email : email
            },
            select: {
                id: true
            }
        })
        console.log(user);
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Server Error' }, { status: 500 })
    }
}