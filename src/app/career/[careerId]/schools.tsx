import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/store";

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

const Schools = (props: any) => {
  const { data } = useGlobalContext();
  const { id } = props;

  const [career, setCareer]: any = useState([]);

  useEffect(() => {
    setCareer(data);
    console.log(data);
  }, [data]);
  return (
    <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div className="max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        <div className="border-solid border-2 border-[#00aeef] mt-4">
          <div className="bg-[#00aeef] border-[#00aeef]  px-[15px] py-2.5 rounded-t-[3px] border-b-transparent border-b border-solid">
            <h1 className="text-white font-semibold">{`Result`}</h1>
          </div>
          <div className="p-5">
            <div className="">
              <h1 className="text-black text-xl max-w-[1380px] w-full mx-auto mt-9 px-7 py-0">
                These are schools with instructional programs in{" "}
                <strong>{career[id]?.name}</strong>
              </h1>
              <div className="grid grid-cols-2 gap-9 max-w-[1380px] w-full mx-auto mt-9 px-7 py-0">
                {career[id]?.schools?.map((item: any, i: number) => (
                  <a
                    key={i}
                    target="_blank"
                    href={item?.website}
                    className=" w-auto h-auto bg-[#F1F2F2] rounded-xl hover:bg-[#F1F2F2] transition"
                  >
                    <div className="p-6">
                      <h3 className="text-[20px] underline text-[#00aeef]">
                        {item?.name}
                      </h3>
                      <p className="text-base">Nickname - {item?.nickname}</p>
                      <p className="text-base">Location - {item?.location}</p>
                      <p className="text-base">Type - {item?.type}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Schools;
