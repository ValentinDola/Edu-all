// Importing React library and necessary components
import React from "react";
import Homepage from "./homepage"; // Importing the Homepage component
import NavigationIndex from "./navigation"; // Importing the NavigationIndex component

// Functional component representing the Home page of the application
export default function Home() {
  return (
    <>
      {/* NavigationIndex component for rendering the navigation bar */}
      <NavigationIndex />
      {/* Homepage component for rendering the main content of the Home page */}
      <Homepage />
    </>
  );
}
