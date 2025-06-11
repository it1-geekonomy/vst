import { useState, useEffect } from "react";
import Image from "next/image";

interface InitiativeCardProps {
  title: string;
  description: string;
  image: any;
}

export default function InitiativeCard({ title, description, image }: InitiativeCardProps) {
  const [showDescription, setShowDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setShowDescription((prev) => !prev);
    }
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer select-none ${!isMobile ? "group" : ""
        }`}
      onClick={handleClick}
    >
      <Image src={image} alt={title} priority className="object-cover" />

      {/* Overlay background */}
      <div
        className={`absolute inset-0 transition-all duration-300 border-2 rounded-md
    ${isMobile
            ? showDescription
              ? "bg-white bg-opacity-95 border-amber-50"
              : "bg-transparent border-transparent border-2"
            : "bg-transparent border-transparent group-hover:bg-white group-hover:bg-opacity-95 group-hover:border-amber-50"
          }
  `}
      />
      {/* Description text */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center  px-4 transition-opacity duration-500 pointer-events-none
          ${isMobile
            ? showDescription
              ? "opacity-100 text-orange-600"
              : "opacity-0 text-white"
            : "opacity-0 text-white group-hover:opacity-100 group-hover:text-orange-600"
          }
        `}
      >
        <p className="text-clamp-28 font-light text-start sm:leading-4 md:leading-6 lg:leading-5 xl:leading-6 2xl:leading-8">{description}</p>
      </div>
    </div>
  );
}
