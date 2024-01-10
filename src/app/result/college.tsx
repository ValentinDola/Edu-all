import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import { Unis } from "@/app/components/data";

export default function Colleges() {
  const { assData, data } = useGlobalContext();

  const [unis, setUnis]: any = useState([]);

  useEffect(() => {
    const transformedData = Array.isArray(assData) ? assData : [assData];

    const type = transformedData.map((item) => item.type);
    const region = transformedData.map((item) => item.region);

    const matchedUnis = Unis.filter((uni) => {
      // Split the location string by comma and trim the parts
      const locationParts = uni.location.split(",").map((part) => part.trim());
      const filteredLocationParts = locationParts.filter(
        (part) => part !== region.toString()
      );
      // Join the filtered parts back into a string
      const filteredLocationString = filteredLocationParts.join(", ");

      return (
        uni.type === type.toString()
        //   &&
        // filteredLocationString == region.toString()
      );
    });

    const unis = matchedUnis.map((uni) => uni);
    setUnis(unis);
  }, [unis]);
  return (
    <div className="grid grid-cols-2 gap-4">
      {unis?.map((item: any, i: number) => (
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
  );
}
