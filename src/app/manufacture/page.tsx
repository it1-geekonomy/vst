import Image from 'next/image'
import Tractor from '@/app/public/images/Manufacture/Tractor.png'

const ManufacturePage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(93.23deg,#499484_2.62%,#17302B_97.38%)]">
      <div className="container mx-auto px-4 py-16 flex flex-col justify-around min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 leading-tight text-white text-center">
          Empowering Farmers With Efficiency, Affordability And Reliability
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <p className="text-lg mb-8">
              VST Tillers Tractors was incorporated in the year 1967 with Mitsubishi Heavy Industries Ltd. and Mitsubishi Corporation of Japan as Joint Venture Partners for the manufacture of Power Tillers. The factory was established on a 20 acre plot on the Whitefield Road. Power Tillers are used by small and medium farmers primarily for paddy cultivation. This machine has increased productivity and encouraged multiple cropping system for rice.
            </p>

            <button className="bg-[#FDB813] text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#FDC833] transition-colors">
              Explore More
            </button>
          </div>

          <div className="flex-1">
            <Image
              src={Tractor}
              alt="VST Tractor Manufacturing"
              width={800}
              height={600}
              className="rounded-2xl"
              priority
            />
          </div> 
        </div>

        {/* Location Section */}
        <div className="mt-16 pl-5">
          <h2 className="text-[#FDB813] text-5xl font-bold mb-8">Our Location</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3 pl-15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                width="130%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufacturePage