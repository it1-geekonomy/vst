import React from 'react';
import Image from 'next/image';

interface LocationSectionProps {
  locationImage: string;
  address: {
    street: string;
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
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-30 mt-4">
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col">
          <h2
            className="text-[#2B0B1F]"
            style={{
              fontFamily: 'Roc Grotesk, sans-serif',
              fontSize: '50px',
              lineHeight: '70px',
              letterSpacing: '-2px',
              marginBottom: '40px',
            }}
          >
            Our Location
          </h2>
          <div className="relative w-[150px] h-[130px] md:w-[250px] md:h-[260px] lg:w-[350px] lg:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={require(`@/app/public/${locationImage}`)}
              alt="Location Map"
              fill
              className="object-cover shadow-lg"
              style={{ clipPath: 'inset(0 30px 0 0)' }}
              priority
            />
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[37.5%] top-[30%] w-5 h-4 md:w-6 md:h-5 cursor-pointer z-20"
              title="Open in Google Maps"
            >
              <Image
                src={require('@/app/public/education/location icon.png')}
                alt="Location Icon"
                fill
                className="object-contain"
                priority
              />
            </a>
          </div>
        </div>
        {/* Right: Address and Phone Numbers in a row */}
        <div className="md:ml-10 mt-30 flex flex-row justify-center space-x-7">
          {/* Address */}
          <div className="mr-8 min-w-[150px] md:min-w-[200px]">
            <p
              className="text-black"
              style={{
                fontFamily: 'Roc Grotesk',
                fontSize: '24px',
                lineHeight: '36px',
                fontWeight: 500,
              }}
            >
              {address.street},<br />
              {address.city},<br />
              {address.state} - {address.pincode}
            </p>
          </div>
          {/* Phone Numbers */}
          <div className="flex flex-col space-y-2">
            {phoneNumbers.map((phone, idx) => (
              <a 
                key={phone} 
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {/* Telephone icon - SVG */}
                <span className="mr-2 flex-shrink-0">
                  <svg 
                    width="24" 
                    height="24" 
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
                  className="text-black"
                  style={{
                    fontFamily: 'Roc Grotesk',
                    fontSize: '20px',
                    lineHeight: '32px'
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