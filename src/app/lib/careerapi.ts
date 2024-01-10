import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllCareer = async () => {
    const careers = prisma.career.findMany();

    return careers;
}