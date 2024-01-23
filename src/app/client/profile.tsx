"use client";

import React, { useEffect, useState } from "react";
import NavigationIndex from "../navigation";
import { signOut, useSession } from "next-auth/react";
import { useGlobalContext } from "../context/store";
import { Spinner } from "@nextui-org/react";

export default function ProfileIndex() {
  const { data } = useSession();
  const { assData } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [weHaveData, setHaveData] = useState(false);

  useEffect(() => {
    setLoading(true);
    const transformedData = Array.isArray(assData) ? assData : [assData];
    if (transformedData.length > 0) setHaveData(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
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
            <div className="text-2xl font-bold">{`${data?.user?.name}`} </div>
            <div className="p-2">
              Based on your survey, we have matched you with the Majors, Schools
              and Careers below.
            </div>
            <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
              <div className="border-solid border-2 border-[#00aeef] mt-4 flex justify-center items-center ">
                <div className="grid grid-cols-1">
                  <ul className="text-center py-4">
                    <li>
                      {weHaveData ? (
                        <a
                          href="/result"
                          className="text-base hover:underline hover:text-[#00aeef]"
                        >
                          Show previous results, no change in input
                        </a>
                      ) : (
                        <p className="text-base">
                          Show previous results, no change in input
                        </p>
                      )}
                    </li>
                    <li>
                      <a
                        href="/assessment"
                        className="text-base hover:underline hover:text-[#00aeef]"
                      >
                        Take an assessment
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() =>
                          signOut({
                            redirect: true,
                            callbackUrl: `${window.location.origin}/login`,
                          })
                        }
                        className="text-base hover:underline hover:text-[#00aeef] cursor-pointer"
                      >
                        Log-out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        )}
      </section>
    </>
  );
}
