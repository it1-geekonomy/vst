import React from 'react';
import Image from 'next/image';

interface LocationSectionProps {
  locationImage: string;
  address: {
    street: string;
    street2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  phoneNumbers: string[];
  googleMapsUrl: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  locationImage,
  address,
  phoneNumbers,
  googleMapsUrl
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-30 flex flex-col md:flex-row items-center justify-center z-10 relative mx-auto">
      <div className="flex flex-col md:flex-row items-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Left section with title and image */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className="text-[#2B0B1F] text-center md:text-left mb-4 sm:mb-6 md:mb-8 font-roc"
            style={{
              fontSize: 'clamp(28px, 4vw, 50px)',
              lineHeight: '1.2',
              letterSpacing: '-2px',
            }}
          >
            Our Location
          </h2>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[220px] h-[200px] sm:w-[280px] sm:h-[240px] md:w-[200px] md:h-[220px] lg:w-[280px] lg:h-[180px] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={require(`@/app/public/${locationImage}`)}
              alt="Location Map"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
            {/* Location icon overlay */}
            <div className="absolute left-[35%] top-[30%] w-5 h-4 sm:w-6 sm:h-5 pointer-events-none">
              <Image
                src={require('@/app/public/education/location icon.png')}
                alt="Location Icon"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>
        </div>

        {/* Right section with address and phone numbers */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 lg:gap-16 w-full md:w-auto mt-16 md:mt-24">
          {/* Address */}
          <div className="text-center md:text-left">
            <p
              className="text-black font-roc"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '1.5',
                fontWeight: 500,
              }}
            >
              {address.street}
              {address.street2 && <><br />{address.street2}</>}
              <br />
              {address.city}
              {!address.city.includes(address.pincode) && address.pincode && <>, {address.pincode}</>}
              <br />
              {address.state}
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col space-y-3 items-center md:items-start mt-8 md:mt-0">
            {phoneNumbers.map((phone, idx) => (
              <a 
                key={phone} 
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                <span className="mr-3">
                  <svg 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M16.2 14.85c-.45 0-.89-.07-1.31-.2-.41-.13-.85-.32-1.31-.57-.45-.25-.89-.54-1.31-.87-.42-.33-.8-.67-1.13-1.03-.33-.36-.62-.7-.87-1.13-.25-.42-.44-.86-.57-1.31-.13-.42-.2-.86-.2-1.31 0-.28.09-.51.27-.69l1.13-1.13c.18-.18.41-.27.69-.27.14 0 .27.02.39.07.12.05.23.13.33.23l.77.77c.1.1.17.21.23.33.05.12.07.25.07.39 0 .13-.02.25-.07.37-.05.12-.13.23-.23.33l-.37.37c.18.32.39.62.63.9.24.28.5.54.78.78.28.24.58.45.9.63l.37-.37c.1-.1.21-.17.33-.23.12-.05.24-.07.37-.07.14 0 .27.02.39.07.12.05.23.13.33.23l.77.77c.1.1.17.21.23.33.05.12.07.25.07.39 0 .28-.09.51-.27.69l-1.13 1.13c-.18.18-.41.27-.69.27z" 
                      fill="#2B0B1F"
                    />
                  </svg>
                </span>
                <span
                  className="text-black font-roc"
                  style={{
                    fontSize: 'clamp(14px, 2vw, 20px)',
                    lineHeight: '1.6'
                  }}
                >
                  {phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 