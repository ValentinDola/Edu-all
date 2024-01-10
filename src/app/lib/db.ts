import { prisma } from "./prisma";


export const ConnectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log('Connected')
    } catch (error) {
        console.log(error)
        throw new Error('Unable to connect to database')
    }
}