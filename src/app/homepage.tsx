import React from "react";
import Hero from "./homesections/hero";
import Features from "./homesections/features";
import Footer from "./homesections/footer";

export default function Homepage() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
