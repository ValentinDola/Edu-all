"use client";

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/store";
import { careers, careerSkills } from "@/app/components/data";

export default function Careers() {
  const { assData, data } = useGlobalContext();

  const [names, setNames]: any = useState([]);
  const [skill, setSkill] = useState("");

  useEffect(() => {
    const transformedData = Array.isArray(assData) ? assData : [assData];

    const skill = transformedData.map((item) => item.skill);
    setSkill(skill.toString());
    const matchedCareers = careerSkills.skill.filter((career) =>
      career.skills.includes(skill.toString())
    );

    const careerName = matchedCareers.map((career) => career.name);
    setNames(careerName);
  }, [assData]);

  return (
    <div>
      <div className="p-2" data-testid="heading">
        These are the careers that you can be successful in based on your skill
        of {skill}
      </div>
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
