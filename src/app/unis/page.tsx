import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UnisComponent from ".";

const Unis = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return <UnisComponent />;
};

export default Unis;
