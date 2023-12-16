import Image from "next/image";
import React from "react";
import Cookie from "./cookie";
import Navigation from "./navigation";
import Homepage from "./homepage";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Homepage />
      <Cookie />
    </div>
  );
}
