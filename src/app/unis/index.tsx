"use client";

// Importing React library
import React, { useEffect, useState } from "react";

// Importing NavigationIndex component from the specified path
import NavigationIndex from "../navigation";

// Importing Image component from Next UI library
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/react";

// Defining the DataType for the structure of university data
type DataType = {
  map(arg0: (item: any, i: any) => React.JSX.Element): React.ReactNode;
  name: String;
  nickname: String;
  location: String;
  logo: String;
  icon: String;
  website: String;
  type: String;
};
// Exporting the UnisComponent asynchronous function
export default function UnisComponent() {
  const [data, setData]: any = useState([]);
  const [filteredArray, setFilteredArray]: any = useState([]);

  useEffect(() => {
    const Unparsed: any = localStorage.getItem("UnisPage");

    const unisData = JSON.parse(Unparsed);

    setData(unisData);
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    // Update the searchQuery state when the input value changes
    const term = e.target.value;

    const filtered: any = data.filter((item: any) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredArray(filtered);
  };

  return (
    <>
      {/* Rendering the NavigationIndex component */}
      <NavigationIndex />

      {/* Main section for rendering university data */}
      <section className="mt-[50px]">
        <main>
          <div className="flex justify-center items-center mt-5">
            <div className="w-[50%]">
              <Input
                radius="md"
                size="md"
                placeholder="University"
                classNames={{
                  input: "text-sm pt-1 pl-4",
                }}
                startContent={
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-default-400 text-lg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M22 22L20 20"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                }
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Grid layout for displaying university cards */}
          <div className="grid grid-cols-3 gap-4 max-w-[1380px] w-full mx-auto mt-9 px-7 py-0">
            {/* Mapping through the university data and rendering individual cards */}
            {filteredArray.length > 0
              ? filteredArray.map(
                  (
                    item: {
                      website: string | undefined;
                      logo: string;
                      icon: string | undefined;
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                      nickname:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                      location:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                      type:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                    },
                    i: React.Key | null | undefined
                  ) => (
                    <a
                      key={i}
                      target="_blank"
                      href={item?.website}
                      className="w-auto h-auto bg-[#F1F2F2] rounded-xl transition unis"
                    >
                      <div className="p-6">
                        <div className="p-5">
                          {/* Rendering the university logo or a default message if no logo */}
                          {item.logo !== "" ? (
                            <Image
                              src={item?.icon}
                              width={60}
                              height={60}
                              alt="icon"
                            />
                          ) : (
                            <p className="text-base">No Logo </p>
                          )}
                        </div>
                        {/* Displaying university details */}
                        <h3 className="text-[20px] name">{item.name}</h3>
                        <p className="text-base nickname">
                          Nickname - {item.nickname}
                        </p>
                        <p className="text-base location">
                          Location - {item.location}
                        </p>
                        <p className="text-base type">Type - {item.type}</p>
                      </div>
                    </a>
                  )
                )
              : data.map(
                  (
                    item: {
                      website: string | undefined;
                      logo: string;
                      icon: string | undefined;
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                      nickname:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                      location:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                      type:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                    },
                    i: React.Key | null | undefined
                  ) => (
                    <a
                      key={i}
                      target="_blank"
                      href={item?.website}
                      className="w-auto h-auto bg-[#F1F2F2] rounded-xl transition unis"
                    >
                      <div className="p-6">
                        <div className="p-5">
                          {/* Rendering the university logo or a default message if no logo */}
                          {item.logo !== "" ? (
                            <Image
                              src={item?.icon}
                              width={60}
                              height={60}
                              alt="icon"
                            />
                          ) : (
                            <p className="text-base">No Logo </p>
                          )}
                        </div>
                        {/* Displaying university details */}
                        <h3 className="text-[20px] name">{item.name}</h3>
                        <p className="text-base nickname">
                          Nickname - {item.nickname}
                        </p>
                        <p className="text-base location">
                          Location - {item.location}
                        </p>
                        <p className="text-base type">Type - {item.type}</p>
                      </div>
                    </a>
                  )
                )}
          </div>
        </main>
      </section>
    </>
  );
}

// Comments:

// React Imports:

// Importing React from the React library.
// NavigationIndex Component Import:

// Importing the NavigationIndex component from the specified path.
// Image Component Import:

// Importing the Image component from the Next UI library.
// DataType Definition:

// Defining the DataType type to describe the structure of university data.
// UnisComponent Function:

// Defining the UnisComponent asynchronous function.
// API Endpoint and Fetch Options:

// Specifying the API endpoint for fetching university data and options for the fetch request.
// Fetch and Result:

// Fetching data from the API endpoint, parsing the response into JSON, and extracting university data.
// JSX Structure:

// Rendering the NavigationIndex component, defining the main section, and mapping through the university data to render individual cards.
// Image Rendering:

// Rendering the university logo using the Image component or displaying a default message if no logo is available.
// University Details:

// Displaying various details of each university, such as name, nickname, location, and type.
