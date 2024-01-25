// Importing React, useEffect, and useState from React library
import React, { useEffect, useState } from "react";

// Importing useGlobalContext hook from the specified path for global state management
import { useGlobalContext } from "../../context/store";

// Importing career data and skills data from the specified paths
import { careers, careerSkills } from "@/app/components/data";

// Defining the Careers functional component
export default function Careers() {
  // Using the useGlobalContext hook to access global context data
  const { assData, data } = useGlobalContext();

  // State to store career names
  const [names, setNames]: any = useState([]);

  // State to store selected skill
  const [skill, setSkill] = useState("");

  // useEffect to update names and skill based on the assessment data
  useEffect(() => {
    const Unparsed: any = localStorage.getItem("Career");
    const skill: any = localStorage.getItem("Skill");

    const careerName = JSON.parse(Unparsed);
    setSkill(skill);
    setNames(careerName);
  }, [assData]);

  // JSX structure for the Careers component
  return (
    <div>
      {/* Displaying a heading with the selected skill */}
      <div className="p-2" data-testid="heading">
        These are the careers that you can be successful in based on your skill
        of <strong>{skill}</strong>
      </div>

      {/* Displaying a list of career names */}
      <ul
        className="grid grid-cols-2  list-disc ml-7"
        data-testid="list-container"
      >
        {names.map((item: any, i: number) => (
          <li key={i} className="text-sm item-list" data-testid="item-list">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Comments:

// React Imports:

// Importing React, useEffect, and useState from the React library.
// Global State Management:

// Importing useGlobalContext hook from the specified path for global state management.
// Data Imports:

// Importing career data (careers) and skills data (careerSkills) from the specified paths.
// Careers Component:

// Defining the Careers functional component.
// State Management:

// Using state to store career names (names) and the selected skill (skill).
// useEffect for Data Update:

// Using useEffect to update the names and skill states based on the assessment data.
// Heading Display:

// Displaying a heading that informs the user about the careers based on their selected skill.
// List Display:

// Displaying a list of career names in a grid layout.
