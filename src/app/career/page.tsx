'use client'

import Footer from '@/components/Footer'
import Image from 'next/image'
import frame1 from '../public/careers/frame1.jpg'
import frame2 from '../public/careers/upload-icon.png'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background */}
      <section className="relative h-[105vh]">
        {/* Background Image - Extended to cover overlap */}
        <div className="absolute inset-0 h-[110vh]"> {/* Extended height to cover overlap */}
          <Image
            src={frame1}
            alt="Background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-18 h-full flex flex-col justify-center">
          <h1 className="font-['FONTSPRING DEMO - Roc Grotesk'] lg:text-[90px] xl:text-[85px] md:text-[75px] text-[#646464] pb-10">CAREERS</h1>
          <p className="max-w-[550px] tracking-[.14em] text-[21px] leading-[1.4] font-['FONTSPRING DEMO - Roc Grotesk'] text-justify">
            The VST Group offers rewarding career opportunities across a range of disciplines and
            verticals. The Group is an equal opportunity workplace where results are encouraged and
            merit is rewarded, making it an ideal choice for a <span className="text-[#FDB813]">long term career path</span>.
          </p>
        </div>
      </section>

      {/* Form Section - Overlapping with extended background */}
      <section className="relative z-20 -mt-20 bg-transparent pb-20">
        <div className="container mx-auto px-11">
          {/* Form Container */}
          <div className="bg-[#3B3B3B] rounded-3xl mx-10 py-20 px-28">
            <h2 className="text-[40px] text-center mb-8">Personal Details</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                {/* Personal Details Section */}
                <div>
                  <label className="block text-[20px] font-poppinspins mb-2 opacity-80">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#666666] rounded p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[20px] font-poppinspins mb-2 opacity-80">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#666666] rounded p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[20px] font-poppinspins mb-2 opacity-80">Mobile number</label>
                  <input
                    type="tel"
                    className="w-full bg-[#666666] rounded p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[20px] font-poppins mb-2 opacity-80">Years of Experience</label>
                  <div className="relative">
                    <select className="w-full bg-[#666666] rounded p-2.5 appearance-none focus:outline-none">
                      <option>Select Experience</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[20px] font-poppins mb-2 opacity-80">Current Job Title & Company</label>
                  <input
                    type="text"
                    className="w-full bg-[#666666] rounded p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[20px] font-['FONTSPRING DEMO - Roc Grotesk Wide'] mb-2 opacity-80">Preferred Job Role at VST Group</label>
                  <div className="relative">
                    <select className="w-full bg-[#666666] rounded p-2.5 appearance-none focus:outline-none">
                      <option value="">Select Role</option>
                      <option value="manager">Manager</option>
                      <option value="managing">Managing</option>
                      <option value="management-hr">Management HR</option>
                      <option value="hr">HR</option>
                      <option value="sales">Sales</option>
                      <option value="mechanics">Mechanics</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">▼</div>
                  </div>
                </div>
              </div>

              {/* Skills & Expertise Section */}
              <h2 className="text-2xl text-center mt-12 mb-8">Skills & Expertise</h2>

              <div className="grid grid-cols-2 gap-8">
                {/* Industries dropdown */}
                <div>
                  <label className="block text-[20px] font-['FONTSPRING DEMO - Roc Grotesk Wide'] mb-2 opacity-80">Which industries have you worked in?</label>
                  <div className="relative">
                    <select className="w-full bg-[#666666] rounded p-2.5 appearance-none focus:outline-none">
                      <option value="">Select Industries</option>
                      <option value="manager">Manager</option>
                      <option value="managing">Managing</option>
                      <option value="management-hr">Management HR</option>
                      <option value="hr">HR</option>
                      <option value="sales">Sales</option>
                      <option value="mechanics">Mechanics</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[20px] font-poppins mb-2 opacity-80">What's your earliest possible start date?</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full bg-[#666666] rounded p-2.5 focus:outline-none"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">📅</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[20px] font-['FONTSPRING DEMO - Roc Grotesk Wide'] mb-2 opacity-80">How long is your notice period as per your contract?</label>
                  <div className="relative">
                    <select className="w-full bg-[#666666] rounded p-2.5 appearance-none focus:outline-none">
                      <option value="">Select Notice Period</option>
                      <option value="immediate">Immediately</option>
                      <option value="15">15 days</option>
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">▼</div>
                  </div>
                </div>
                {/* Skills dropdown */}
                <div>
                  <label className="block text-[20px] font-['FONTSPRING DEMO - Roc Grotesk Wide'] mb-2 opacity-80">What are the primary skills that define your expertise?</label>
                  <div className="relative">
                    <select className="w-full bg-[#666666] rounded p-2.5 appearance-none focus:outline-none">
                      <option value="">Select Skills</option>
                      <option value="management">Management Skills</option>
                      <option value="hr-skills">HR Management</option>
                      <option value="sales-skills">Sales & Marketing</option>
                      <option value="mechanical">Mechanical Skills</option>
                      <option value="leadership">Leadership</option>
                      <option value="communication">Communication</option>
                      <option value="technical">Technical Skills</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">▼</div>
                  </div>
                </div>
              </div>

              {/* Upload Resume Section */}
              <div className="mt-8">
                <label className="block text-[20px] font-['FONTSPRING DEMO - Roc Grotesk Wide'] mb-2 opacity-80">Upload resume</label>
                <div className="bg-[#666666] rounded-lg p-16 text-center cursor-pointer relative h-[200px]">
                  <div className="flex flex-col items-center justify-center h-full relative">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".txt,.pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          console.log('Selected file:', file.name);
                        }
                      }}
                    />
                    <Image
                      src={frame2}
                      alt="upload icon"
                      width={50}
                      height={50}
                      className="object-contain pointer-events-none"
                      priority
                    />
                    {/* Optional: Display selected filename */}
                    <p className="mt-2 text-sm text-white">
                      {/* You can display the selected filename here */}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#FDB813] font-['FONTSPRING DEMO - Roc Grotesk Wide'] mt-2">
                  File types accepted: TXT,PDF or Word Doc
                </p>
              </div>

              {/* Save Button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="w-1/3 bg-[#FDB813] text-black py-3 rounded-lg hover:bg-[#FDB813]/90 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
