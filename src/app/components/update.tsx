"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  primarySkill: string;
  secondarySkill: string;
  interest: string;
  degree: string;
  school: string;
  graduationYear: string;
}

export default function UpdateForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const { data: session } = useSession();
  const [error, setError]: any = React.useState(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await fetch("api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        setError(null);

        console.log(res);
      } else {
        setError("We have issues. Check your credentials");
      }
    } catch (error) {
      console.log("Error during update", error);
    }
  };
  return (
    <section className="mt-[10px] ">
      <main>
        {/*header*/}
        <div className="flex items-start justify-between px-6">
          <h3 className="text-3xl font-semibold">PROFILE</h3>
        </div>
        <div className="relative px-6 flex-auto">
          <p className="m-4 text-blueGray-500 text-lg leading-relaxed">
            After taking this assessment, you will be recommended the top
            majors, colleges and careers based on your academic achievements,
            interests and personality.
          </p>
          <p className="m-4 text-blueGray-500 text-[16px] leading-relaxed">
            We want YOUR results to match YOUR interest. We ask for this
            information so we can match your location and future major to nearby
            schools and careers in your area.
          </p>
          <div>
            <form action="" method="POST">
              <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-1/2 px-4">
                    <div className="relative my-[30px]">
                      <input
                        {...register("primarySkill", { required: true })}
                        type="text"
                        placeholder="Main Skillset"
                        className="input"
                      />
                      {errors.primarySkill?.message && (
                        <span className="text-[11px] text-red-400 mt-5 ml-2">
                          {errors.primarySkill?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="relative my-[30px]">
                      <input
                        {...register("secondarySkill")}
                        type="text"
                        placeholder="Secondary Skillset (optional)"
                        className="input"
                      />
                      {errors.secondarySkill?.message && (
                        <span className="text-[11px] text-red-400 mt-5 ml-2">
                          {errors.secondarySkill?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="relative my-[30px]">
                      <input
                        {...register("interest", { required: true })}
                        type="text"
                        placeholder="What Career are you aiming for?"
                        className="input"
                      />
                      {errors.interest?.message && (
                        <span className="text-[11px] text-red-400 mt-5 ml-2">
                          {errors.interest?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="relative my-[30px]">
                      <input
                        {...register("degree", { required: true })}
                        type="text"
                        placeholder="What degree do you currently have?"
                        className="input"
                      />
                      {errors.degree?.message && (
                        <span className="text-[11px] text-red-400 mt-5 ml-2">
                          {errors.degree?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="relative my-[30px]">
                      <input
                        {...register("school")}
                        type="text"
                        placeholder="Waht school did you attend?"
                        className="input"
                      />
                      {errors.school?.message && (
                        <span className="text-[11px] text-red-400 mt-5 ml-2">
                          {errors.school?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="relative my-[30px]">
                      <input
                        {...register("graduationYear", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Your graduation year"
                        className="input"
                      />
                      {errors.graduationYear?.message && (
                        <span className="text-[11px] text-red-400 mt-5 ml-2">
                          {errors.graduationYear?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Save Changes
          </button>
        </div>

        {/*body*/}
      </main>
    </section>
  );
}
