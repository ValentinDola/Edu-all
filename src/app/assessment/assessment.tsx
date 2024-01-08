"use client";

import React, { useState } from "react";
import NavigationIndex from "../navigation";
import {
  Input,
  Select,
  SelectSection,
  SelectItem,
  Checkbox,
  Radio,
  RadioGroup,
  Spinner,
  CheckboxGroup,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { date } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

const month = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

const daysOfMonth = Array.from({ length: 31 }, (_, index) => index + 1);

const years = Array.from(
  { length: 2010 - 1950 + 1 },
  (_, index) => 1950 + index
);

const graduationYears = Array.from(
  { length: 2030 - 1950 + 1 },
  (_, index) => 1950 + index
);

const ethnic = [
  { label: "African", value: "African" },
  { label: "African American", value: "African American" },
  { label: "Afro-Caribbean", value: "Afro-Caribbean" },
  { label: "Arab", value: "Arab" },
  { label: "Ashkenazi Jewish", value: "Ashkenazi Jewish" },
  { label: "Asian", value: "Asian" },
  { label: "European", value: "European" },
  { label: "Hispanic or Latino", value: "Hispanic or Latino" },
  {
    label: "Indigenous or Native American",
    value: "Indigenous or Native American",
  },
  { label: "Middle Eastern", value: "Middle Eastern" },
];

const ghanaRegions = [
  { label: "Ahafo", value: "Ahafo" },
  { label: "Ashanti", value: "Ashanti" },
  { label: "Bono", value: "Bono" },
  { label: "Bono East", value: "Bono East" },
  { label: "Central", value: "Central" },
  { label: "Eastern", value: "Eastern" },
  { label: "Greater Accra", value: "Greater Accra" },
  { label: "North East", value: "North East" },
  { label: "Northern", value: "Northern" },
  { label: "Oti", value: "Oti" },
  { label: "Savannah", value: "Savannah" },
  { label: "Upper East", value: "Upper East" },
  { label: "Upper West", value: "Upper West" },
  { label: "Volta", value: "Volta" },
  { label: "Western", value: "Western" },
  { label: "Western North", value: "Western North" },
];

const collegeSkills = [
  { label: "Time Management", value: "Time Management" },
  { label: "Organization", value: "Organization" },
  { label: "Effective Communication", value: "Effective Communication" },
  { label: "Critical Thinking", value: "Critical Thinking" },
  { label: "Problem Solving", value: "Problem Solving" },
  { label: "Adaptability", value: "Adaptability" },
  { label: "Research Skills", value: "Research Skills" },
  { label: "Writing and Editing", value: "Writing and Editing" },
  { label: "Active Listening", value: "Active Listening" },
  { label: "Note-Taking", value: "Note-Taking" },
  { label: "Collaboration", value: "Collaboration" },
  { label: "Leadership", value: "Leadership" },
  { label: "Self-Motivation", value: "Self-Motivation" },
  { label: "Study Skills", value: "Study Skills" },
  { label: "Digital Literacy", value: "Digital Literacy" },
  { label: "Presentation Skills", value: "Presentation Skills" },
  { label: "Resilience", value: "Resilience" },
  { label: "Decision Making", value: "Decision Making" },
  { label: "Networking", value: "Networking" },
  { label: "Cultural Competence", value: "Cultural Competence" },
  { label: "Financial Literacy", value: "Financial Literacy" },
  { label: "Teamwork", value: "Teamwork" },
  { label: "Conflict Resolution", value: "Conflict Resolution" },
  { label: "Goal Setting", value: "Goal Setting" },
  { label: "Creativity", value: "Creativity" },
  { label: "Public Speaking", value: "Public Speaking" },
  { label: "Emotional Intelligence", value: "Emotional Intelligence" },
  { label: "Career Planning", value: "Career Planning" },
  { label: "Self-Advocacy", value: "Self-Advocacy" },
  { label: "Ethical Decision Making", value: "Ethical Decision Making" },
  { label: "Interpersonal Skills", value: "Interpersonal Skills" },
];

const currentlyAttending = [
  { label: "High School", value: "highSchool" },
  { label: "Home School", value: "homeSchool" },
  { label: "4 Year College", value: "4YearCollege" },
  { label: "Not Attending School", value: "notAttendingSchool" },
];

const typeUnis = [
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
];

const interestingCareers = [
  "Astronaut",
  "Data Scientist",
  "Graphic Designer",
  "Environmental Engineer",
  "Digital Marketing Specialist",
  "Human Rights Advocate",
  "Game Developer",
  "Robotics Engineer",
  "Cryptocurrency Analyst",
  "Sustainable Energy Consultant",
  "Neuroscientist",
  "Medical Illustrator",
  "Wildlife Biologist",
  "Virtual Reality Developer",
  "Ethical Hacker",
  "Astrophysicist",
  "Forensic Psychologist",
  "Cinematographer",
  "Fashion Stylist",
  "Ethical Fashion Designer",
  "Ethnobotanist",
  "Space Archaeologist",
  "Food Scientist",
  "Professional Travel Blogger",
  "User Experience (UX) Designer",
  "Genetic Counselor",
  "Zookeeper",
  "Marine Biologist",
  "Sports Psychologist",
  "Crisis Counselor",
  "Commercial Pilot",
  "Music Therapist",
  "Robotics Technician",
  "Ethical Sourcing Manager",
  "Blockchain Developer",
  "Meteorologist",
  "Social Media Manager",
  "Space Tourism Guide",
  "Renewable Energy Consultant",
  "Biomedical Engineer",
  "Biotechnology Researcher",
  "Futurist",
  "Voice Actor",
  "Drones Operator",
  "Creative Director",
  "Museum Curator",
  "Health Informatics Specialist",
  "Professional Cuddler (Therapeutic)",
  "Climate Change Analyst",
];

export default function Component() {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [monthOf, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [ethnicOf, setEthnic] = useState("");
  const [gender, setGender] = useState("Male");
  const [graduation, setGraduation] = useState("");
  const [currently, setCurrently] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [skill, setSkill] = useState("");
  const [career, setCareer] = useState("");

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      monthOf,
      date,
      year,
      ethnicOf,
      gender,
      graduation,
      currently,
      region,
      type,
      skill,
      career,
    };
    console.log("DATA : ", data);
  };
  return (
    <>
      <NavigationIndex />
      <section className="mt-[70px]">
        <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
          <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
            <div className="border-solid border-2 border-[#00aeef] mt-4">
              <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
                <h1 className="text-white font-semibold">
                  {`What College Major is Right for You?`}
                </h1>
              </div>

              <div className="p-5">
                <div className="text-base p-2">
                  After taking this assessment, you will be recommended the top
                  majors, colleges and careers based on your academic
                  achievements, interests and personality.
                </div>
                <div className=" p-2">
                  <h1 className="font-bold text-2xl ">Profile Info</h1>
                  <div className="p-2 grid grid-cols-2 gap-2">
                    <div className="p-2 mt-4">
                      <Input
                        onValueChange={(value: string) => setFirstName(value)}
                        isRequired
                        type="text"
                        label="First Name"
                        radius="sm"
                        variant="bordered"
                        placeholder="john"
                        className="max-w-md"
                      />
                    </div>
                    <div className="p-2 mt-4">
                      <Input
                        onValueChange={(value: string) => setLastName(value)}
                        isRequired
                        type="text"
                        label="Last Name"
                        radius="sm"
                        variant="bordered"
                        placeholder="DOE"
                        className="max-w-md"
                      />
                    </div>
                    <div className="p-2 mt-4 grid grid-cols-3 gap-1">
                      <Select
                        isRequired
                        size="sm"
                        label="Select month"
                        radius="none"
                        className="max-w-xs"
                        onChange={(e) => setMonth(e.target.value)}
                      >
                        {month.map((item: any, i: number) => (
                          <SelectItem
                            key={i}
                            value={item.value}
                            textValue={item.label}
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        isRequired
                        size="sm"
                        radius="none"
                        label="date"
                        className="max-w-xs"
                        onChange={(e) => setDate(e.target.value)}
                      >
                        {daysOfMonth.map((item, i) => {
                          return (
                            <SelectItem
                              key={i}
                              value={item}
                              textValue={item.toString()}
                            >
                              {item}
                            </SelectItem>
                          );
                        })}
                      </Select>
                      <Select
                        isRequired
                        size="sm"
                        label="year"
                        radius="none"
                        className="max-w-xs"
                        onChange={(e) => setYear(e.target.value)}
                      >
                        {years.map((item, i) => {
                          return (
                            <SelectItem
                              key={i}
                              value={item}
                              textValue={item.toString()}
                            >
                              {item}
                            </SelectItem>
                          );
                        })}
                      </Select>
                    </div>
                    <div className="p-2 mt-4">
                      <Select
                        isRequired
                        size="sm"
                        label="Ethnic Background"
                        radius="none"
                        className="max-w-md"
                        onChange={(e) => setEthnic(e.target.value)}
                      >
                        {ethnic.map((item, i) => (
                          <SelectItem key={i} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="p-4">
                      <RadioGroup
                        label="Select your gender"
                        orientation="horizontal"
                        value={gender}
                        onValueChange={setGender}
                      >
                        <Radio value="male" className="mx-4">
                          Male
                        </Radio>
                        <Radio value="female">Female</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <h1 className="font-bold text-2xl ">School Info</h1>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 mt-4 ml-5">
                      <Select
                        isRequired
                        size="sm"
                        label="High School Grad-Year"
                        radius="none"
                        className="max-w-lg"
                        onChange={(e) => setGraduation(e.target.value)}
                      >
                        {graduationYears.map((item, i) => (
                          <SelectItem
                            key={i}
                            value={item}
                            textValue={item.toString()}
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>

                    <div className="p-2 mt-4 ml-5">
                      <Select
                        isRequired
                        size="sm"
                        label="Currently Attending"
                        radius="none"
                        className="max-w-lg"
                        onChange={(e) => setCurrently(e.target.value)}
                      >
                        {currentlyAttending.map((item, i) => (
                          <SelectItem
                            key={i}
                            value={item.value}
                            textValue={item.toString()}
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="p-2 mt-5">
                  <h1 className="font-semibold text-xl ">
                    To find majors offered by colleges that you are more likely
                    to attend, answer the following questions:
                  </h1>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="p-2 mt-4 ml-5">
                      <Select
                        isRequired
                        size="sm"
                        label="What region in which you would consider attending school?"
                        radius="none"
                        className="max-w-lg"
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        {ghanaRegions.map((item, i) => (
                          <SelectItem key={i} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="p-2 mt-4 ml-5">
                      <Select
                        isRequired
                        size="sm"
                        label="What region in which you would consider attending school?"
                        radius="none"
                        className="max-w-lg"
                        onChange={(e) => setType(e.target.value)}
                      >
                        {typeUnis.map((item, i) => (
                          <SelectItem key={i} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="p-2 mt-5 ml-5">
                      <Select
                        isRequired
                        size="sm"
                        label="Choose your skill"
                        radius="none"
                        className="max-w-lg"
                        onChange={(e) => setSkill(e.target.value)}
                      >
                        {collegeSkills.map((item, i) => (
                          <SelectItem key={i} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="p-2 mt-5 ml-5">
                      <Select
                        isRequired
                        size="sm"
                        label="Choose your dream career"
                        radius="none"
                        className="max-w-lg"
                        onChange={(e) => setCareer(e.target.value)}
                      >
                        {interestingCareers.map((item, i) => (
                          <SelectItem key={i} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-5">
                <button
                  onClick={onSubmit}
                  disabled={loading}
                  className={`p-4 flex justify-center items-center ${
                    loading ? `bg-[#F1F2F2]` : `bg-blue-400`
                  } `}
                >
                  {loading ? (
                    <Spinner size="sm" label="Loading" />
                  ) : (
                    <p className="text-white text-[20px] font-semibold">
                      Begin the Assessment
                    </p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
