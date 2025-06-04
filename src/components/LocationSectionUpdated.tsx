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
  showEmailIcon?: boolean;
}

const LocationSectionUpdated: React.FC<LocationSectionProps> = ({
  locationImage,
  address,
  phoneNumbers,
  googleMapsUrl,
  emails,
  websiteUrl,
  className = '',
  iconColor = 'black',
  showEmailIcon = false
}) => {
  return (
    <section className="w-full max-w-[70%] px-2 md:px-4 lg:px-6 xl:px-0 2xl:px-32 flex flex-col md:flex-row items-center justify-center z-10 relative mx-auto">
      <div className="flex flex-col md:flex-row items-center w-full gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {/* Left section with title and image */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className={`text-[#FEBF3D] text-center md:text-left mb-2 sm:mb-3 md:mb-4 font-roc font-normal`}
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
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
            className="relative w-[180px] h-[160px] sm:w-[220px] sm:h-[180px] md:w-[240px] md:h-[180px] lg:w-[280px] lg:h-[180px] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
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
        <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full md:w-auto mt-8 md:mt-12">
          {/* Address */}
          <div className="text-center md:text-left mb-4">
            <div
              className={`font-roc font-normal ${className}`}
              style={{
                fontSize: 'clamp(14px, 2vw, 20px)',
                lineHeight: '1.4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.25rem'
              }}
            >
              <div style={{ display: 'block', width: '100%', whiteSpace: 'nowrap' }}>{address.street}</div>
              {address.street2 && <div style={{ display: 'block', width: '100%', whiteSpace: 'nowrap' }}>{address.street2}</div>}
              {address.street3 && <div style={{ display: 'block', width: '100%', whiteSpace: 'nowrap' }}>{address.street3}</div>}
              <div style={{ display: 'block', width: '100%', whiteSpace: 'nowrap' }}>{address.city}</div>
              {!address.city.includes(address.pincode) && address.pincode && (
                <div style={{ display: 'block', width: '100%', whiteSpace: 'nowrap' }}>{address.pincode}</div>
              )}
              <div style={{ display: 'block', width: '100%', whiteSpace: 'nowrap' }}>{address.state}</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start mt-4 md:mt-0 min-w-[250px]">
            {/* Phone Numbers */}
            <div className="flex flex-col w-full">
              {phoneNumbers.map((phone, idx) => (
                <a 
                  key={phone} 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity mb-2"
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
                    className={`font-roc font-normal ${className}`}
                    style={{
                      fontSize: 'clamp(14px, 2vw, 20px)',
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
              <div className="flex flex-col w-full mt-2">
                {emails.info && (
                  <a 
                    href={`mailto:${emails.info}`}
                    className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity mb-2"
                  >
                    {showEmailIcon && (
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
                    )}
                    <span
                      className={`font-roc font-normal ${className}`}
                      style={{
                        fontSize: 'clamp(14px, 2vw, 20px)',
                        lineHeight: '1.4',
                      }}
                    >
                      {emails.info}
                    </span>
                  </a>
                )}
                {emails.globalConnect && (
                  <div className="flex flex-col w-full">
                    <span
                      className={`font-roc font-medium ${className} mb-1`}
                      style={{
                        fontSize: 'clamp(12px, 1.8vw, 18px)',
                        lineHeight: '1.4',
                        color: '#FEBF3D'
                      }}
                    >
                      Global Connect
                    </span>
                    <a 
                      href={`mailto:${emails.globalConnect}`}
                      className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      {showEmailIcon && (
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
                      )}
                      <span
                        className={`font-roc font-normal ${className}`}
                        style={{
                          fontSize: 'clamp(14px, 2vw, 20px)',
                          lineHeight: '1.4',
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
                    className="flex items-center hover:opacity-80 transition-opacity mt-2"
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
                        fontSize: 'clamp(14px, 2vw, 20px)',
                        lineHeight: '1.4',
                      }}
                    >
                      {websiteUrl}
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

export default LocationSectionUpdated; 