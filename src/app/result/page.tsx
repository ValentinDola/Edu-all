"use client";

import React, { useEffect, useState } from "react";
import NavigationIndex from "../navigation";
import { useSession } from "next-auth/react";
import { Spinner, Tab, Tabs } from "@nextui-org/react";
import { useGlobalContext } from "../context/store";
import Careers from "./client/careers";
import Majors from "./client/majors";
import Colleges from "./client/college";

export default function Result() {
  const { data } = useSession();
  const { assData } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [assessment, setAssessment]: any = useState([]);
  useEffect(() => {
    setAssessment(assData);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [assData]);
  return (
    <>
      <NavigationIndex />
      <section className="mt-[70px]">
        {loading ? (
          <main className="flex justify-center items-center h-full w-full mt-20 ">
            <Spinner size="lg" />
          </main>
        ) : (
          <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
            <div className=" max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
              <div className="border-solid border-2 border-[#00aeef] mt-4 col-span-2">
                <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
                  <h1 className="text-white font-semibold">
                    {`My Majors, My Colleges, My Careers`}
                  </h1>
                </div>
                <div className="p-5">
                  <Tabs className="px-8 mx-4 " aria-label="Options">
                    <Tab key="major" title="My Majors">
                      <Majors />
                    </Tab>
                    <Tab key="college" title="My Colleges">
                      <Colleges />
                    </Tab>
                    <Tab key="career" title="My Careers">
                      <Careers />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </main>
        )}
      </section>
    </>
  );
}
