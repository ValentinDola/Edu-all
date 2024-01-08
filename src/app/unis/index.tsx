import { cookies } from "next/headers";
import React, { Suspense } from "react";
import NavigationIndex from "../navigation";
import { Image } from "@nextui-org/image";

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

export default async function UnisComponent() {
  const url = "https://list-of-universities-in-ghana.onrender.com/universities";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  const data: DataType = await result.universities;

  return (
    <>
      <NavigationIndex />
      <section className="mt-[50px] ">
        <main>
          <Suspense fallback={<p>Loading feed...</p>}>
            <div className="grid grid-cols-3 gap-4 max-w-[1380px] w-full mx-auto mt-9 px-7 py-0">
              {data.map((item, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={item.website}
                  className="w-auto h-auto bg-[#F1F2F2] rounded-xl transition"
                >
                  <div className="p-6">
                    <div className="p-5">
                      {item.logo !== "" ? (
                        <Image src={item.icon} width={60} height={60} />
                      ) : (
                        <p className="text-base">No Logo </p>
                      )}
                    </div>
                    <h3 className="text-[20px]">{item.name}</h3>
                    <p className="text-base">Nickname - {item.nickname}</p>
                    <p className="text-base">Location - {item.location}</p>
                    <p className="text-base">Type - {item.type}</p>
                  </div>
                </a>
              ))}
            </div>
          </Suspense>

          {/* <div className="grid grid-cols-3 gap-4 max-w-[1380px] w-full mx-auto mt-9 px-5 py-0">
            {data.map((item, i) => (
              <Card className="py-4" key={i}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{item?.name}</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">{item?.type}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            ))}
          </div> */}
        </main>
      </section>
    </>
  );
}
