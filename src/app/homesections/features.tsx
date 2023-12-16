import React from "react";

export default function Features() {
  return (
    <section className="overflow-hidden pb-4">
      <div className="grid grid-cols-2 gap-5 max-w-[1380px] w-full mx-auto my-0 px-5 py-0">
        <div className="w-[606px] h-[158px] p-3">
          <h1 className="text-[40px]">Dream. Discover. Decide.</h1>
          <p className="text-base">
            Unleash your potential with personalized career and university
            recommendations. Your future, your way.
          </p>
        </div>
        <div className="w-[606px] h-[180px] bg-[#FEF6EE] rounded-xl">
          <div className="p-6">
            <h1 className="text-[30px]">Career Recommendations</h1>
            <p className="text-base">
              Get personalized career suggestions based on your skills,
              interests, and aspirations.
            </p>
          </div>
        </div>
        <div className="w-[606px] h-[180px] bg-[#F3F6FF] rounded-xl">
          <div className="p-6">
            <h1 className="text-[30px]">University Recommendations</h1>
            <p className="text-base">
              Discover universities that align with your chosen career path and
              personal preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
