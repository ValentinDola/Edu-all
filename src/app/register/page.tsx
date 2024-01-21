import RegisterForm from "@/app/client/register";
import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Register = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/career");
  return <RegisterForm />;
};

export default Register;
