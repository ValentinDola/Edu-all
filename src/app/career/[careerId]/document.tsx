import { Progress } from "@nextui-org/progress";
import React from "react";

const Documents = () => {
  return (
    <main className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-5 max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        <a>
          <div className="p-6">
            <h1 className="text-[25px]">About Me</h1>

            <p className="text-sm">
              Undergraduate | Communication | Problem solving | IT Consultant
            </p>
          </div>
        </a>
        <div>
          <div className="p-6">
            <h1 className="text-[25px]">My choice</h1>
            <p className="text-sm">IT technician</p>
          </div>
        </div>
        <div>
          <div className="p-6">
            <h1 className="text-[25px]">Courses progress</h1>

            <p className="text-sm">
              {" "}
              <Progress
                aria-label="Downloading..."
                size="sm"
                value={50}
                color="success"
                showValueLabel={true}
                label={"Consulting"}
                className="max-w-md"
              />
            </p>
            <p className="text-sm">
              <Progress
                aria-label="Downloading..."
                size="sm"
                value={50}
                color="success"
                showValueLabel={true}
                label={"Networking"}
                className="max-w-md"
              />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Documents;
