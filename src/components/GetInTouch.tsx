"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactUs: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key as keyof IFormInputs]);
      });
      
      const response = await axios.post('/api/contactEmail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`flex justify-around p-3 xs:p-4 sm:p-6 md:p-10 ${bgcolour} text-white min-h-screen overflow-x-hidden`}>
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row justify-around items-start gap-6 xs:gap-8 md:gap-10 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pt-[50px] lg:pt-0">
          <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
            <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-20">
              <h1
                className="text-[#FEBF3D] text-4xl xs:text-5xl sm:text-5xl md:text-5xl font-rocWide font-normal mb-3 xs:mb-4 md:mb-6 lg:mb-8"
              >
                Get In Touch
              </h1>
            </div>
            <div className="w-full h-[150px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] flex justify-center items-center">
              <video
                src="/ContactUsLogo.mp4"
                autoPlay
                muted
                loop
                className="w-[95%] h-[95%] object-contain"
                playsInline
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-start">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] font-rocWide font-medium"
          >
            {submitStatus && (
              <div className={`p-4 rounded-md mb-4 ${submitStatus.success ? 'bg-green-800 text-white' : 'bg-red-800 text-white'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 ">
              <div className="flex-1">
                <label className="block text-white mb-1  sm:mb-2">First Name</label>
                <input
                  {...register("firstName", { required: true })}
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-1">Required field</span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1  sm:mb-2">Last Name</label>
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
                <label className="block text-white mb-1 sm:mb-2">Email</label>
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
                <label className="block text-white mb-1 sm:mb-2">Phone Number</label>
                <input
                  {...register("phoneNumber", { required: true })}
                  type="tel"
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm mt-1">Required field</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-white mb-1 sm:mb-2">Message</label>
              <textarea
                {...register("message")}
                className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white min-h-[80px] xs:min-h-[100px] md:min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FEBF3D] text-black py-2.5 xs:py-3 md:py-3 rounded-md hover:bg-[#f4c430] transition-colors mt-4 xs:mt-6 md:mt-8 text-sm sm:text-base md:text-lg font-poppins font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;