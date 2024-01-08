// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import NavigationIndex from "@/app/navigation";
// import { Image } from "@nextui-org/image";
// import { Card, CardHeader, CardBody } from "@nextui-org/card";
// import { Skeleton } from "@nextui-org/skeleton";

// interface Unis {
//   name: String;
//   type: String;
// }

// export const UnisComponent = async () => {
//   return (
//     <>
//       <NavigationIndex />
//       <section className="mt-[50px] ">
//         <main>
//           <div className="grid grid-cols-4 gap-4 max-w-[1380px] w-full mx-auto mt-9 px-5 py-0">
//             {data.map((item, i) => (
//               <Card className="py-4" key={i}>
//                 <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//                   <p className="text-tiny uppercase font-bold">{item?.name}</p>
//                   <small className="text-default-500">12 Tracks</small>
//                   <h4 className="font-bold text-large">{item?.type}</h4>
//                 </CardHeader>
//                 <CardBody className="overflow-visible py-2">
//                   <Image
//                     alt="Card background"
//                     className="object-cover rounded-xl"
//                     src="/images/hero-card-complete.jpeg"
//                     width={270}
//                   />
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };
