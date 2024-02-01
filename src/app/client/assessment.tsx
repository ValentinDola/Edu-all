"use client";

// Import React and required components and functions
import React, { SetStateAction, useState } from "react";
import NavigationIndex from "../navigation";
import { Input, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "../context/store";
import { useRouter } from "next/navigation";
import Alert from "../components/alert";
// Importing career data and skills data from the specified paths
import { careers, careerSkills } from "@/app/components/data";

// Importing Unis data from the specified path
import { Unis } from "@/app/components/data";

// Importing majorsSkills data from the specified path
import { majorsSkills } from "@/app/components/data";

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
  { length: 2030 - 2005 + 1 },
  (_, index) => 2005 + index
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

const Grades = [
  {
    A1: [
      "English Language",
      "Integrated Science",
      "Mathematics (Core)",
      "Social Studies",
    ],
    B2: [
      "English Language",
      "Integrated Science",
      "Mathematics (Core)",
      "Social Studies",
    ],
    B3: [
      "English Language",
      "Integrated Science",
      "Mathematics (Core)",
      "Social Studies",
    ],
    C4: [
      "English Language",
      "Integrated Science",
      "Mathematics (Core)",
      "Social Studies",
    ],
    C5: [
      "English Language",
      "Integrated Science",
      "Mathematics (Core)",
      "Social Studies",
    ],
    C6: [
      "English Language",
      "Integrated Science",
      "Mathematics (Core)",
      "Social Studies",
    ],
  },
];

const Programmes = [
  {
    program: "Bachelor of Arts",
    grades: Grades,
  },
  { program: "Bachelor of Fine Arts", grades: Grades },
  { program: "Bachelor of Law", grades: Grades },
  { program: "Bachelor of Science in Administration", grades: Grades },
  { program: "Bachelor of Science in Agriculture", grades: Grades },
  { program: "Doctor of Veterinary Medicine", grades: Grades },
  {
    program:
      "Bachelor of Science in Engineering (Agricultural, Biomedical, Computer, Food Process, Materials)",
    grades: Grades,
  },
  {
    program: "Bachelor of Science in Family and Consumer Sciences",
    grades: Grades,
  },
  { program: "Bachelor of Science in Natural Sciences", grades: Grades },
];

const grades = ["A1", "B2", "B3", "C4", "C5", "C6"];

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
  const [programmes, setProgrammes] = React.useState<string>("");
  const [region, setRegion] = React.useState<string>("");
  const [type, setType] = React.useState<string>("");
  const [skill, setSkill] = React.useState<string>("");
  const [career, setCareer] = React.useState<string>("");
  const [EnglishLanguage, setEnglishLanguage] = React.useState<string>("");
  const [IntegratedScience, setIntegratedScience] = React.useState<string>("");
  const [Mathematics, setMathematics] = React.useState<string>("");
  const [SocialStudies, setSocialStudies] = React.useState<string>("");
  const [programmesActive, setProgrammesActive] = useState<boolean>(true);
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  // State to store career names
  const [names, setNames]: any = useState([]);
  // State to store matched universities
  const [unis, setUnis]: any = useState([]);

  // State to store matched major names and skills
  const [namesMajor, setNamesMajor]: any = useState([]);

  // Handle form submission
  const onSubmit = async () => {
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
      programmes,
      EnglishLanguage,
      SocialStudies,
      Mathematics,
      IntegratedScience,
    };
    try {
      if (skill || career || programmes !== "") {
        setLoading(true);
        console.log("DATA : ", data);
        setAssData(data);
        // Simulate a delay before redirecting
        setTimeout(() => {
          // Transforming the assessment data into an array if it's not already
          const transformedData = Array.isArray(data) ? data : [data];
          // Extracting skills from transformed data and setting the skill state
          const skill = transformedData.map(
            (item: { skill: any }) => item.skill
          );
          setSkill(skill.toString());

          // Filtering careers based on matching skills
          const matchedCareers = careerSkills.skill.filter((career) =>
            career.skills.includes(skill.toString())
          );

          // Extracting career names from matched careers and setting the names state
          const careerNames = matchedCareers.map((career) => career.name);
          console.log(careerNames);
          localStorage.setItem("Skill", skill.toString());
          localStorage.setItem("Career", JSON.stringify(careerNames));
          localStorage.setItem("Data", JSON.stringify(transformedData));
          setNames(careerNames);

          // Extracting type and region from transformed data
          const type = transformedData.map((item) => item.type);
          const region = transformedData.map((item) => item.region);

          // Filtering universities based on type and region
          const matchedUnis = Unis.filter((uni) => {
            // Split the location string by comma and trim the parts
            const locationParts = uni.location
              .split(",")
              .map((part) => part.trim());

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
          console.log(unis);
          localStorage.setItem("Unis", JSON.stringify(unis));
          setUnis(unis);

          // Extracting skill from transformed data
          const skillMa = transformedData.map((item) => item.skill);

          // Setting the skill state based on the extracted skill
          setSkill(skillMa.toString());

          // Matching majors based on skills
          const matchedMajors = majorsSkills.majors.filter((major) =>
            major.skills.includes(skillMa.toString())
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
          console.log(uniqueMajors);
          localStorage.setItem("UniqueMajors", JSON.stringify(uniqueMajors));
          setNamesMajor(uniqueMajors);
          router.replace("/result");
        }, 2000);
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
                            Month
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
                            Day
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
                            Year
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
                          Choose
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
                  <div className="grid grid-cols-3 gap-2">
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
                          Choose
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
                          Choose
                        </option>
                        {currentlyAttending.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Undergraduate Programmes Dropdown */}
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Undergraduate Programmes</div>
                      <select
                        data-testid="currently"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={programmes}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setProgrammes(e.target.value);
                          setProgrammesActive(!programmesActive);
                        }}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        {Programmes.map((item, i) => (
                          <option key={i} value={item.program}>
                            {item.program}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">English Language Grade</div>
                      <select
                        disabled={programmesActive}
                        data-testid="english"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={EnglishLanguage}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setEnglishLanguage(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        {grades.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Social Studies Grade</div>
                      <select
                        disabled={programmesActive}
                        data-testid="socialStudies"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={SocialStudies}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setSocialStudies(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        {grades.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Mathematics Grade</div>
                      <select
                        disabled={programmesActive}
                        data-testid="mathematics"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={Mathematics}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setMathematics(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        {grades.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Intergrated Science Grade</div>
                      <select
                        disabled={programmesActive}
                        data-testid="intergratedScience"
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={IntegratedScience}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setIntegratedScience(e.target.value);
                        }}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        {grades.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
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
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {/* Region to School Dropdown */}
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Region to school</div>
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
                          Choose
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
                          Choose
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
                      <div className="p-2">Skill</div>
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
                          Choose
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
                      <div className="p-2">Interest</div>
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
                          Choose
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
