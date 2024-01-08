"use client";

import React, { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { UserInfo } from "./user";

const Navigation = () => {
  const pathname = usePathname();
  const { status, data } = useSession();

  const link = [
    { name: "Assessment", href: "/assessment" },
    { name: "Career", href: "/career" },
    { name: "Universities", href: "/unis" },
    { name: "Events", href: "/events" },
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
            <svg
              width="145"
              height="40"
              viewBox="0 0 145 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M57.28 18.82H64.24V20.96H57.28V18.82ZM57.48 24.82H65.38V27H54.88V13H65.1V15.18H57.48V24.82ZM68.2784 27V13H74.3984C75.9184 13 77.2518 13.2933 78.3984 13.88C79.5451 14.4667 80.4384 15.28 81.0784 16.32C81.7184 17.36 82.0384 18.5867 82.0384 20C82.0384 21.4 81.7184 22.6267 81.0784 23.68C80.4384 24.72 79.5451 25.5333 78.3984 26.12C77.2518 26.7067 75.9184 27 74.3984 27H68.2784ZM70.8784 24.8H74.2784C75.3318 24.8 76.2384 24.6 76.9984 24.2C77.7718 23.8 78.3651 23.24 78.7784 22.52C79.2051 21.8 79.4184 20.96 79.4184 20C79.4184 19.0267 79.2051 18.1867 78.7784 17.48C78.3651 16.76 77.7718 16.2 76.9984 15.8C76.2384 15.4 75.3318 15.2 74.2784 15.2H70.8784V24.8ZM90.8219 27.2C88.9019 27.2 87.3952 26.66 86.3019 25.58C85.2219 24.5 84.6819 22.94 84.6819 20.9V13H87.2819V20.8C87.2819 22.24 87.5885 23.2867 88.2019 23.94C88.8285 24.5933 89.7085 24.92 90.8419 24.92C91.9752 24.92 92.8485 24.5933 93.4619 23.94C94.0752 23.2867 94.3819 22.24 94.3819 20.8V13H96.9419V20.9C96.9419 22.94 96.3952 24.5 95.3019 25.58C94.2219 26.66 92.7285 27.2 90.8219 27.2ZM99.8031 22.48V20.4H105.303V22.48H99.8031ZM105.888 27L112.188 13H114.748L121.068 27H118.348L112.928 14.38H113.968L108.568 27H105.888ZM108.788 23.76L109.488 21.72H117.048L117.748 23.76H108.788ZM122.849 27V13H125.449V24.8H132.769V27H122.849ZM134.821 27V13H137.421V24.8H144.741V27H134.821Z"
                fill="black"
              />
              <rect width="40" height="40" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_7_243" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_7_243"
                  width="100"
                  height="100"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkUlEQVR4nO2dO2tUQRiGHyWFV7ziBRVFI8TYCIIg3uINRAsLrx9oIQriLwhaRgX/gmi0ERHRTrTUymtjq03ID/CCiIXRRAYmsGx2PcfdOecbw/vC24TNzszz7EnOTjEHFEVRFEVRFEVRFEVRFEWZBawF+oD+DtsLLAN6EuDsie/V28V8+uKawtr+mywE9gCnAUvUU8BOYHkH8wm/syu+R6r5hLXtBhaQeTYkXri16AAwp8Rcwmv2VjyXsNb1ZJp1FS/eGnqs4GpZEV9T13zC2rPKXOBkjQAsjhfAN2dlDVdpq7mUuWpry7aaAVjDlTK/YR7za74yGhsYZJGZjhAMONAwl/2O8zgeWbhnsSMEi10T6z2PRd4ywp+ILRmAOBzrPY/AYl7dEpYC14GPwATwJAMQlkmfRCYfgKvAkqplhLuJr3HQyUoIU4RM9kv831JJLgHjTQNKCC2vkMYGZhdTy9gBjLUYTEIoFBL6E9ieSsYM4E2bgSSEUkJCX6USsvUvg0gIpYVMxLuwrnNFQvjXu6x2vZxCyC0JIZWQmymEPJQQUgkJLCWE+r8YSgj+39IlBH8BEoI/dAnBH7SE4A9XQvAHKiEZQDQJ8QdnEuIPyyTEH5BJiD8UkxB/EJZJtZeFvwQJwR+8hOAPW0LwBywh+EOVkAxAmoT4wzMJ8QdmEuIPySTEH4xJiD8My6DaOsFfgoTgD15C8IctIfgDlhD8oUpIBiBNQvzhmYT4AzMJ8YdkEuIPxiTEH4ZlUG2d4C9BQvAHLyH4w5YQ/AFLCP5QJSQDkCYh/vBMQvyBmYT4QzIJ8Qdj01nInYJBnmcAwjLpiwJWwymEXCsYJJy8eSYDGObcsy1ObG1uODq261woGCT0dgZAzLnDJTidTyFkTZvjYZt7DziXARiruWHN90vwCQxXkSjvSgwY+gsYAd532VHgR8UdTTDPkbjmMmzCya5JT7QuM6hKWwbhCRKkPLv3pYDT6QfuTWSYNH0l7iJUpjD4Bmymohz5y5HjKlMYjMXHaFSag8BnCaDoA/ip6ek/lWYj8ExSaCfjaXyEYO3ZBzwGvksOgcGj+OxE98yOD3wM2weDwI2EfQD8TiB8PG7upZzbYFzzwP/2ONZuc6jLO7xwp3PUexHTLf3A2w5kvAY2eU9+umZG3DV4W7C/Nh6/jJ2o4guZ0jqr4+7pEHA3dij+LNkmnqIoiqIoiqIoCtM8fwCW7DbS/GtOQwAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
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
                    // className={`link ${
                    //   pathname === `${item.href}`
                    //     ? "text-[#0066F5] font-bold outline-none uppercase text-[16px] cursor-pointer"
                    //     : "outline-none uppercase text-[14px] font-medium cursor-pointer hover:text-[#0066F5] hover:font-semibold"
                    // }`}
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
  );
};

export default Navigation;
