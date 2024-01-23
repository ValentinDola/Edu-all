"use client";

// Importing required dependencies
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "../components/alert";

// Define the form input interface
interface IFormInput {
  email: string;
  password: string;
}

// Main component definition
export default function LoginForm() {
  // React Hook Form (RHF) configuration
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  // State for handling error alerts
  const [errorAlert, setErrorAlert] = useState<boolean>(false);

  // Next.js router
  const router = useRouter();

  // Form submission handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;
    try {
      // Attempt to sign in using credentials
      const res = await signIn("credentials", {
        email,
        password,
      });

      // Check for errors in the response
      if (res?.error) {
        return null;
      } else {
        // Redirect to the assessment page upon successful sign-in
        router.replace("/assessment");
      }

      // Set a timeout to hide the error alert after 5 seconds
      setTimeout(() => setErrorAlert(false), 5000);
    } catch (error) {
      // Handle errors during the sign-in process
      setErrorAlert(true);
      console.log("Error during registration", error);
    }
  };

  // Component rendering
  return (
    <section className="bg-[#f4f7fa]">
      {/* Display an error alert if needed */}
      {errorAlert ? (
        <Alert
          error={errorAlert}
          message={
            "Please review the form and fill in all required fields with accurate information before submitting again."
          }
        />
      ) : null}

      {/* Main content section */}
      <div className="bg-[url(/auth-bg.ade81a3.svg)] bg-no-repeat bg-[100%] min-h-screen flex w-full">
        <div className="h-auto relative w-full pt-5 max-w-[1300px] mx-auto my-0 px-[60px] py-0">
          <div className="box-border w-full flex flex-initial flex-row flex-wrap">
            {/* Logo */}
            <div className="box-border basis-full max-w-full -pl-5 mb-10">
              <a href="/">
                <Image src={"/LOGO.png"} width={145} height={40} alt="logo" />
              </a>
            </div>
          </div>

          {/* Login Form */}
          <div className="box-border w-full flex flex-initial flex-row flex-wrap">
            <div className="box-border basis-[58.3333333333%] max-w-[58.3333333333%] p-0">
              <div className="bg-white min-h-[200px] relative overflow-hidden shadow-[1px_15px_18px_rgba(0,0,0,0.03)] pt-[40px] pb-[50px] px-[60px] rounded-xl transition-all">
                <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                  {/* Form fields */}
                  <div className="box-border w-full flex flex-initial flex-row flex-wrap">
                    {/* Header */}
                    <div className="box-border basis-full max-w-full pl-0 pr-4 py-0">
                      <div className="mb-12">
                        <h3 className="font-semibold tracking-[-3.9px] leading-[1.2] text-[3rem] mt-0">
                          Dream.Discover.Decide.
                        </h3>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="box-border w-full flex flex-initial flex-row flex-wrap items-center basis-full max-w-full p-5 mt-0">
                      <div className="justify-start p-0 box-border max-w-full w-full flex flex-initial flex-row flex-wrap ">
                        <div className="grid grid-cols-2 gap-5">
                          {/* LinkedIn Login */}
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

                          {/* Google Login */}
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

                    {/* Email and Password Fields */}
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
                        {/* Display password error message */}
                        {errors.password?.message && (
                          <span className="text-[11px] text-red-400 mt-5 ml-2">
                            {errors.password?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button and Registration Link */}
                  <div className="box-border w-full flex flex-initial flex-row flex-wrap">
                    <div className="box-border w-full flex flex-initial flex-row flex-wrap items-center basis-full max-w-full p-0 mt-0">
                      {/* Registration Link */}
                      <div className="p-0 box-border basis-6/12 max-w-[50%]">
                        <span className="text-[rgba(10,46,101,.6)] text-[0.8rem] leading-[1.6] font-semibold">
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

                      {/* Submit Button */}
                      <div className="justify-end p-0 box-border basis-6/12 max-w-[50%] w-full flex flex-initial flex-row flex-wrap ">
                        <button type="submit" className="button_auth self-end">
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

// Comments:

// Dependencies and Imports:

// All necessary dependencies and components are imported at the beginning of the file.
// Form Handling:

// The component uses the react-hook-form library for form handling. Fields are registered, and form validation is managed through RHF.
// State Management:

// The component uses state to handle the display of error alerts.
// Form Submission:

// The onSubmit function is responsible for handling the form submission, signing in using credentials, and redirecting on success.
// Styling and Layout:

// The component follows a clean structure with well-defined sections for the logo, form fields, social login buttons, and the form submission button.
// Error Handling:

// An error alert is displayed if there is an error during the form submission. The alert disappears after 5 seconds.
// Password Validation:

// Password validation is performed, and error messages are displayed accordingly.
// Social Login Buttons:

// Social login buttons for LinkedIn and Google are included, and clicking on them triggers the corresponding sign-in method.
// Registration Link:

// A link to the registration page is provided for new users.
// Overall Structure:

// The component is well-organized, making it easy to understand and maintain.
