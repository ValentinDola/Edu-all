import { Progress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/store";

const Overview = (props: any) => {
  const { data } = useGlobalContext();
  const { id } = props;

  const [career, setCareer]: any = useState([]);

  useEffect(() => {
    setCareer(data);
    console.log(data);
  }, [career]);

  return (
    <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        <div className="border-solid border-2 border-[#00aeef] mt-4">
          <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
            <h1 className="text-white font-semibold">
              {`What ${career[id]?.name} do?`}
            </h1>
          </div>
          <div className="p-5">
            <ul className="grid grid-cols-2 gap-4 list-disc ml-7">
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

export default Overview;
