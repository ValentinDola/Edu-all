import Image from "next/image";
import React from "react";

import Cookie from "./cookie";
import Navigation from "./navigation";
import Homepage from "./homepage";
import Dashboard from "./career/dashboard/[careerId]";

export default function Home() {
  return <Homepage />;
}
