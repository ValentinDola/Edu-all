// Importing React, useEffect, and useState from React library
import React, { useEffect, useState } from "react";

// Importing useGlobalContext hook from the specified path for global state management
import { useGlobalContext } from "../../context/store";

// Importing Unis data from the specified path
import { Unis } from "@/app/components/data";

// Defining the Colleges functional component
export default function Colleges() {
  // Using the useGlobalContext hook to access global context data
  const { assData, data } = useGlobalContext();

  // State to store matched universities
  const [unis, setUnis]: any = useState([]);

  // useEffect to update the unis state based on the assessment data
  useEffect(() => {
    // Transforming the assessment data into an array if it's not already
    const transformedData = Array.isArray(assData) ? assData : [assData];

    // Extracting type and region from transformed data
    const type = transformedData.map((item) => item.type);
    const region = transformedData.map((item) => item.region);

    // Filtering universities based on type and region
    const matchedUnis = Unis.filter((uni) => {
      // Split the location string by comma and trim the parts
      const locationParts = uni.location.split(",").map((part) => part.trim());

      // Filtering out the region from location parts
      const filteredLocationParts = locationParts.filter(
        (part) => part !== region.toString()
      );

      // Joining the filtered parts back into a string
      const filteredLocationString = filteredLocationParts.join(", ");

      // Checking if type matches and the region is filtered out
      return (
        uni.type === type.toString()
        //   &&
        // filteredLocationString == region.toString()
      );
    });

    // Extracting universities from matched universities and setting the unis state
    const unis = matchedUnis.map((uni) => uni);
    setUnis(unis);
  }, [assData]);

  // JSX structure for the Colleges component
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Mapping through matched universities and displaying them */}
      {unis?.map((item: any, i: number) => (
        <a
          key={i}
          target="_blank"
          href={item?.website}
          className=" w-auto h-auto bg-[#F1F2F2] rounded-xl hover:bg-[#F1F2F2] transition"
        >
          <div className="p-6">
            <h3 className="text-[20px] underline text-[#00aeef]">
              {item?.name}
            </h3>
            <p className="text-base">Nickname - {item?.nickname}</p>
            <p className="text-base">Location - {item?.location}</p>
            <p className="text-base">Type - {item?.type}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

// Comments:

// React Imports:

// Importing React, useEffect, and useState from the React library.
// Global State Management:

// Importing useGlobalContext hook from the specified path for global state management.
// Data Import:

// Importing university data (Unis) from the specified path.
// Colleges Component:

// Defining the Colleges functional component.
// State Management:

// Using state to store matched universities (unis).
// useEffect for Data Update:

// Using useEffect to update the unis state based on the assessment data.
// University Display:

// Mapping through matched universities and displaying their information in a grid layout.
