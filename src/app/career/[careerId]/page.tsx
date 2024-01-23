// Import React for creating React components
import React, { useEffect, useState } from "react";

// Import Tabs and Tab components from the @nextui-org/tabs library
import { Tabs, Tab } from "@nextui-org/tabs";

// Import components related to different tabs
import Finance from "./finance";
import Navigation from "@/app/client/navigation";
import { useGlobalContext } from "@/app/context/store";
import Overview from "./overview";
import Schools from "./schools";
import Skills from "./skills";
import Education from "./education";

// Dashboard component
export default function Dashboard({ params }: { params: { careerId: any } }) {
  // Destructure data from the global context
  const { data } = useGlobalContext();

  // Destructure careerId from params
  const id = params.careerId;

  // State to store major information
  const [majors, setMajors]: any = useState([]);

  // useEffect to update majors state when data changes
  useEffect(() => {
    setMajors(data);
    console.log(data); // Log data to the console for debugging
  }, [data]);

  return (
    <div>
      {/* Navigation component */}
      <Navigation />
      {/* Main section */}
      <section className="mt-7 mx-auto max-w-7xl py-7">
        <div className="p-8 mx-4 mt-7">
          {/* Display career name and description */}
          <p className="text-xl font-bold">{majors[id]?.name}</p>
          <p className="text-base mt-4">
            {" "}
            <strong>Job Description :</strong> {majors[id]?.description}
          </p>
        </div>
        {/* Tabs for different sections */}
        <Tabs className="px-8 mx-4 " aria-label="Options">
          {/* Overview tab */}
          <Tab key="overview" title="Overview">
            {/* Overview component with the specified id */}
            <Overview id={id} />
          </Tab>
          {/* Education tab */}
          <Tab key="education" title="Education">
            {/* Education component with the specified id */}
            <Education id={id} />
          </Tab>
          {/* Schools tab */}
          <Tab key="school" title="Schools">
            {/* Schools component with the specified id */}
            <Schools id={id} />
          </Tab>
          {/* Skills tab */}
          <Tab key="skills" title="Skills">
            {/* Skills component with the specified id */}
            <Skills id={id} />
          </Tab>
          {/* Salary tab */}
          <Tab key="salary" title="Salary">
            {/* Finance component with the specified id */}
            <Finance id={id} />
          </Tab>
        </Tabs>
      </section>
    </div>
  );
}
