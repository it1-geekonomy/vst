'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'
import Footer from '@/components/Footer'
import frame1 from '@/app/public/contact-us/frame1.jpg'
import Twitter from '@/app/public/contact-us/Twitter'
import Discord from '@/app/public/contact-us/Discord'
interface ContactFormInputs {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormInputs>()

  const onSubmit: SubmitHandler<ContactFormInputs> = data => {
    console.log(data)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-[#3B3B3B]">
      {/* Hero Section with Background Image */}
      <div className="relative w-full">
        <Image 
          src={frame1} 
          alt="Contact Us Background" 
          className="w-full h-auto"
          priority
        />
       
      </div>

      {/* Contact Form Section with outer gray container like in image */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
         
          
          {/* Outer gray container that matches the image */}
          <div className="bg-[#3B3B3B] rounded-xl mx-auto max-w-100% p-18 shadow-lg">
          <h2 className="text-4xl text-white text-center mb-10">Contact Details</h2>
            {/* Inner form container */}
            <div className="bg-transparent rounded-xl mx-auto overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left side - Contact Information */}
                <div className="bg-black text-white p-8 md:p-10 md:w-2/5 relative rounded-l-xl z-3">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                    <p className="text-gray-400 mb-12">Say something to start a live chat!</p>
                    
                    <div className="space-y-8 mt-6">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <p>+91 8023468548</p>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p>mdoffice@vstsons.in</p>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p>1 Palace Cross Road,<br />Bangalore - 560020</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Repositioned social media icons for better mobile display */}
                  <div className="pt-12 sm:pt-16 md:absolute md:bottom-10 md:left-10 flex space-x-4">
                    <a href="#" className="bg-[#1B1B1B] p-2 rounded-full transition-colors hover:bg-white group">
                      <Twitter />
                    </a>
                    <a href="#" className="bg-[#1B1B1B] p-2 rounded-full transition-colors hover:bg-white group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#1B1B1B] p-2 rounded-full transition-colors hover:bg-white group">
                      <Discord />
                    </a>
                  </div>
                  
                 
                </div>
                
                {/* Right side - Form */}
                <div className="bg-[#606060] p-8 md:p-10 md:w-3/5 rounded-r-xl">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">First Name</label>
                        <input
                          {...register('firstName', { required: true })}
                          className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-white text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Last Name</label>
                        <input
                          {...register('lastName', { required: true })}
                          className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-white text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Email</label>
                        <input
                          {...register('email', { 
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                          })}
                          className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-white text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                        <input
                          {...register('phoneNumber', { required: true })}
                          className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-white text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1 text-white">Message</label>
                      <div className="mt-1">
                        <textarea
                          {...register('message', { required: true })}
                          rows={4}
                         
                          className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-white text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-[#FEBF3D] text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer bgcolour="bg-[#101010]" />
    </div>
  )
}
