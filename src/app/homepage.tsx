// Importing React library and custom components for the homepage
import React from "react";
import Hero from "./homesections/hero";
import Features from "./homesections/features";
import Footer from "./homesections/footer";

// Functional component representing the homepage
export default function Homepage() {
  return (
    // Container div with a white background for the entire homepage
    <div className="bg-white">
      {/* Hero section component displaying a prominent section on the homepage */}
      <Hero />
      {/* Features section component showcasing key features of the application */}
      <Features />
      {/* Footer component displaying information at the bottom of the homepage */}
      <Footer />
    </div>
  );
}
