// Import React for creating React components
import React from "react";

// Import the AssessmentForm component from the "client/assessment" directory
import { AssessmentForm } from "../client/assessment";

// Import getServerSession from next-auth for server-side session retrieval
import { getServerSession } from "next-auth";

// Import authOptions for configuring authentication
import { authOptions } from "@/app/utils/authOptions";

// Import the redirect function from next/navigation for redirection
import { redirect } from "next/navigation";

// Define the Assessment component
export default async function Assessment() {
  // Retrieve the server session using authOptions
  const session = await getServerSession(authOptions);

  // Check if there is no session, and redirect to the login page if not authenticated
  if (!session) redirect("/login");

  // Render the AssessmentForm component if authenticated
  return <AssessmentForm />;
}
