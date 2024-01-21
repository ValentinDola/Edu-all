import { useGlobalContext } from "@/app/context/store";
import React, { useEffect, useState } from "react";

const Skills = (props: any) => {
  const { data } = useGlobalContext();
  const { id } = props;
  const [career, setCareer]: any = useState([]);

  useEffect(() => {
    setCareer(data);
  }, [data]);

  return (
    <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        <div className="border-solid border-2 border-[#00aeef] mt-4">
          <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
            <h1 className="text-white font-semibold">
              {`What skills are required for ${career[id]?.name}?`}
            </h1>
          </div>
          <div className="p-5">
            <ul className="grid grid-cols-2 gap-4 list-disc ml-7">
              {career[id]?.skills?.map((item: any, i: number) => (
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

export default Skills;
