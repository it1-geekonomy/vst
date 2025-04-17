import React from 'react';

export default function LocationSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 pb-8 md:pb-12 lg:pb-16 z-10 relative">
      {/* Removed the background image from here */}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#FEBF3D] font-light text-start mb-4 md:mb-6 lg:mb-8 relative z-10">Our Location</h2>
      <div className="w-full rounded-lg overflow-hidden relative z-10">
        <iframe
          title="SKEI Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="rounded-lg sm:h-60 md:h-80 lg:h-100"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
} 