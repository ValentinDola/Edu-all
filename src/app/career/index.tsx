"use client";

import { getAllCareer } from "@/lib/careerapi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationIndex from "../navigation";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function CareerComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);
  const careers = [
    {
      id: 19494909,
      name: "IT technician",
      description:
        "An IT technician collaborates with support specialists to analyze and diagnose computer issues. They also monitor processing functions, install relevant software and perform tests on computer equipment and applications when necessary. They may also train a company's employees, clients and other users on a new program or function as well.",
    },
    {
      id: 1900065,
      name: " Web developer",
      description:
        "Web developers design the appearance, navigation and content organization of a website. They use coding languages such as HTML, CSS and JavaScript to manage graphics, applications and content that address a client's needs.",
    },
    {
      id: 9967544,
      name: "Computer programmer",
      description:
        "A computer programmer is someone who writes new computer software using coding languages like HTML, JavaScript and CSS. Video game software can be updated to improve online gameplay, which is an opportunity for programmers to troubleshoot problems experienced by gamers after the game is released to the general public.",
    },
    {
      id: 109700000009,
      name: "Network engineer",
      description:
        "An IT technician collaborates with support specialists to analyze and diagnose computer issues. They also monitor processing functions, install relevant software and perform tests on computer equipment and applications when necessary. They may also train a company's employees, clients and other users on a new program or function as well.",
    },
  ];

  return (
    <>
      <NavigationIndex />
      <section className="mt-[50px] ">
        <main>
          <div className="grid gap-4 max-w-[1380px] w-full mx-auto mt-9 px-5 py-0">
            {careers.map((career) => (
              <Link
                key={career.id}
                href={`/career/${career.id}`}
                className="w-auto h-auto rounded-xl hover:bg-[#FEF6EE] transition"
              >
                <div className="p-6">
                  <h1 className="text-[30px] underline">{career.name}</h1>
                  <p className="text-sm">{career.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}
