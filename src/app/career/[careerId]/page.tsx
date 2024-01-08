"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Finance from "./finance";
import Navigation from "@/app/navigation/navigation";
import { useGlobalContext } from "@/app/context/store";
import Overview from "./overview";
import Schools from "./schools";
import Skills from "./skills";
import Education from "./education";

export default function Dashboard({ params }: { params: { careerId: any } }) {
  const { data } = useGlobalContext();
  const id = params.careerId;
  const [majors, setMajors]: any = useState([]);

  useEffect(() => {
    setMajors(data);
    console.log(data);
  }, [majors]);

  return (
    <div>
      <Navigation />
      <section className="mt-7 mx-auto max-w-7xl py-7">
        <div className="p-8 mx-4 mt-7">
          <p className="text-xl font-bold">{majors[id]?.name}</p>
          <p className="text-base mt-4">
            {" "}
            <strong>Job Description :</strong> {majors[id]?.description}
          </p>
        </div>
        <Tabs className="px-8 mx-4 " aria-label="Options">
          <Tab key="overview" title="Overview">
            <Overview id={id} />
          </Tab>
          <Tab key="education" title="Education">
            <Education id={id} />
          </Tab>
          <Tab key="school" title="Schools">
            <Schools id={id} />
          </Tab>
          <Tab key="skills" title="Skills">
            <Skills id={id} />
          </Tab>
          <Tab key="salary" title="Salary">
            <Finance id={id} />
          </Tab>
        </Tabs>
      </section>
    </div>
  );
}
