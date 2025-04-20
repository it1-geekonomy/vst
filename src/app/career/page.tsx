'use client'
import { useState, ChangeEvent } from 'react'
import axios from 'axios';
import Footer from '@/components/Footer'
import Image from 'next/image'
import frame1 from '../public/careers/frame1.jpg'
import frame2 from '../public/careers/upload-icon.png'
import frame3 from '../public/careers/mobilebg.png'

interface FormData {
  name: string;
  email: string;
  mobile: string;
  experience: string;
  currentJobTitle: string;
  preferredRole: string;
  skills: string;
  industries: string;
  startDate: string;
  noticePeriod: string;
  resume: File | null;
}

export default function Page() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    currentJobTitle: '',
    preferredRole: '',
    skills: '',
    industries: '',
    startDate: '',
    noticePeriod: '',
    resume: null,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, resume: file }));
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (validTypes.includes(file.type) || ['doc', 'docx', 'pdf', 'txt'].includes(fileExtension || '')) {


        setSelectedFile(file);
        setFileError('');
      } else {
        setSelectedFile(null);
        setFileError('Please upload a valid file (PDF, DOC, DOCX, or TXT)');
      }
    }
  };
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof FormData]: value,
    }));
  };
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key !== 'resume' && key in formData) {
          const value = formData[key as keyof FormData];
          if (typeof value === 'string') {
            formDataToSend.append(key, value);
          }
        }
      });
      if (selectedFile) {
        formDataToSend.append('resume', selectedFile);
      }
      const sendEmailResponse = await axios.post('/api/sendEmail', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Application submitted successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        experience: '',
        currentJobTitle: '',
        preferredRole: '',
        skills: '',
        industries: '',
        startDate: '',
        noticePeriod: '',
        resume: null,
      });
      setSelectedFile(null);
    } catch (err) {
      console.error('Error sending application:', err);
      alert('Error submitting application.');
    }
  };
  
  // Function to get file icon based on type

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return '📄';
      case 'doc':
      case 'docx':
        return '📝';
      case 'txt':
        return '📄';
      default:
        return '📎';
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background */}
      <section className="relative h-[105vh] md:h-[100vh] xl:h-[105vh]">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 h-[110vh] md:h-[105vh] lg:h-[110vh] hidden lg:block">
          <Image
            src={frame1}
            alt="Background"
            fill
            className="object-fit"
            priority
          />
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 h-[70vh] md:h-[100vh] block lg:hidden">
          <Image
            src={frame3}
            alt="Mobile Background"
            fill
            className="object-fill"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-16 h-full flex flex-col justify-center">
          <h1 className="font-rocWide font-normal text-[45px] sm:text-[60px] md:text-[75px] lg:text-[85px] xl:text-[90px] text-[#646464] pb-5 md:pb-10 md:mt-48 lg:mt-0 text-center md:text-left">CAREERS</h1>
          <p className="max-w-[550px] font-normal tracking-[.14em] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.4] font-rocWide text-justify">
            The VST Group offers rewarding career opportunities across a range of disciplines and
            verticals. The Group is an equal opportunity workplace where results are encouraged and
            merit is rewarded, making it an ideal choice for a <span className="text-[#FDB813]">long term career path</span>.
          </p>
        </div>
      </section>

      {/* Form Section - Improved for consistent overlap across all screen sizes */}
      <section className="relative z-20 -mt-36 sm:-mt-36 md:mt-0 lg:-mt-10 xl:-mt-24 bg-transparent pb-10 md:pb-20">
        <div className="px-4 lg:px-6 xl:px-11 2xl:px-14">
          {/* Form Container */}
          <div className="bg-[#3B3B3B] rounded-xl sm:rounded-2xl md:rounded-3xl mx-2 sm:mx-5 md:mx-8 lg:mx-10 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-28">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center mb-4 sm:mb-6 md:mb-8 font-poppins font-normal">Personal Details</h2>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {/* Personal Details Section - Preserved styling */}
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-poppins mb-1 md:mb-2 opacity-80 font-normal font-poppins">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    required
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none font-normal font-poppins"
                  />
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-normal font-poppins mb-1 md:mb-2 opacity-80 ">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    required
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">Mobile number</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    name="mobile"
                    required
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">Years of Experience</label>
                  <div className="relative">
                    <select
                      className="w-full bg-[#666666] rounded p-2 md:p-2.5 appearance-none focus:outline-none cursor-pointer"
                      value={formData.experience}
                      onChange={handleChange}
                      name="experience"
                      required
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 Year</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5-7">7-9 Years</option>
                      <option value="7-9">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813] pointer-events-none">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">Current Job Title & Company</label>
                  <input
                    type="text"
                    value={formData.currentJobTitle}
                    onChange={handleChange}
                    name="currentJobTitle"
                    required
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">Preferred Job Role at VST Group</label>
                  <div>
                    <div className="relative">
                      <select
                        className="w-full bg-[#666666] rounded p-2 md:p-2.5 appearance-none focus:outline-none cursor-pointer"
                        value={formData.preferredRole}
                        onChange={handleChange}
                        name="preferredRole"
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="manager">Manager</option>
                        <option value="managing">Managing</option>
                        <option value="management-hr">Management HR</option>
                        <option value="hr">HR</option>
                        <option value="sales">Sales</option>
                        <option value="mechanics">Mechanics</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813] pointer-events-none">▼</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Expertise Section */}
              <h2 className="text-xl sm:text-xl md:text-2xl text-center mt-8 md:mt-12 mb-4 md:mb-8 font-poppins font-normal">Skills & Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {/* Industries dropdown */}
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">Which industries have you worked in?</label>
                  <div className="relative">
                    <select
                      className="w-full bg-[#666666] rounded p-2 md:p-2.5 appearance-none focus:outline-none cursor-pointer"
                      value={formData.industries}
                      onChange={handleChange}
                      name="industries"
                      required
                    >
                      <option value="">Select Industries</option>
                      <option value="manager">Manager</option>
                      <option value="managing">Managing</option>
                      <option value="management-hr">Management HR</option>
                      <option value="hr">HR</option>
                      <option value="sales">Sales</option>
                      <option value="mechanics">Mechanics</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813] pointer-events-none">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-poppins mb-1 md:mb-2 opacity-80 font-normal font-poppins">What's your earliest possible start date?</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={handleChange}
                      name="startDate"
                      required
                      className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813]">📅</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">How long is your notice period as per your contract?</label>
                  <div className="relative">
                    <select
                      className="w-full bg-[#666666] rounded p-2 md:p-2.5 appearance-none focus:outline-none cursor-pointer"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      name="noticePeriod"
                      required
                    >
                      <option value="">Select Notice Period</option>
                      <option value="immediate">Immediately</option>
                      <option value="15">15 days</option>
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813] pointer-events-none">▼</div>
                  </div>
                </div>
                {/* Skills dropdown */}
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">What are the primary skills that define your expertise?</label>
                  <div className="relative">
                    <select
                      className="w-full bg-[#666666] rounded p-2 md:p-2.5 appearance-none focus:outline-none cursor-pointer"
                      value={formData.skills}
                      onChange={handleChange}
                      name="skills"
                      required
                    >
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
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FDB813] pointer-events-none">▼</div>
                  </div>

                </div>
              </div>

              {/* Upload Resume Section - Enhanced with responsive sizing */}
              <div className="mt-6 md:mt-8">
                <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-poppins mb-1 md:mb-2 opacity-80">Upload resume</label>
                <div className={`bg-[#666666] rounded-lg p-8 sm:p-10 md:p-12 lg:p-16 text-center cursor-pointer relative h-[150px] sm:h-[170px] md:h-[200px] transition-all duration-300 ${selectedFile ? 'border-2 border-[#FDB813]' : ''}`}>
                  <div className="flex flex-col items-center justify-center h-full relative">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".txt,.pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      required
                    />
                    {!selectedFile ? (
                      <>
                        <Image
                          src={frame2}
                          alt="upload icon"
                          width={40}
                          height={40}
                          className="object-contain pointer-events-none sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
                          priority
                        />
                        <p className="mt-2 text-sm md:text-base text-white opacity-70 font-normal font-poppins">
                          Click to upload your resume
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex items-center bg-[#555555] rounded-lg p-3 w-full max-w-xs">
                          <span className="text-2xl mr-3">{getFileIcon(selectedFile.name || '')}</span>
                          <div className="text-left overflow-hidden flex-1">
                            <p className="text-white font-medium truncate">
                              {selectedFile.name}
                            </p>
                            <p className="text-xs text-gray-300">
                              {(selectedFile.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedFile(null);
                            }}
                            className="ml-2 text-gray-300 hover:text-white"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="mt-3 text-sm text-[#FDB813] font-normal font-poppins">
                          Click again to change file
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {fileError ? (
                  <p className="text-xs sm:text-sm text-red-400 font-normal font-poppins mt-1 md:mt-2">
                    {fileError}
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-[#FDB813] font-normal font-poppins mt-1 md:mt-2">
                    File types accepted: TXT, PDF or Word Doc
                  </p>
                )}
              </div>

              {/* Save Button - Responsive button */}
              <div className="mt-6 md:mt-8 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#FDB813] text-black py-2 md:py-3 rounded-lg hover:bg-[#FDB813]/90 transition-colors font-normal font-poppins"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer bgcolour="bg-[#101010]" />
    </div>
  )
}