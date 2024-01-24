"use client";

// Import React and required components and functions
import React, { SetStateAction, useState } from "react";
import NavigationIndex from "../navigation";
import { Input, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "../context/store";
import { useRouter } from "next/navigation";
import Alert from "../components/alert";

// Define arrays for dropdown options

// ... (options for months)
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

// Generate an array representing the days of the month (1 to 31)
const daysOfMonth = Array.from({ length: 31 }, (_, index) => index + 1);

// Generate an array representing years from 1950 to 2010 (inclusive)
const years = Array.from(
  { length: 2010 - 1950 + 1 },
  (_, index) => 1950 + index
);

// Generate an array representing graduation years from 1950 to 2030 (inclusive)
const graduationYears = Array.from(
  { length: 2030 - 1950 + 1 },
  (_, index) => 1950 + index
);

// ... (options for ethnic background)
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

// ... (options for Ghana regions)
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

// ... (options for college skills)
const collegeSkills = [
  { label: "Time Management", value: "Time Management" },
  { label: "Organization", value: "Organization" },
  { label: "Effective Communication", value: "Effective Communication" },
  { label: "Critical Thinking", value: "Critical Thinking" },
  { label: "Problem Solving", value: "Problem Solving" },
  { label: "Adaptability", value: "Adaptability" },
  { label: "Research Skills", value: "Research Skills" },
  { label: "Writing and Editing", value: "Writing and Editing" },
];

// ... (options for currently attending)
const currentlyAttending = [
  { label: "High School", value: "highSchool" },
  { label: "Home School", value: "homeSchool" },
  { label: "4 Year College", value: "4YearCollege" },
  { label: "Not Attending School", value: "notAttendingSchool" },
];

// ... (options for type of universities)
const typeUnis = [
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
];

// ... (options for interesting careers)
const interestingCareers = [
  "Data Scientist",
  "Graphic Designer",
  "Game Developer",
  "Robotics Engineer",
  "Cryptocurrency Analyst",
  "Virtual Reality Developer",
  "Buisiness",
  "User Experience (UX) Designer",
];

// Export the AssessmentForm component
export const AssessmentForm = () => {
  // Initialize state variables
  const router = useRouter();
  const { data }: any = useSession();
  const { setAssData } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [monthOf, setMonth] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  const [ethnicOf, setEthnic] = React.useState<string>("");
  const [gender, setGender] = useState("Male");
  const [graduation, setGraduation] = React.useState<string>("");
  const [currently, setCurrently] = React.useState<string>("");
  const [region, setRegion] = React.useState<string>("");
  const [type, setType] = React.useState<string>("");
  const [skill, setSkill] = React.useState<string>("");
  const [career, setCareer] = React.useState<string>("");
  const [errorAlert, setErrorAlert] = useState<boolean>(false);

  // Handle form submission
  const onSubmit = () => {
    const data: any = {
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
    try {
      if (skill || career !== "") {
        setLoading(true);

        // Simulate a delay before redirecting
        setTimeout(() => {
          console.log("DATA : ", data);
          setAssData(data);
          router.replace("/result");
        }, 4000);
      } else {
        console.log("Error");
        setErrorAlert(true);
      }

      // Reset error alert after 5 seconds
      setTimeout(() => setErrorAlert(false), 3000);
    } catch (error) {}
  };

  return (
    <>
      {errorAlert ? (
        // Render alert component if there's an error
        <Alert
          error={errorAlert}
          message={
            "It seems that you've left some fields blank or provided incorrect information. Please review the form and fill in all required fields with accurate information before submitting again."
          }
        />
      ) : null}

      {/* Render NavigationIndex component */}
      <NavigationIndex />

      {/* Render the assessment form */}
      <section className="mt-[70px]">
        <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
          <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
            <div className="font-bold text-2xl ">{`Howdy, ${data?.user?.name}`}</div>

            <div className="border-solid border-2 border-[#00aeef] mt-4">
              {/* Header Section */}
              <div className="bg-[#00aeef] border-[#00aeef] px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
                <h1 className="text-white font-semibold">
                  {`What Path is Right for You?`}
                </h1>
              </div>

              {/* Main Content Section */}
              <div className="p-5">
                {/* Introduction Text */}
                <div className="text-base p-2">
                  After taking this assessment, you will be recommended the top
                  majors, colleges, and careers based on your academic
                  achievements, interests, and personality.
                </div>

                {/* Profile Info Section */}
                <div className="p-2">
                  <h1 className="font-bold text-2xl ">Profile Info</h1>
                  {/* Full Name Input */}
                  <div className="p-2 mt-4 ">
                    <Input
                      disabled
                      type="text"
                      label="Full Name"
                      radius="sm"
                      variant="bordered"
                      placeholder={data?.user?.name}
                      className="max-w-xl"
                    />
                  </div>

                  {/* Date of Birth Section */}
                  <div className="p-2 grid grid-cols-2 gap-2">
                    <div className="mt-4 p-2">
                      <div className="p-1">Date Of Birth</div>
                      <div className="p-2 grid grid-cols-3 gap-1">
                        {/* Month Dropdown */}
                        <select
                          data-testid="month"
                          required
                          value={monthOf}
                          onChange={(e) => setMonth(e.target.value)}
                          className="py-2 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        >
                          <option value="" disabled hidden>
                            Select Month
                          </option>
                          {month.map((item, i) => (
                            <option key={i} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>

                        {/* Day Dropdown */}
                        <select
                          required
                          data-testid="day"
                          className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                          value={date}
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setDate(e.target.value);
                          }}
                        >
                          <option value="" disabled hidden>
                            Select Day
                          </option>
                          {daysOfMonth.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>

                        {/* Year Dropdown */}
                        <select
                          required
                          data-testid="year"
                          className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                          value={year}
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setYear(e.target.value);
                          }}
                        >
                          <option value="" disabled hidden>
                            Select Year
                          </option>
                          {years.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Ethnic Background Dropdown */}
                    <div className="p-2 mt-4">
                      <div className="p-2">Ethnic Background</div>
                      <select
                        data-testid="ethnic"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={ethnicOf}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setEthnic(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Ethnic
                        </option>
                        {ethnic.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Gender Radio Group */}
                    <div className="p-4">
                      <RadioGroup
                        data-testid="gender"
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

                {/* School Info Section */}
                <div className="p-2">
                  <h1 className="font-bold text-2xl ">School Info</h1>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Graduation Year Dropdown */}
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">High School Grad-Year</div>
                      <select
                        data-testid="graduation"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={graduation}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setGraduation(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Graduation Year
                        </option>
                        {graduationYears.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Currently Attending Dropdown */}
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Currently Attending</div>
                      <select
                        data-testid="currently"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={currently}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setCurrently(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Currently Attending
                        </option>
                        {currentlyAttending.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Majors and Careers Section */}
                <div className="p-2 mt-5">
                  <h1 className="font-semibold text-xl ">
                    To find majors offered by colleges that you are more likely
                    to attend, answer the following questions:
                  </h1>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {/* Region to School Dropdown */}
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Choose your region to school</div>
                      <select
                        data-testid="region"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={region}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setRegion(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Region
                        </option>
                        {ghanaRegions.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Type of University Dropdown */}
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Type of university</div>
                      <select
                        data-testid="type"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={type}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setType(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Type of Unis
                        </option>
                        {typeUnis.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Skill Dropdown */}
                    <div className="p-2 mt-5 ml-5">
                      <div className="p-2">Choose your skill</div>
                      <select
                        data-testid="skill"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={skill}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setSkill(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Skill
                        </option>
                        {collegeSkills.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Interest Dropdown */}
                    <div className="p-2 mt-5 ml-5">
                      <div className="p-2">Choose your interest</div>
                      <select
                        data-testid="career"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={career}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setCareer(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Interest
                        </option>
                        {interestingCareers.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Section */}
              <div className="flex justify-center p-5">
                <button
                  data-testid="button"
                  onClick={onSubmit}
                  disabled={loading}
                  className={`p-4 flex justify-center items-center outline-none ${
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
};

// Header Section:

// The outer div sets up a border with a blue color (#00aeef).
// The inner div with a blue background creates a header section.
// Main Content Section:

// Contains introduction text, profile info, school info, and questions related to majors and careers.
// Profile Info Section:

// Includes inputs for Full Name, Date of Birth, Ethnic Background, and Gender.
// School Info Section:

// Includes inputs for High School Graduation Year and Currently Attending.
// Majors and Careers Section:

// Asks questions about the region to school, type of university, skills, and interests.
// Button Section:

// Displays a button for submitting the assessment.
// The button is styled differently based on the loading state.
