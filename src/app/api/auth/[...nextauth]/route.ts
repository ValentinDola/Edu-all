// Import the authentication options from the "authOptions" module in the "utils" directory
import { authOptions } from "@/app/utils/authOptions";

// Import the NextAuth module
import NextAuth from "next-auth/next";

// Use the authOptions to configure NextAuth
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
