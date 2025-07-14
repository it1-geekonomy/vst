'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'

import frame1 from '@/app/public/contact-us/Contact us page.jpg'

import axios from 'axios'
import { useState, useRef } from 'react'

import ContactUsFooter from '@/components/ContactUsFooter'
import ReCAPTCHA from 'react-google-recaptcha'
interface ContactFormInputs {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormInputs>()

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const recaptchaToken = (recaptchaRef.current as any)?.getValue()
    if (!recaptchaToken) {
      setSubmitStatus({
        success: false,
        message: 'Please complete the reCAPTCHA.'
      })
      return
    }
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key as keyof ContactFormInputs])
      })
      
      const response = await axios.post('/api/contactEmail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      })
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <div className="relative w-full">
        <Image 
          src={frame1} 
          alt="Contact Us Background" 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Contact Form Section with even more decreased width */}
      <div className="bg-black py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl text-white text-center mb-16 md:mb-24 font-normal">
            Get in touch with us.
          </h1>
          
          <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto">
              {submitStatus && (
                <div className={`p-4 rounded-md mb-6 ${submitStatus.success ? 'bg-green-800 text-white' : 'bg-red-800 text-white'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                <div className="flex flex-col">
                  <label className="text-white font-roc mb-4">First Name</label>
                  <input
                    {...register('firstName', { required: true })}
                    className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                  />
                  {errors.firstName && (
                    <span className="text-red-400 text-xs font-roc mt-1">First name is required</span>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <label className="text-white font-roc mb-4">Last Name</label>
                  <input
                    {...register('lastName', { required: true })}
                    className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-xs font-roc mt-1">Last name is required</span>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <label className="text-white font-roc mb-4">Email</label>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    type="email"
                    className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs font-roc mt-1">
                      {errors.email.type === "required"
                        ? "Email is required"
                        : "Invalid email address"}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <label className="text-white font-roc mb-4">Phone Number</label>
                  <input
                    {...register('phoneNumber', { required: true })}
                    type="tel"
                    className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-400 text-xs font-roc mt-1">Phone number is required</span>
                  )}
                </div>
              </div>
              
              <div className="mt-16 md:mt-20">
                <label className="text-white font-roc mb-4 block">Message</label>
                <input
                  {...register('message', { required: true })}
                  placeholder="Write your message in 400 words.."
                  className="w-full bg-transparent border-b border-white pb-2 focus:outline-none text-white"
                />
                {errors.message && (
                  <span className="text-red-400 text-xs font-roc mt-1">Message is required</span>
                )}
              </div>
              
              <div className="mt-8 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LdJJ38rAAAAACZeKQwQ3qCMn4-Dy6XkwlT5Ymb9" // <-- replace with your real site key
                  onChange={token => setRecaptchaToken(token)}
                />
              </div>
              
              <div className="flex justify-center md:justify-end mt-16">
                <button
                  
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  className="bg-[#FEBF3D] text-black py-4 px-12 rounded-md hover:bg-[#f4c430] transition-colors text-lg font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            
            {/* Circle decorations in bottom right */}
            <div className="absolute bottom-20 right-[-250]  pointer-events-none">
              <div className="relative">
                <div className="absolute bottom-28 right-35 w-40 h-40 bg-gray-800 rounded-full opacity-40 transform translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-800 rounded-full opacity-40 transform translate-x-1/3 translate-y-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsFooter bgcolour="bg-[#101010]" />
    </div>
  )
}
