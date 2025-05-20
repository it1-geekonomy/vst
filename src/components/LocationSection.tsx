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
    <section className="w-full px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 flex flex-col md:flex-row items-center justify-center z-10 relative mx-auto">
      <div className="flex flex-col md:flex-row items-center 2xl:justify-center  w-full gap-4 sm:gap-6 md:gap-8 lg:gap-7 xl:gap-20 2xl:gap-20">
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
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 lg:gap-10 xl:gap-20 2xl:gap-28 w-full md:w-auto mt-16 md:mt-24">
          {/* Address */}
          <div className="text-center md:text-left mb-8">
            <p
              className={`font-roc font-normal ${className}`}
              style={{
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '1.5',
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
                    fill={iconColor}
                    stroke={iconColor}
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                  <span
                    className={`font-roc font-normal ${className}`}
                    style={{
                      fontSize: 'clamp(16px, 2.5vw, 24px)',
                      lineHeight: '1.7',
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
                    <svg 
                      className="w-6 h-6 mr-2" 
                      fill={iconColor}
                      stroke={iconColor}
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path 
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                    <span
                      className={`font-roc font-normal ${className}`}
                      style={{
                        fontSize: 'clamp(16px, 2.5vw, 24px)',
                        lineHeight: '1.5'
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
                      <svg 
                        className="w-6 h-6 mr-2" 
                        fill={iconColor}
                        stroke={iconColor}
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path 
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        />
                      </svg>
                      <span
                        className={`font-roc font-normal ${className}`}
                        style={{
                          fontSize: 'clamp(16px, 2.5vw, 24px)',
                          lineHeight: '1.5'
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