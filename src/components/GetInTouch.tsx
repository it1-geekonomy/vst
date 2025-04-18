"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={`flex justify-around p-3 xs:p-4 sm:p-6 md:p-10 ${bgcolour} text-white min-h-screen overflow-x-hidden`}>
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row justify-around items-start gap-6 xs:gap-8 md:gap-10 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pt-[50px] lg:pt-0">
          <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
            <div className="w-full flex justify-end pr-10 sm:pr-16 md:pr-20 lg:pr-20">
              <h1 
                className="text-[#FEBF3D] text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-roc font-normal mb-3 xs:mb-4 md:mb-6 lg:mb-8"
              >
                Get In Touch
              </h1>
            </div>
            <div className="w-full h-[80px] xs:h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[450px] flex justify-center">
              <video
                src="/ContactUsLogo.mp4"
                autoPlay
                muted
                loop
                className="w-[80%] h-[90%] md:object-cover"
                playsInline
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-start">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px]"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-1">
                <label className="block text-white mb-1 font-roc sm:mb-2">First Name</label>
                <input
                  {...register("firstName", { required: true })}
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-1">Required field</span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1 font-roc sm:mb-2">Last Name</label>
                <input
                  {...register("lastName", { required: true })}
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm mt-1">Required field</span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-1">
                <label className="block text-white mb-1 font-roc sm:mb-2">Email</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type="email"
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.type === "required"
                      ? "Required field"
                      : "Invalid email address"}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1 font-roc sm:mb-2">Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1">Required field</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-white mb-1 font-roc sm:mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white min-h-[80px] xs:min-h-[100px] md:min-h-[120px]"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">Required field</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#FEBF3D] text-black py-2.5 xs:py-3 md:py-3 rounded-md hover:bg-[#f4c430] transition-colors mt-4 xs:mt-6 md:mt-8 text-sm sm:text-base md:text-lg  font-poppins"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;