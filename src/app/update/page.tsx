import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UpdateForm from "@/components/update";

const Update = async () => {
  return <UpdateForm />;
};

export default Update;
