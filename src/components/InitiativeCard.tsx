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
              ? "bg-[#C97D4B] bg-opacity-60 border-amber-50"
              : "bg-transparent border-transparent border-2"
            : "bg-transparent border-transparent group-hover:bg-[#C97D4B] group-hover:bg-opacity-60 group-hover:border-amber-50"
          }
  `}
      />
      {/* Description text */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center leading-6 px-4 text-white transition-opacity duration-500 pointer-events-none
          ${isMobile
            ? showDescription
              ? "opacity-100"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-100"
          }
        `}
      >
        <p className="text-clamp-28 font-light text-start">{description}</p>
      </div>
    </div>
  );
}
