import { ConnectToDatabase } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/utils/authOptions";


export const POST = async (req: Request) => {
    try {
        const { bio, primarySkill, secondarySkill, interest, degree, school, graduationYear } = await req.json();   
        await ConnectToDatabase();
        const session = await getServerSession(authOptions);
        

        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }

        

        
        
        const profile = { bio, primarySkill, secondarySkill, interest, degree, school, graduationYear };
        
        const profileCreated = await prisma.profile.create({
            data: {
                profile
            },
        });
        console.log(profileCreated)
        return NextResponse.json({profileCreated}, {status: 201})
 
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Server Error' }, { status: 500 })
    }
}