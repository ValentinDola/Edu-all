
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";



    export const session = async () => await getServerSession(authOptions);
