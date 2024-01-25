"use client";

// Importing React, useEffect, useState from React library
import React, { useEffect, useState } from "react";

// Importing NavigationIndex component from the specified path
import NavigationIndex from "../navigation";

// Importing useSession from next-auth/react for session management
import { useSession } from "next-auth/react";

// Importing Spinner, Tab, and Tabs from @nextui-org/react for UI components
import { Spinner, Tab, Tabs } from "@nextui-org/react";

// Importing useGlobalContext hook from context/store for global state management
import { useGlobalContext } from "../context/store";

// Importing specific components related to results
import Careers from "./client/careers";
import Majors from "./client/majors";
import Colleges from "./client/college";

// Defining the Result functional component
export default function Result() {
  // Using the useSession hook to access session data
  const { data } = useSession();

  // Using the useGlobalContext hook to access global context data
  const { assData } = useGlobalContext();

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // useEffect to update assessment data and loading status
  useEffect(() => {
    // Simulating a delay of 5 seconds for loading demonstration
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [assData]);

  // JSX structure for the Result component
  return (
    <>
      {/* Rendering the NavigationIndex component */}
      <NavigationIndex />

      {/* Main section containing loading spinner or result content */}
      <section className="mt-[70px]">
        {loading ? (
          // Loading state: Displaying a spinner
          <main className="flex justify-center items-center h-full w-full mt-20 ">
            <Spinner size="lg" />
          </main>
        ) : (
          // Result state: Displaying result content
          <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
            <div className=" max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
              <div className="border-solid border-2 border-[#00aeef] mt-4 col-span-2">
                {/* Header with a dynamic title */}
                <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
                  <h1 className="text-white font-semibold">
                    {`My Majors, My Colleges, My Careers`}
                  </h1>
                </div>
                {/* Content area with tabs for Majors, Colleges, and Careers */}
                <div className="p-5">
                  <Tabs className="px-8 mx-4 " aria-label="Options">
                    {/* Tab for My Majors */}
                    <Tab key="major" title="My Majors">
                      <Majors />
                    </Tab>
                    {/* Tab for My Colleges */}
                    <Tab key="college" title="My Colleges">
                      <Colleges />
                    </Tab>
                    {/* Tab for My Careers */}
                    <Tab key="career" title="My Careers">
                      <Careers />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </main>
        )}
      </section>
    </>
  );
}

// Comments:

// React Imports:

// Importing React, useEffect, and useState from the React library.
// Navigation Component:

// Importing the NavigationIndex component from the specified path.
// Session Management:

// Importing useSession from next-auth/react for session management.
// UI Components:

// Importing Spinner, Tab, and Tabs from @nextui-org/react for UI components.
// Global State Management:

// Importing useGlobalContext hook from ../context/store for global state management.
// Component Imports:

// Importing specific components (Careers, Majors, Colleges) related to the results.
// Result Component:

// Defining the Result functional component.
// Session and Global Context Hooks:

// Using useSession and useGlobalContext hooks to access session and global context data.
// State Management:

// Using state to manage loading status and store assessment data.
// useEffect for Data Update:

// Using useEffect to update assessment data and loading status after a delay of 5 seconds (for demonstration purposes).
