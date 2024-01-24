// Importing React, useEffect, and useState from React library
import React, { useEffect, useState } from "react";

// Importing useGlobalContext hook from the specified path for global state management
import { useGlobalContext } from "../../context/store";

// Importing majorsSkills data from the specified path
import { majorsSkills } from "@/app/components/data";

// Importing Modal components and hooks from Next UI library
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tab,
  Tabs,
} from "@nextui-org/react";

// Importing Colleges component from the specified path
import Colleges from "./college";

// Defining the Majors functional component
export default function Majors() {
  // Using the useGlobalContext hook to access global context data
  const { assData, data } = useGlobalContext();

  // State to store matched major names and skills
  const [names, setNames]: any = useState([]);

  // State to store the selected major
  const [major, setMajor]: any = useState([]);

  // State and functions for managing the Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // State to store the skill associated with the majors
  const [skill, setSkill] = useState("");

  // useEffect to update the names state based on the assessment data
  useEffect(() => {
    // Transforming the assessment data into an array if it's not already
    const transformedData = Array.isArray(assData) ? assData : [assData];

    // Extracting skill from transformed data
    const skill = transformedData.map((item) => item.skill);

    // Setting the skill state based on the extracted skill
    setSkill(skill.toString());

    // Matching majors based on skills
    const matchedMajors = majorsSkills.majors.filter((major) =>
      major.skills.includes(skill.toString())
    );

    // Extracting major names from matched majors
    const majorName = matchedMajors.map((major) => major.name);

    // Function to remove duplicate major names
    const removeDuplicates = (array: any[]) => {
      return array.filter(
        (value: any, index: any, self: string | any[]) =>
          self.indexOf(value) === index
      );
    };

    // Removing duplicates and setting the unique major names in the state
    const uniqueMajors = removeDuplicates(majorName);
    setNames(uniqueMajors);
  }, [assData]);

  // Function to get details of the selected major and open the Modal
  const getMajor = (name: string) => {
    // Finding the selected major details
    const foundMajor =
      majorsSkills?.majors.find((major) => major.name === name) || null;

    // Setting the major state with the selected major details
    setMajor(foundMajor);

    // Opening the Modal
    onOpen();
  };

  // JSX structure for the Majors component
  return (
    <div>
      <div className="p-2">
        {/* Displaying information about recommended majors based on the skill */}
        These are the majors we recommend based on your skill of {skill}
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {/* Mapping through matched majors and displaying them as clickable items */}
        {names.map((item: any, i: number) => (
          <li
            key={i}
            className="p-2  rounded-sm hover:bg-[#F1F2F2] hover:text-[#00aeef] cursor-pointer "
            onClick={() => getMajor(item)}
          >
            <p className="text-base  font-semibold">{item}</p>
          </li>
        ))}
      </ul>
      {/* Modal component for displaying major details */}
      <Modal
        size="5xl"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Displaying the name of the selected major in the Modal header */}
                {major?.name}
              </ModalHeader>
              <ModalBody>
                {/* Tabs for switching between major description and associated careers */}
                <Tabs className="px-8 mx-4 " aria-label="Options">
                  {/* Tab for displaying major description */}
                  <Tab key="description" title="Description">
                    <div className="p-4">
                      <div className="p-2 font-semibold">
                        {" "}
                        {/* Displaying major description */}
                        What is {major?.name}{" "}
                      </div>
                      <div className="p-2">{major?.description}</div>
                    </div>
                  </Tab>
                  {/* Tab for displaying associated careers */}
                  <Tab key="careers" title="Careers">
                    <div className="p-2">
                      {/* Displaying information about careers associated with the major */}
                      What jobs and careers are associated with a major in{" "}
                      {major?.name}?
                    </div>
                    <ul className="grid grid-cols-2  list-disc ml-7">
                      {/* Mapping through associated careers and displaying them */}
                      {major?.careers?.map((item: any, i: number) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

// Comments:

// React Imports:

// Importing React, useEffect, and useState from the React library.
// Global State Management:

// Importing useGlobalContext hook from the specified path for global state management.
// Data Import:

// Importing majorsSkills data from the specified path.
// Modal Components and Hooks:

// Importing Modal components and hooks from the Next UI library.
// Colleges Component Import:

// Importing the Colleges component from the specified path.
// Majors Component:

// Defining the Majors functional component.
// State Management:

// Using state to store matched major names (names) and skills.
// Modal State and Hooks:

// Using state and hooks for managing the Modal component.
// useEffect for Data Update:

// Using useEffect to update the names state based on the assessment data.
// Function for Handling Selected Major:

// Function (getMajor) to get details of the selected major and open the Modal.
// JSX Structure:

// JSX structure for displaying recommended majors, clickable items, and the Modal for major details.
