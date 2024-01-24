// Importing React library
import React from "react";

// Importing NavigationIndex component from the specified path
import NavigationIndex from "../navigation";

// Importing Image component from Next UI library
import { Image } from "@nextui-org/image";

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
export default async function UnisComponent() {
  // API endpoint for fetching university data
  const url = "https://list-of-universities-in-ghana.onrender.com/universities";

  // Options for the fetch request
  const options = {
    method: "GET",
  };

  // Fetching data from the specified API endpoint
  const response = await fetch(url, options);

  // Parsing the response into JSON format
  const result = await response.json();

  // Extracting university data from the result
  const data: DataType = await result.universities;

  // JSX structure for rendering the UnisComponent
  return (
    <>
      {/* Rendering the NavigationIndex component */}
      <NavigationIndex />

      {/* Main section for rendering university data */}
      <section className="mt-[50px]">
        <main>
          {/* Grid layout for displaying university cards */}
          <div className="grid grid-cols-3 gap-4 max-w-[1380px] w-full mx-auto mt-9 px-7 py-0">
            {/* Mapping through the university data and rendering individual cards */}
            {data.map((item, i) => (
              <a
                key={i}
                target="_blank"
                href={item.website}
                className="w-auto h-auto bg-[#F1F2F2] rounded-xl transition unis"
              >
                <div className="p-6">
                  <div className="p-5">
                    {/* Rendering the university logo or a default message if no logo */}
                    {item.logo !== "" ? (
                      <Image
                        src={item.icon}
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
            ))}
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
