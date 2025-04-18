
import Image from 'next/image'
import Tractor from '@/app/public/images/Manufacture/Tractor.png'
import Image1 from '@/app/public/tillers/frame1.png'
import Image2 from '@/app/public/tillers/frame2.png'
import Image3 from '@/app/public/tillers/frame3.png'
import Trusted1 from '@/app/public/tillers/Trusted1.png'
import Timeless2 from '@/app/public/tillers/Timeless2.png'
import Tough3 from '@/app/public/tillers/Tough3.png'
import BusinessSectors from "@/components/automotiveFranchises/BusinessSectors";



const ManufacturePage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#02231C_0%,#04473F_50%,#066C5E_100%)]">
      <div className="container mx-auto px-12 pt-30 pb-12 flex flex-col justify-around min-h-screen">
        {/* Image Grid Section - 3 images at the top */}
        <div className="flex justify-center items-start space-x-8 mb-16">
          <div className="relative overflow-hidden group" style={{ width: '536px', height: '671.1796264648438px' }}>
            <Image
              src={Image1}
              alt="VST Tractor 1"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src={Trusted1}
              alt="Trusted"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority
            />
          </div>
          <div className="relative overflow-hidden group" style={{ width: '536px', height: '671.1796264648438px' }}>
            <Image
              src={Image2}
              alt="VST Tractor Assembly"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src={Timeless2}
              alt="Timeless"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority
            />
          </div>
          <div className="relative overflow-hidden group" style={{ width: '536px', height: '671.1796264648438px' }}>
            <Image
              src={Image3}
              alt="VST Tractor in Field"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src={Tough3}
              alt="Tough"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-16 leading-tight text-white text-center">
          Empowering Farmers With Efficiency, Affordability And Reliability
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-white" style={{ maxWidth: "567px" }}>
            <div className="text-xl mb-8" style={{ lineHeight: "1.8" }}>
              <p style={{ 
                textAlign: "justify", 
                hyphens: "none",
                wordSpacing: "0.05rem"
              }}>
                VST Tillers Tractors was incorporated in the 
                year 1967 with Mitsubishi Heavy Industries Ltd. 
                and Mitsubishi Corporation of Japan as Joint 
                Venture Partners for the manufacture of Power 
                Tillers. The factory was established on a 20 acre 
                plot on the Whitefield Road. Power Tillers are 
                used by small and medium farmers primarily for 
                paddy cultivation. This machine has increased 
                productivity and encouraged multiple cropping 
                system for rice.
              </p>
            </div>

            <div className="w-full flex justify-start">
              <button className="bg-[#FDB813] text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#FDC833] transition-colors" style={{ width: "400px" }}>
                Explore More
              </button>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src={Tractor}
              alt="VST Tractor Manufacturing"
              width={1000}
              height={508}
              className="rounded-2xl"
              priority
            />
          </div> 
        </div>

        {/* Location Section */}
        <div className="mt-16 w-full flex flex-col items-center">
          <h2 className="text-[#FDB813] text-5xl font-bold mb-8 self-start">Our Location</h2>
          <div className="w-full flex justify-center">
            <div className="w-full" style={{ maxWidth: "1614px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mt-24">
          <BusinessSectors />
        </div>
      </div>
    </div>
  )
}

export default ManufacturePage