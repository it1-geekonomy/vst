'use client'
import { useState, ChangeEvent } from 'react'
import axios from 'axios';
import Footer from '@/components/Footer'
import Image from 'next/image'
import frame1 from '../public/careers/frame1.jpg'
import frame2 from '../public/careers/upload-icon.png'
import frame3 from '../public/careers/mobilebg.png'
import frame4 from '../public/careers/Vector calender.png'
import frame5 from '../public/careers/Vector.png'
import { Toaster, toast } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  aboutYourself: string;
  resume: File | null;
}

export default function Page() {
  const MAX_ABOUT_CHARS = 400;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    aboutYourself: '',
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
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // If this is the aboutYourself field, limit to max characters
    if (name === 'aboutYourself' && value.length > MAX_ABOUT_CHARS) {
      return;
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      const response = await axios.post('/api/sendEmail', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        toast.success('Application submitted successfully');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          aboutYourself: '',
          resume: null,
        });
        setSelectedFile(null);
      } else {
        toast.error(response.data.message || 'Error submitting application.');
      }
    } catch (err: any) {
      console.error('Error sending application:', err);
      toast.error(err.response?.data?.message || 'Error submitting application.');
    } finally {
      setIsSubmitting(false);
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
  
  // Calculate remaining characters
  const remainingChars = MAX_ABOUT_CHARS - formData.aboutYourself.length;
  const charCountColor = remainingChars <= 50 ? 'text-yellow-500' : remainingChars <= 20 ? 'text-red-500' : 'text-gray-400';
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            icon: '✓',
            style: {
              background: '#4CAF50',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              color: 'white',
            },
          },
        }}
      />
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
        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-10 xl:px-16 h-full flex flex-col justify-center">
          <h1 className="font-rocWide font-normal text-[45px] sm:text-[60px] md:text-[75px] lg:text-[85px] xl:text-[90px] text-[#646464] pb-5 md:pb-10 md:mt-48 lg:-mt-14 xl:-mt-32 text-center md:text-left">CAREERS</h1>
          <p className="max-w-[550px]  font-normal text-[15px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-6 lg:leading-8 font-rocWide tracking-tight lg:tracking-tighter lg:text-justify">
            The VST Group offers rewarding career opportunities across a range of disciplines and
            verticals. The Group is an equal opportunity workplace where results are encouraged and
            merit is rewarded, making it an ideal choice for a <span className="text-[#FDB813]">long term career path</span>.
          </p>
        </div>
      </section>

      {/* Form Section - Improved for consistent overlap across all screen sizes */}
      <section className="relative z-20 -mt-36 sm:-mt-36 md:mt-0 lg:-mt-24 xl:-mt-40 bg-transparent pb-10 md:pb-20">
        <div className="px-4 lg:px-6 xl:px-11 2xl:px-14">
          {/* Form Container */}
          <div className="bg-[#3B3B3B] rounded-xl sm:rounded-2xl md:rounded-3xl mx-2 sm:mx-5 md:mx-8 lg:mx-10 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-28">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center mb-4 sm:mb-6 md:mb-8 font-roc font-normal">Join our team</h2>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 lg:gap-8">
                {/* Personal Details Section - Preserved styling */}
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-roc mb-1 md:mb-2 opacity-80 font-normal font-roc">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    required
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none font-normal font-roc"
                  />
                </div>
                <div>
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-roc mb-1 md:mb-2 opacity-80">Mobile number</label>
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
                  <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-roc mb-1 md:mb-2 opacity-80 ">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    required
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none"
                  />
                </div>
                
                {/* About Yourself Section - NEW */}
                <div>
                  <div className="flex justify-between items-center">
                    <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-roc mb-1 md:mb-2 opacity-80">
                      Tell us about yourself and why you want this job.
                    </label>
                    <span className={`text-xs ${charCountColor}`}>
                      {remainingChars} chars left
                    </span>
                  </div>
                  <textarea
                    value={formData.aboutYourself}
                    onChange={handleChange}
                    name="aboutYourself"
                    required
                    rows={4}
                    maxLength={MAX_ABOUT_CHARS}
                    className="w-full bg-[#666666] rounded p-2 md:p-2.5 focus:outline-none resize-none"
                  />
                  <div className="w-full h-1 mt-1 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        formData.aboutYourself.length > MAX_ABOUT_CHARS * 0.8 
                          ? formData.aboutYourself.length > MAX_ABOUT_CHARS * 0.95 
                            ? 'bg-red-500' 
                            : 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(formData.aboutYourself.length / MAX_ABOUT_CHARS * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Upload Resume Section - Enhanced with responsive sizing */}
              <div className="mt-6 md:mt-8">
                <label className="block text-[16px] md:text-[18px] lg:text-[20px] font-normal font-roc mb-1 md:mb-2 opacity-80">Upload resume</label>
                <div className={`bg-[#666666] rounded-lg p-8 sm:p-10 md:p-12 lg:p-16 text-center cursor-pointer relative transition-all duration-300 ${selectedFile ? 'border-2 border-[#FDB813]' : ''}`}>
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
                        <p className="mt-2 text-sm md:text-base text-white opacity-70 font-normal font-roc">
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
                        <p className="mt-3 text-sm text-[#FDB813] font-normal font-roc">
                          Click again to change file
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {fileError ? (
                  <p className="text-xs sm:text-sm text-red-400 font-normal font-roc mt-1 md:mt-2">
                    {fileError}
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-[#FDB813] font-normal font-roc mt-1 md:mt-2">
                    File types accepted: TXT, PDF or Word Doc
                  </p>
                )}
              </div>

              {/* Save Button - Responsive button */}
              <div className="mt-6 md:mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#FDB813] text-black py-2 md:py-3 rounded-lg hover:bg-[#FDB813]/90 transition-colors font-normal font-roc"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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