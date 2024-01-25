"use client";

// Import necessary dependencies and modules
import React, { useEffect, useState } from "react";
import NavigationIndex from "../navigation";
import { signOut, useSession } from "next-auth/react";
import { useGlobalContext } from "../context/store";
import { Spinner } from "@nextui-org/react";

// ProfileIndex component definition
export default function ProfileIndex() {
  // Hooks for managing session data and global context
  const { data } = useSession();
  const { assData } = useGlobalContext();

  // State for managing loading status and data existence
  const [loading, setLoading] = useState(false);
  const [weHaveData, setHaveData] = useState(false);

  // Effect hook to handle loading and data state based on assessment data
  useEffect(() => {
    setLoading(true);

    // Transforming data to ensure it's an array
    const data: any = localStorage.getItem(JSON.parse("Data"));

    // Check if transformed data has length greater than 0
    if (data.length > 0) setHaveData(true);

    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // Component rendering
  return (
    <>
      {/* Navigation Component */}
      <NavigationIndex />

      {/* Main Section */}
      <section className="mt-[70px]">
        {loading ? (
          // Display loading spinner while data is being fetched
          <main className="flex justify-center items-center h-full w-full mt-20 ">
            <Spinner size="lg" />
          </main>
        ) : (
          // Display content once loading is complete
          <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
            {/* User Information */}
            <div className="text-2xl font-bold">{`${data?.user?.name}`} </div>

            {/* Information about matched majors, schools, and careers */}
            <div className="p-2">
              Based on your survey, we have matched you with the Majors, Schools
              and Careers below.
            </div>

            {/* Actions Section */}
            <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
              {/* Container for actions */}
              <div className="border-solid border-2 border-[#00aeef] mt-4 flex justify-center items-center ">
                <div className="grid grid-cols-1">
                  {/* List of Actions */}
                  <ul className="text-center py-4">
                    {/* Show previous results link */}
                    <li>
                      {weHaveData ? (
                        <a
                          href="/result"
                          className="text-base hover:underline hover:text-[#00aeef]"
                        >
                          Show previous results, no change in input
                        </a>
                      ) : (
                        <p className="text-base">
                          Show previous results, no change in input
                        </p>
                      )}
                    </li>

                    {/* Take an assessment link */}
                    <li>
                      <a
                        href="/assessment"
                        className="text-base hover:underline hover:text-[#00aeef]"
                      >
                        Take an assessment
                      </a>
                    </li>

                    {/* Log-out link with signOut function */}
                    <li>
                      <a
                        onClick={() =>
                          signOut({
                            redirect: true,
                            callbackUrl: `${window.location.origin}/login`,
                          })
                        }
                        className="text-base hover:underline hover:text-[#00aeef] cursor-pointer"
                      >
                        Log-out
                      </a>
                    </li>
                  </ul>
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

// Imports:

// All necessary dependencies and modules are imported at the beginning of the file.
// State and Hooks:

// The component uses useState and useEffect hooks to manage state and side effects.
// Loading and Data State:

// The component manages loading state and checks for the existence of assessment data.
// Effect Hook:

// The useEffect hook handles loading, transforms data, and updates the data state.
// Navigation Component:

// The NavigationIndex component is imported and used for navigation.
// Conditional Rendering:

// The component conditionally renders content based on the loading status.
// Profile Information:

// User information and details about matched majors, schools, and careers are displayed.
// Actions Section:

// A section with links to show previous results, take an assessment, and log-out is provided.
// Comments:

// Comments are added throughout the code for better readability and understanding.
