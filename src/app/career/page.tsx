import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CareerComponent from ".";

const Career = async () => {
  return <CareerComponent />;
};

export default Career;
