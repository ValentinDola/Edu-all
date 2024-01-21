"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserInfo } from "./user";
import Image from "next/image";

const Navigation = () => {
  const pathname = usePathname();
  const { status } = useSession();

  const link = [
    { name: "Assessment", href: "/assessment" },
    { name: "Career", href: "/career" },
    { name: "Universities", href: "/unis" },
    { name: "FAQ'S", href: "/faq" },
  ];

  const [isNavigationSticky, setNavigationSticky] = useState(false);
  const [isMobileNavigationTriggered, setMobileNavigationTriggered] =
    useState(false);

  useEffect(() => {
    const handleScroll = (): any => {
      const offset = window.scrollY;
      // Adjust the value (e.g., 100) based on when you want the navigation to become sticky
      if (offset > 100) {
        setNavigationSticky(true);
      } else {
        setNavigationSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNavigationTrigger = () =>
    setMobileNavigationTriggered(!isMobileNavigationTriggered);

  return (
    <>
      <nav
        className={
          isNavigationSticky
            ? "GNav GnAvMtR text-xl h-24 absolute right-0 left-0 z-[100] global-navigation--sticky"
            : "GNav GnAvMtR text-xl h-24 absolute right-0 left-0 top-10 z-[100] mx-4"
        }
      >
        <div
          className={
            isMobileNavigationTriggered
              ? "GmNM absolute h-screen w-screen bg-blue-600 left-0 -top-1 block  "
              : "GmNM absolute h-0 w-screen bg-blue-600 left-0 -top-1 hidden"
          }
        >
          <ul
            className={
              isMobileNavigationTriggered
                ? "opacity-100 visible  pl-8 pr-[35px] pt-[7vh] pb-0"
                : "opacity-0 invisible  pl-8 pr-[35px] pt-[7vh] pb-0"
            }
          >
            {link.map((item, i) => (
              <li
                key={i}
                className="list-none mb-3.5 opacity: 1 transform: translate(0px, 0px)"
              >
                <Link
                  href={item.href}
                  className={
                    "text-white block font-semibold text-4xl leading-[1.2] tracking-[-1px] capitalize bg-[none] shadow-none p-0"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="visible opacity-100 pl-8 pr-0 pt-2.5 pb-0">
            <li className="mt-[18px]">
              <a href="/signup" className="text-[#FFFFFF99]">
                SIGN UP
              </a>
            </li>
            <li className="mt-[18px]">
              <a href="/login" className="text-[#FFFFFF99]">
                LOG IN
              </a>
            </li>
          </ul>
        </div>
        <div className="GNavMCo pl-5 ">
          <div className="flex items-center h-10">
            <a
              href="/"
              className={`epLOGO text-2xl no-underline max-[986px]:${
                isNavigationSticky ? "hidden" : "flex"
              } `}
            >
              <Image src={"/LOGO.png"} height={40} width={145} alt="logo" />
            </a>
            <div className="flex items-center w-full justify-between max-[600px]:justify-end">
              <ul className="list-none flex  relative ml-20 mb-1 max-[980px]:hidden">
                {link.map((item, i) => (
                  <li key={i} className="mx-5 my-0">
                    <Link
                      className={classnames({
                        "text-[#0066F5] font-bold outline-none uppercase text-[16px] cursor-pointer":
                          item.href === pathname,
                        "outline-none uppercase text-[14px] font-medium cursor-pointer":
                          item.href !== pathname,
                        "hover:text-[#0066F5] font-semibold": true,
                      })}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {status === "authenticated" ? (
                <UserInfo />
              ) : (
                <div className="flex justify-between items-center">
                  <a
                    href="/login"
                    className={
                      "mr-7 text-base bg-[none] text-[#0066f5] shadow-none p-0 font-semibold max-[980px]:hidden "
                    }
                  >
                    LOG IN{" "}
                  </a>
                  <a
                    href="/register"
                    className={"button_auth max-[980px]:hidden"}
                  >
                    SIGN UP
                  </a>
                </div>
              )}
            </div>
            <div className=" min-[980px]:hidden max-[980px]:block max-[980px]:opacity-100">
              <div
                onClick={handleMobileNavigationTrigger}
                className={
                  isMobileNavigationTriggered
                    ? "cursor-pointer inline-block relative h-6 w-6 ml-[15px] mt-1 isActive"
                    : "cursor-pointer inline-block relative h-6 w-6 ml-[15px] mt-1 transition-opacity duration-[0.5s] ease-[ease]"
                }
              >
                <span
                  className={
                    "MObiLMEnu bg-[#082552] block absolute transition-transform duration-[0.3s] ease-[ease] rounded-sm top-[5px] text-[1.3rem]"
                  }
                ></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
