import { ConnectToDatabase } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: { json: () => PromiseLike<{ name: any; email: any; }> | { name: any; email: any; }; }) => {
    const {email, name} = await request.json();
    await ConnectToDatabase();
    const user = { email, name };
    const saved = await prisma.user.create({
        data: user
    })
    console.log(saved)
        return NextResponse.json({user}, {status: 201})
}