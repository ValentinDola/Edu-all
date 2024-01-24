// Importing React library
import React from "react";
// Importing the ProfileIndex component from the specified path
import ProfileIndex from "../client/profile";
// Importing the getServerSession function and authOptions from the specified paths
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
// Importing the redirect function from the next/navigation module
import { redirect } from "next/navigation";

// Async function for handling the Profile page
const Profile = async () => {
  // Fetching the user session using getServerSession with the provided authOptions
  const session = await getServerSession(authOptions);

  // Checking if a session does not exist
  if (!session) {
    // Redirecting to the "/login" page if there is no session
    redirect("/login");
  }

  // Rendering the ProfileIndex component
  return <ProfileIndex />;
};

// Exporting the Profile component as the default export
export default Profile;

// Comments:

// Importing Dependencies:

// Importing React for building the component.
// Importing the ProfileIndex component from the specified path.
// Importing getServerSession and authOptions from their respective paths.
// Importing the redirect function from the next/navigation module.
// Profile Function:

// Defining an asynchronous function named Profile to handle the logic for the Profile page.
// Fetching Server Session:

// Using getServerSession to fetch the user session on the server side, based on the provided authOptions.
// Checking Session Existence:

// Checking if a user session does not exist.
// Redirecting if No Session:

// If there is no session, redirecting the user to the "/login" page using the redirect function.
// Rendering the ProfileIndex:

// If a session exists or after redirection, rendering the ProfileIndex component.
// Default Export:

// Exporting the Profile component as the default export.
// This code appears to handle the logic for the Profile page, ensuring that a user is redirected to the login page if no session is present. If a session exists, the ProfileIndex component is rendered.
