import React from "react";
import ProfileIndex from ".";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <ProfileIndex />;
};

export default Profile;
