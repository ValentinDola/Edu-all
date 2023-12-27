import { ConnectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    try {
        const { name, email, password } = await req.json();   
        await ConnectToDatabase();

        if (!name || !email || !password) 
            return NextResponse.json({ message: 'Invalide Data' }, { status: 442 })
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = { name, email, password: hashedPassword }
        const saved = await prisma.user.create({
            data: user
        });
        console.log(saved)
        return NextResponse.json({user}, {status: 201})
 
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Server Error' }, { status: 500 })
    }
}