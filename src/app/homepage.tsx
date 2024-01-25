"use client";
// Importing React library and custom components for the homepage
import React, { useEffect } from "react";
import Hero from "./homesections/hero";
import Features from "./homesections/features";
import Footer from "./homesections/footer";
import { UnisPage } from "./components/data";

// Functional component representing the homepage
export default function Homepage() {
  useEffect(() => {
    localStorage.setItem("UnisPage", JSON.stringify(UnisPage));
  }, []);
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
