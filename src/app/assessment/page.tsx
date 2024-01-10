import React from "react";
import Component from "./assessment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Assessment() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <Component />;
}
