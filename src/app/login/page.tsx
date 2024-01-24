// Importing the LoginForm component from the specified path
import LoginForm from "@/app/client/login";
// Importing authOptions and getServerSession functions from the specified paths
import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
// Importing the redirect function from the next/navigation module
import { redirect } from "next/navigation";

// Async function for handling the login page
const Login = async () => {
  // Fetching the session using getServerSession with the provided authOptions
  const session = await getServerSession(authOptions);

  // Checking if a session exists
  if (session) {
    // Redirecting to the "/assessment" page if a session is present
    redirect("/assessment");
  }

  // Rendering the LoginForm component
  return <LoginForm />;
};

// Exporting the Login component as the default export
export default Login;

// Comments:

// Importing Dependencies:

// Importing the LoginForm component from the specified path.
// Importing authOptions and getServerSession functions from the specified paths.
// Importing the redirect function from the next/navigation module.
// Login Function:

// Defining an asynchronous function named Login to handle the login page logic.
// Fetching Server Session:

// Using getServerSession to fetch the user session on the server side, based on the provided authOptions.
// Checking Session Existence:

// Checking if a user session exists.
// Redirecting if Session Exists:

// If a session is present, redirecting the user to the "/assessment" page using the redirect function.
// Rendering the LoginForm:

// If there is no session or after redirection, rendering the LoginForm component.
// Default Export:

// Exporting the Login component as the default export.
// Overall, the code appears to handle the login logic by checking for an existing session and redirecting the user accordingly. The LoginForm component is rendered if no session is present.
