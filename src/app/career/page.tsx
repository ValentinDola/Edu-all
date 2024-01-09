import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CareerComponent from ".";
import { authOptions } from "@/utils/authOptions";

const Career = () => {
  return <CareerComponent />;
};

export default Career;
