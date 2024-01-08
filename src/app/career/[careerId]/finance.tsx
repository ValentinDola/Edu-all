import { useGlobalContext } from "@/app/context/store";
import { Progress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";

const Finance = (props: any) => {
  const { data } = useGlobalContext();
  const { id } = props;

  const [major, setMajor]: any = useState([]);

  useEffect(() => {
    setMajor(data);
  }, [major]);

  return (
    <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        <div className="border-solid border-2 border-[#00aeef] mt-4 w-1/3">
          <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
            <h1 className="text-white font-semibold">{`Salary Info`}</h1>
          </div>
          {major[id]?.Salaries !== null ? (
            <div className="p-5">
              <p className="text-sm ">
                Median Annual Wage : <strong>{major[id]?.salaries?.MAW}</strong>{" "}
              </p>
              <p className="text-sm ">
                Median Hourly Wage : <strong>{major[id]?.salaries?.MHW}</strong>{" "}
              </p>
              <p className="text-sm ">
                Total Employed Nationally :{" "}
                <strong>{major[id]?.salaries?.TEN}</strong>{" "}
              </p>
            </div>
          ) : (
            <div className="p-5">
              <p className="text-sm ">
                We do not have a salary list for this major
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Finance;
