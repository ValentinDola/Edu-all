import LoginForm from "@/app/components/login";
import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/assessment");
  return <LoginForm />;
};

export default Login;
