import LoginForm from "@/components/login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/career");
  return <LoginForm />;
};

export default Login;
