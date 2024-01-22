"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../components/alert";

interface IFormInput {
  email: string;
  name: string;
  password: string;
  confirm: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [errorAlert, setErrorAlert] = useState<boolean>(false);

  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        router.push("/login");
      } else {
        setErrorAlert(true);
      }
      setTimeout(() => setErrorAlert(false), 5000);
    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (
    <section className="bg-[#f4f7fa]">
      {errorAlert && (
        <Alert
          error={errorAlert}
          message={
            "User with this email already exist. Please review the form and fill in all required fields with accurate information before submitting again."
          }
        />
      )}
      <div className="bg-[url(/auth-bg.ade81a3.svg)] bg-no-repeat bg-[100%] min-h-screen flex w-full">
        <div className="h-auto relative w-full pt-5 max-w-[1300px] mx-auto my-0 px-[60px] py-0">
          <div className="box-border w-full flex flex-initial flex-row flex-wrap">
            <div className="box-border basis-full max-w-full -pl-5 mb-10">
              <a href="/">
                <Image src={"/LOGO.png"} width={145} height={40} alt="logo" />
              </a>
            </div>
          </div>
          <div className="box-border w-full flex flex-initial flex-row flex-wrap">
            <div className="box-border basis-[58.3333333333%] max-w-[58.3333333333%] p-0">
              <div className="bg-white min-h-[200px] relative overflow-hidden shadow-[1px_15px_18px_rgba(0,0,0,0.03)] pt-[40px] pb-[50px] px-[60px] rounded-xl transition-all">
                <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                  <div className="box-border w-full flex flex-initial flex-row flex-wrap">
                    <div className="box-border basis-full max-w-full pl-0 pr-4 py-0">
                      <div className="mb-12">
                        <h3 className="font-semibold tracking-[-3.9px] leading-[1.2] text-[3rem] mt-0">
                          Dream.Discover.Decide.
                        </h3>
                      </div>
                    </div>
                    <div className="box-border w-full flex flex-initial flex-row flex-wrap items-center basis-full max-w-full p-5 mt-0">
                      <div className="justify-start p-0 box-border  max-w-full w-full flex flex-initial flex-row flex-wrap ">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="ml-5">
                            <Image
                              src={"/link.jpg"}
                              width={500}
                              height={500}
                              alt="linkedin"
                              style={{ maxWidth: "180px", cursor: "pointer" }}
                              onClick={() => signIn("linkedin")}
                            />
                          </div>

                          <div className="ml-10">
                            <Image
                              src={"/google.jpg"}
                              width={500}
                              height={500}
                              alt="google"
                              style={{ maxWidth: "180px", cursor: "pointer" }}
                              onClick={() => signIn("google")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border basis-full max-w-full pl-0 pr-4 py-0">
                      <div className="relative mb-[30px]">
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          placeholder="Full Name"
                          className="input"
                        />
                      </div>
                      <div className="relative mb-[30px]">
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          placeholder="Email Address"
                          className="input"
                        />
                      </div>
                      <div className="relative mb-[30px]">
                        <input
                          type="password"
                          {...register("password", {
                            required: true,
                            min: 6,
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                          })}
                          placeholder="Password"
                          className="input"
                        />
                        <span className="text-[11px] text-green-600 mt-5 ml-2 font-semibold">
                          8 characters, at least one letter and one number.
                        </span>
                      </div>
                      {/* <div className="relative mb-[30px]">
                        <input
                          type="password"
                          {...register("confirm", {
                            required: true,
                            validate: (val: string) => {
                              if (watch("password") != val) {
                                return "your passwords do not match";
                              }
                            },
                          })}
                          placeholder="Confirm Password"
                          className="input"
                        />

                        <span className="text-[11px] text-red-400 mt-5 ml-2 font-semibold">
                          {watch("password")}
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <div className="box-border w-full flex flex-initial flex-row flex-wrap">
                    <div className="box-border w-full flex flex-initial flex-row flex-wrap items-center basis-full max-w-full p-0 mt-0">
                      <div className="p-0 box-border basis-6/12 max-w-[50%]">
                        <span className="text-[rgba(10,46,101,.6)] text-[0.8rem] leading-[1.6] font-semibold">
                          Got an account?
                          <a
                            href="/login"
                            className="text-[#4f94f5] font-semibold"
                          >
                            {" "}
                            login{" "}
                          </a>
                        </span>
                      </div>
                      <div className="justify-end p-0 box-border basis-6/12 max-w-[50%] w-full flex flex-initial flex-row flex-wrap ">
                        <button type="submit" className=" button_auth self-end">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
