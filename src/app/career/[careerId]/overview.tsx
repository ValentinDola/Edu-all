// Import React for creating React components
import React, { useEffect, useState } from "react";

// Import useGlobalContext from the context/store module
import { useGlobalContext } from "@/app/context/store";

// Overview component
const Overview = (props: any) => {
  // Destructure data from the global context
  const { data } = useGlobalContext();

  // Destructure id from props
  const { id } = props;

  // State to store career information
  const [career, setCareer]: any = useState([]);

  // useEffect to update career state when data changes
  useEffect(() => {
    setCareer(data);
    console.log(data); // Log data to the console for debugging
  }, [data]);

  return (
    <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        {/* Main container with border */}
        <div className="border-solid border-2 border-[#00aeef] mt-4">
          {/* Header section with a background color */}
          <div className="bg-[#00aeef] border-[#00aeef] px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
            {/* Display the header dynamically */}
            <h1 className="text-white font-semibold">
              {`What ${career[id]?.name} do?`}
            </h1>
          </div>
          {/* Main content section */}
          <div className="p-5">
            {/* List of items related to what the career does */}
            <ul className="grid grid-cols-2 gap-7 list-disc ml-7">
              {career[id]?.dos?.map((item: any, i: number) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

// Export the Overview component as the default export
export default Overview;
