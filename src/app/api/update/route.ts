import { ConnectToDatabase } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



export const POST = async (req: Request) => {
    try {
        const { name, email } = await req.json();   
        await ConnectToDatabase();

        
        
        const user = { name, email };
        
        const saved = await prisma.user.update({
            data: {
                name: user.name
            }
        });
        console.log(saved)
        return NextResponse.json({user}, {status: 201})
 
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Server Error' }, { status: 500 })
    }
}