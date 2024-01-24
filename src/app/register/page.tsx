// Importing the RegisterForm component from the specified path
import RegisterForm from "@/app/client/register";

// Importing authentication options from the specified path
import { authOptions } from "@/app/utils/authOptions";

// Importing getServerSession and redirect functions from next-auth and next/navigation respectively
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// Async function for the Register component
const Register = async () => {
  // Attempting to retrieve the server session using authentication options
  const session = await getServerSession(authOptions);

  // Checking if a session exists, and redirecting to "/career" if true
  if (session) redirect("/career");

  // Returning the RegisterForm component if no session exists
  return <RegisterForm />;
};

// Exporting the Register component as the default export
export default Register;

// Comments:

// Importing RegisterForm Component:

// Importing the RegisterForm component from the specified path.
// Importing Auth Options:

// Importing authentication options (authOptions) from the specified path.
// Importing Functions:

// Importing the getServerSession function from next-auth.
// Importing the redirect function from next/navigation.
// Register Component:

// Defining an asynchronous function named Register for the registration page.
// Server Session Check:

// Attempting to retrieve the server session using the imported authOptions.
// Redirect Check:

// Checking if a session exists, and redirecting to "/career" if true.
// Returning RegisterForm:

// Returning the RegisterForm component if no session exists.
// Default Export:

// Exporting the Register component as the default export.
// This code appears to handle the registration process, checking for an existing session and redirecting accordingly. If there is no session, it renders the RegisterForm component.
