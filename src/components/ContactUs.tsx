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

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-around bg-black text-white min-h-screen pt-0">
      <div className="container mx-auto max-w-6xl flex justify-around items-center py-10">
        <div className="flex-1 flex flex-col items-start">
          <div className="w-[700px]">
            <h1 className="text-[#ffd700] text-6xl font-normal mb-8">
              Contact Us
            </h1>
            <div className="w-[700px] h-[700px] pr-45">
              <video
                src="/ContactUsLogo.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 pl-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 w-[600px]"
          >
            <div className="flex gap-8">
              <div className="flex-1">
                <label className="block text-white mb-2">First Name</label>
                <input
                  {...register("firstName", { required: true })}
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Last Name</label>
                <input
                  {...register("lastName", { required: true })}
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-1">
                <label className="block text-white mb-2">Email</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type="email"
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ffd700] text-black py-4 rounded-md hover:bg-[#f4c430] transition-colors mt-8"
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
