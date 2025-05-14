import React from 'react';
import Image from 'next/image';

interface LocationSectionProps {
  locationImage: string;
  address: {
    street: string;
    street2?: string;
    street3?:string;
    city: string;
    state: string;
    pincode: string;
  };
  phoneNumbers: string[];
  googleMapsUrl: string;
  emails?: {
    info?: string;
    globalConnect?: string;
  };
  className?: string;
  iconColor?: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  locationImage,
  address,
  phoneNumbers,
  googleMapsUrl,
  emails,
  className = '',
  iconColor = 'black'
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-30 flex flex-col md:flex-row items-center justify-center z-10 relative mx-auto">
      <div className="flex flex-col md:flex-row items-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Left section with title and image */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className={`text-[#2B0B1F] text-center md:text-left mb-4 sm:mb-6 md:mb-8 font-roc ${className}`}
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
            className="relative w-[220px] h-[200px] sm:w-[280px] sm:h-[240px] md:w-[300px] md:h-[220px] lg:w-[350px] lg:h-[220px] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={require(`@/app/public/${locationImage}`)}
              alt="Location Map"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </a>
        </div>

        {/* Right section with address, phone numbers and emails */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 lg:gap-16 w-full md:w-auto mt-16 md:mt-24">
          {/* Address */}
          <div className="text-center md:text-left mb-8">
            <p
              className={`font-roc ${className}`}
              style={{
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '1.5',
                fontWeight: 500,
              }}
            >
              {address.street}
              {address.street2 && <><br />{address.street2}</>}
              {address.street3 && <><br />{address.street3}</>}
              <br />
              {address.city}
              {!address.city.includes(address.pincode) && address.pincode && <>, {address.pincode}</>}
              <br />
              {address.state}
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
            {/* Phone Numbers */}
            <div className="flex flex-col">
              {phoneNumbers.map((phone, idx) => (
                <a 
                  key={phone} 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke={iconColor}
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span
                    className={`font-roc ${className}`}
                    style={{
                      fontSize: 'clamp(16px, 2.5vw, 24px)',
                      lineHeight: '1.5',
                      fontWeight: 500
                    }}
                  >
                    {phone.replace('📞 ', '')}
                  </span>
                </a>
              ))}
            </div>

            {/* Email Addresses */}
            {emails && (
              <div className="flex flex-col">
                {emails.info && (
                  <a 
                    href={`mailto:${emails.info}`}
                    className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
                  >
                    <span
                      className={`font-roc ${className}`}
                      style={{
                        fontSize: 'clamp(16px, 2.5vw, 24px)',
                        lineHeight: '1.5',
                        fontWeight: 500
                      }}
                    >
                      {emails.info}
                    </span>
                  </a>
                )}
                {emails.globalConnect && (
                  <div className="flex flex-col">
                    <span
                      className={`font-roc ${className}`}
                      style={{
                        fontSize: 'clamp(14px, 2vw, 20px)',
                        lineHeight: '1.5',
                        fontWeight: 400
                      }}
                    >
                      Global Connect
                    </span>
                    <a 
                      href={`mailto:${emails.globalConnect}`}
                      className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      <span
                        className={`font-roc ${className}`}
                        style={{
                          fontSize: 'clamp(16px, 2.5vw, 24px)',
                          lineHeight: '1.5',
                          fontWeight: 500
                        }}
                      >
                        {emails.globalConnect}
                      </span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 