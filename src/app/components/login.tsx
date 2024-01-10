"use client";

import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

// const linkedinOAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(
//   LINKEDIN_CALLBACK_URL
// )}&scope=r_liteprofile%20r_emailaddress`;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
      });
      if (res?.error) {
        console.log("Error");
      } else {
        router.replace("/assessment");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (
    <section className="bg-[#f4f7fa]">
      <div className="bg-[url(/auth-bg.ade81a3.svg)] bg-no-repeat bg-[100%] min-h-screen flex w-full">
        <div className="h-auto relative w-full pt-5 max-w-[1300px] mx-auto my-0 px-[60px] py-0">
          <div className="box-border w-full flex flex-initial flex-row flex-wrap">
            <div className="box-border basis-full max-w-full -pl-5 mb-10">
              <a href="/">
                <svg
                  width="145"
                  height="40"
                  viewBox="0 0 145 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M57.28 18.82H64.24V20.96H57.28V18.82ZM57.48 24.82H65.38V27H54.88V13H65.1V15.18H57.48V24.82ZM68.2784 27V13H74.3984C75.9184 13 77.2518 13.2933 78.3984 13.88C79.5451 14.4667 80.4384 15.28 81.0784 16.32C81.7184 17.36 82.0384 18.5867 82.0384 20C82.0384 21.4 81.7184 22.6267 81.0784 23.68C80.4384 24.72 79.5451 25.5333 78.3984 26.12C77.2518 26.7067 75.9184 27 74.3984 27H68.2784ZM70.8784 24.8H74.2784C75.3318 24.8 76.2384 24.6 76.9984 24.2C77.7718 23.8 78.3651 23.24 78.7784 22.52C79.2051 21.8 79.4184 20.96 79.4184 20C79.4184 19.0267 79.2051 18.1867 78.7784 17.48C78.3651 16.76 77.7718 16.2 76.9984 15.8C76.2384 15.4 75.3318 15.2 74.2784 15.2H70.8784V24.8ZM90.8219 27.2C88.9019 27.2 87.3952 26.66 86.3019 25.58C85.2219 24.5 84.6819 22.94 84.6819 20.9V13H87.2819V20.8C87.2819 22.24 87.5885 23.2867 88.2019 23.94C88.8285 24.5933 89.7085 24.92 90.8419 24.92C91.9752 24.92 92.8485 24.5933 93.4619 23.94C94.0752 23.2867 94.3819 22.24 94.3819 20.8V13H96.9419V20.9C96.9419 22.94 96.3952 24.5 95.3019 25.58C94.2219 26.66 92.7285 27.2 90.8219 27.2ZM99.8031 22.48V20.4H105.303V22.48H99.8031ZM105.888 27L112.188 13H114.748L121.068 27H118.348L112.928 14.38H113.968L108.568 27H105.888ZM108.788 23.76L109.488 21.72H117.048L117.748 23.76H108.788ZM122.849 27V13H125.449V24.8H132.769V27H122.849ZM134.821 27V13H137.421V24.8H144.741V27H134.821Z"
                    fill="black"
                  />
                  <rect width="40" height="40" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0_7_243" transform="scale(0.01)" />
                    </pattern>
                    <image
                      id="image0_7_243"
                      width="100"
                      height="100"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkUlEQVR4nO2dO2tUQRiGHyWFV7ziBRVFI8TYCIIg3uINRAsLrx9oIQriLwhaRgX/gmi0ERHRTrTUymtjq03ID/CCiIXRRAYmsGx2PcfdOecbw/vC24TNzszz7EnOTjEHFEVRFEVRFEVRFEVRFEWZBawF+oD+DtsLLAN6EuDsie/V28V8+uKawtr+mywE9gCnAUvUU8BOYHkH8wm/syu+R6r5hLXtBhaQeTYkXri16AAwp8Rcwmv2VjyXsNb1ZJp1FS/eGnqs4GpZEV9T13zC2rPKXOBkjQAsjhfAN2dlDVdpq7mUuWpry7aaAVjDlTK/YR7za74yGhsYZJGZjhAMONAwl/2O8zgeWbhnsSMEi10T6z2PRd4ywp+ILRmAOBzrPY/AYl7dEpYC14GPwATwJAMQlkmfRCYfgKvAkqplhLuJr3HQyUoIU4RM9kv831JJLgHjTQNKCC2vkMYGZhdTy9gBjLUYTEIoFBL6E9ieSsYM4E2bgSSEUkJCX6USsvUvg0gIpYVMxLuwrnNFQvjXu6x2vZxCyC0JIZWQmymEPJQQUgkJLCWE+r8YSgj+39IlBH8BEoI/dAnBH7SE4A9XQvAHKiEZQDQJ8QdnEuIPyyTEH5BJiD8UkxB/EJZJtZeFvwQJwR+8hOAPW0LwBywh+EOVkAxAmoT4wzMJ8QdmEuIPySTEH4xJiD8My6DaOsFfgoTgD15C8IctIfgDlhD8oUpIBiBNQvzhmYT4AzMJ8YdkEuIPxiTEH4ZlUG2d4C9BQvAHLyH4w5YQ/AFLCP5QJSQDkCYh/vBMQvyBmYT4QzIJ8Qdj01nInYJBnmcAwjLpiwJWwymEXCsYJJy8eSYDGObcsy1ObG1uODq261woGCT0dgZAzLnDJTidTyFkTZvjYZt7DziXARiruWHN90vwCQxXkSjvSgwY+gsYAd532VHgR8UdTTDPkbjmMmzCya5JT7QuM6hKWwbhCRKkPLv3pYDT6QfuTWSYNH0l7iJUpjD4Bmymohz5y5HjKlMYjMXHaFSag8BnCaDoA/ip6ek/lWYj8ExSaCfjaXyEYO3ZBzwGvksOgcGj+OxE98yOD3wM2weDwI2EfQD8TiB8PG7upZzbYFzzwP/2ONZuc6jLO7xwp3PUexHTLf3A2w5kvAY2eU9+umZG3DV4W7C/Nh6/jJ2o4guZ0jqr4+7pEHA3dij+LNkmnqIoiqIoiqIoCtM8fwCW7DbS/GtOQwAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
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
                      <div className="justify-start p-0 box-border max-w-full w-full flex flex-initial flex-row flex-wrap ">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="ml-5">
                            <Image
                              src={"/link.jpg"}
                              width={500}
                              height={500}
                              alt="Picture of the author"
                              style={{ maxWidth: "180px", cursor: "pointer" }}
                              onClick={() => signIn("linkedin")}
                            />
                          </div>

                          <div className="ml-10">
                            <Image
                              src={"/google.jpg"}
                              width={500}
                              height={500}
                              alt="Picture of the author"
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
                        {errors.password?.message ? (
                          <span className="text-[11px] text-red-400 mt-5 ml-2">
                            {errors.password?.message}
                          </span>
                        ) : (
                          <a
                            href="/register"
                            className="text-[#4f94f5] font-semibold mt-5 ml-2 text-[0.8rem] leading-[1.6] underline"
                          >
                            {" "}
                            Forgot password?{" "}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="box-border w-full flex flex-initial flex-row flex-wrap">
                    <div className="box-border w-full flex flex-initial flex-row flex-wrap items-center basis-full max-w-full p-0 mt-0">
                      <div className="p-0 box-border basis-6/12 max-w-[50%]">
                        <span className="text-[rgba(10,46,101,.6)] text-[0.8rem] leading-[1.6]">
                          New user?
                          <a
                            href="/register"
                            className="text-[#4f94f5] font-semibold"
                          >
                            {" "}
                            Create account{" "}
                          </a>
                        </span>
                      </div>
                      <div className="justify-end p-0 box-border basis-6/12 max-w-[50%] w-full flex flex-initial flex-row flex-wrap ">
                        <button type="submit" className=" button_auth self-end">
                          Login
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
