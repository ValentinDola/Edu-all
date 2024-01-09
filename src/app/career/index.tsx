"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationIndex from "../navigation";
import { careers } from "@/components/data";
import { useGlobalContext } from "../context/store";
import { Spinner } from "@nextui-org/react";

export default function CareerComponent() {
  const { setData } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [categories, setCategories]: any = useState([]);

  const handleCategoriesActivity = (index: any) => {
    setActive(index);
    const catego = careers[index]?.categories || null;
    setCategories(careers[index]?.categories || null);
    setData(catego);
  };

  useEffect(() => {
    setData(careers[active]?.categories || null);
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
          <main>
            <div className="grid grid-cols-2 gap-0">
              <div className=" overflow-y-auto overflow-x-hidden text-xs text-[#333] border-r-[#ddd] border-r border-solid ">
                <ul>
                  {careers.map((item, i) => (
                    <li
                      key={i}
                      className={
                        active === i
                          ? "bg-[#F1F2F2] w-full cursor-pointer"
                          : "hover:bg-[#F1F2F2] w-full cursor-pointer"
                      }
                      onClick={() => handleCategoriesActivity(i)}
                    >
                      <div className=" -pt-6 px-3 pb-1 p">
                        <span className="text-base">{item.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" overflow-y-auto overflow-x-hidden text-xs text-[#333] border-r-[#ddd] border-r border-solid ">
                <ul className="mt-2">
                  {categories.map((item: any, i: any) => {
                    const name = item.name
                      .toLowerCase()
                      .replace(/\s+/g, "-") // Replace spaces with hyphens
                      .replace(/[^a-z0-9-]/g, ""); // Remove special characters

                    const maskedId = btoa(i);
                    return (
                      <div
                        className="hover:bg-[#F1F2F2] w-full cursor-pointer"
                        key={i}
                      >
                        <Link
                          href={`/career/${i}`}
                          className="w-full justify-center items-center cursor-pointer "
                        >
                          <div className="-pt-4 px-3 pb-0.5">
                            <span className="text-base ">{item.name}</span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </main>
        )}
      </section>
    </>
  );
}
