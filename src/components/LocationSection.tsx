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
  websiteUrl?: string;
  className?: string;
  iconColor?: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  locationImage,
  address,
  phoneNumbers,
  googleMapsUrl,
  emails,
  websiteUrl,
  className = '',
  iconColor = 'black'
}) => {
  return (
    <section className="w-full px-0 sm:px-4 lg:px-6 xl:px-12 2xl:px-16 flex flex-col lg:flex-row items-center justify-center z-10 relative py-4 lg:py-8">
      {/* 
        Breakpoints:
        - Default (mobile): < 640px
        - sm: 640px - 767px (small tablets)
        - md: 768px - 1023px (tablets/laptops)
        - lg: 1024px - 1279px (desktops)
        - xl: 1280px - 1535px (large desktops)
        - 2xl: 1536px+ (extra large screens)
      */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1380px] mx-auto gap-4 sm:gap-6 lg:gap-8 xl:gap-14 2xl:gap-16">
        {/* Left section with title and image */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-auto lg:max-w-[45%] xl:max-w-[50%]">
          <h2
            className={`text-[#2B0B1F] text-center lg:text-left mb-4 sm:mb-6 font-roc ${className}`}
            style={{
              fontSize: 'clamp(20px, 3vw, 40px)', // Responsive font size from 20px to 40px
              lineHeight: '1.2',
              letterSpacing: '-1px',
            }}
          >
            Our Location
          </h2>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-[340px] h-[200px] 
                     sm:max-w-[400px] sm:h-[220px] 
                     lg:w-[470px] lg:h-[230px] 
                     xl:w-[450px] xl:h-[220px] 
                     2xl:w-[480px] 2xl:h-[235px] 
                     overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
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
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-10 w-full lg:w-auto lg:max-w-[55%] xl:max-w-[50%] mt-8 lg:mt-12">
          {/* Address */}
          <div className="text-center lg:text-left flex items-center justify-center lg:justify-start w-full lg:w-auto">
            <div
              className={`font-roc font-normal ${className} mt-3 lg:mt-5 flex flex-col items-center lg:items-start w-full max-w-[400px]`}
              style={{
                fontSize: 'clamp(15px, 1.6vw, 24px)', // Responsive font size from 13px to 20px
                lineHeight: '1.6',
              }}
            >
              <div className="w-full text-center lg:text-left whitespace-normal lg:whitespace-nowrap">{address.street}</div>
              {address.street2 && <div className="w-full text-center lg:text-left whitespace-normal lg:whitespace-nowrap">{address.street2}</div>}
              {address.street3 && <div className="w-full text-center lg:text-left whitespace-normal lg:whitespace-nowrap">{address.street3}</div>}
              {address.city && <div className="w-full text-center lg:text-left whitespace-normal lg:whitespace-nowrap">{address.city}</div>}
              {!address.city.includes(address.pincode) && address.pincode && (
                <div className="w-full text-center lg:text-left whitespace-normal lg:whitespace-nowrap">{address.pincode}</div>
              )}
              {address.state && <div className="w-full text-center lg:text-left whitespace-normal lg:whitespace-nowrap">{address.state}</div>}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center lg:items-start justify-center">
            {/* Phone Numbers */}
            <div className="flex flex-col">
              {phoneNumbers.map((phone, idx) => (
                <a 
                  key={phone} 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity mb-2 last:mb-0"
                >
                  <svg 
                    className="w-5 h-5 mr-2 flex-shrink-0" 
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
                    className={`font-roc font-normal break-all ${className}`}
                    style={{
                      fontSize: 'clamp(15px, 1.6vw, 24px)', // Responsive font size from 13px to 20px
                      lineHeight: '1.4',
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
                    className="flex items-center hover:opacity-80 transition-opacity mb-0"
                  >
                    <svg 
                      className="w-5 h-5 mr-2 flex-shrink-0" 
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
                      className={`font-roc font-normal whitespace-nowrap ${className}`}
                      style={{
                        fontSize: 'clamp(16px, 1.6vw, 24px)', // Responsive font size from 13px to 20px
                        lineHeight: '2.0'
                      }}
                    >
                      {emails.info}
                    </span>
                  </a>
                )}
                {emails.globalConnect && (
                  <div className="flex flex-col">
                    <span
                      className={`font-roc font-normal ${className} `}
                      style={{
                        fontSize: 'clamp(14px, 1.6vw, 24px)', // Responsive font size from 14px to 20px
                        lineHeight: '1.6',
                      }}
                    >
                      Global Connect
                    </span>
                    <a 
                      href={`mailto:${emails.globalConnect}`}
                      className="flex items-center hover:opacity-80 transition-opacity"
                    >
                      <svg 
                        className="w-5 h-5 mr-2 flex-shrink-0" 
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
                        className={`font-roc font-normal whitespace-nowrap ${className}`}
                        style={{
                          fontSize: 'clamp(15px, 1.6vw, 24px)', // Responsive font size from 13px to 20px
                          lineHeight: '1.6'
                        }}
                      >
                        {emails.globalConnect}
                      </span>
                    </a>
                  </div>
                )}
                {/* Website Link */}
                {websiteUrl && (
                  <a 
                    href={websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center hover:opacity-80 transition-opacity mt-[-4] sm:mt-[-1]"
                  >
                    <svg 
                      className="w-5 h-5 mr-2 flex-shrink-0" 
                      fill={iconColor}
                      stroke={iconColor}
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                      />
                    </svg>
                    <span
                      className={`font-roc font-normal whitespace-nowrap ${className}`}
                      style={{
                        fontSize: 'clamp(15px, 1.6vw, 24px)',
                        lineHeight: '1.6'
                      }}
                    >
                      {websiteUrl.replace(/^https?:\/\//, '')}
                    </span>
                  </a>
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