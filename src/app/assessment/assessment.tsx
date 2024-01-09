"use client";

import React, { SetStateAction, useState } from "react";
import NavigationIndex from "../navigation";
import { Input, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "../context/store";
import { useRouter } from "next/navigation";

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
  "Data Scientist",
  "Graphic Designer",
  "Game Developer",
  "Robotics Engineer",
  "Cryptocurrency Analyst",
  "Virtual Reality Developer",
  "Buisiness",
  "User Experience (UX) Designer",
];

type AssDataType = {
  firstName: String;
  lastName: String;
  monthOf: String;
  date: String;
  year: String;
  ethnicOf: String;
  gender: String;
  graduation: String;
  currently: String;
  region: String;
  type: String;
  skill: String;
  career: String;
};

export default function Component() {
  const router = useRouter();
  const { setAssData } = useGlobalContext();

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const onSubmit = () => {
    const data: AssDataType = {
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
    try {
      if (skill || career !== "") {
        setLoading(true);
        setTimeout(() => {
          console.log("DATA : ", data);
          setAssData(data);
          router.replace("/result");
        }, 4000);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
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
                    <div className="mt-4 p-2">
                      <div className="p-1">Date Of Birth</div>
                      <div className="p-2 grid grid-cols-3 gap-1">
                        <select
                          required
                          value={monthOf}
                          onChange={(e) => setMonth(e.target.value)}
                          className="py-2 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        >
                          {month.map((item, i) => (
                            <option key={i} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>

                        <select
                          required
                          className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                          value={date}
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setDate(e.target.value);
                          }}
                        >
                          {daysOfMonth.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>

                        <select
                          required
                          className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                          value={year}
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setYear(e.target.value);
                          }}
                        >
                          {years.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="p-2 mt-4">
                      <div className="p-2">Ethnic Background</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={ethnicOf}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setEthnic(e.target.value);
                        }}
                      >
                        {ethnic.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
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
                      <div className="p-2">High School Grad-Year</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={graduation}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setGraduation(e.target.value);
                        }}
                      >
                        {graduationYears.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Currently Attending</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={currently}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setCurrently(e.target.value);
                        }}
                      >
                        {currentlyAttending.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
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
                      <div className="p-2">Choose your region to school</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={region}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setRegion(e.target.value);
                        }}
                      >
                        {ghanaRegions.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2 mt-4 ml-5">
                      <div className="p-2">Type of university</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={type}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setType(e.target.value);
                        }}
                      >
                        {typeUnis.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2 mt-5 ml-5">
                      <div className="p-2">Choose your skill</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={skill}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setSkill(e.target.value);
                        }}
                      >
                        {collegeSkills.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2 mt-5 ml-5">
                      <div className="p-2">Choose your interest</div>
                      <select
                        required
                        className="py-3 px-3 outline-none bg-[#F1F2F2] w-full cursor-pointer"
                        value={career}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setCareer(e.target.value);
                        }}
                      >
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
              <div className="flex justify-center p-5">
                <button
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
}
