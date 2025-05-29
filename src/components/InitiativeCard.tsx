import { useState } from "react";
import Image from "next/image";

interface InitiativeCardProps {
  title: string;
  description: string;
  image: any;
}

export default function InitiativeCard({ title, description, image }: InitiativeCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggle = () => {
    setShowDescription((prev) => !prev)
  };
  return (
    <div className="relative group overflow-hidden cursor-pointer select-none"
      onClick={handleToggle}>
      <Image
        src={image}
        alt={title}
        // className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 pointer-events-none" />

      {/* Title - visible by default */}
      {/* <div className="absolute inset-0"> */}
      <div className={`absolute top-1/3 w-full flex justify-center  transition-opacity duration-300 ${showDescription ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}>
        <h2 className="text-white text-clamp-42 text-center pointer-events-none">
          {title}
        </h2>
      </div>
      {/* </div> */}

      {/* Description - visible on hover */}
      <div className={`absolute inset-0 flex  justify-center transition-opacity duration-500 px-4 py-4 ${showDescription ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <p className="text-white text-clamp-24 font-light text-justify leading-4 md:leading-5 2xl:leading-6 pointer-events-none">
          {description}
        </p>
      </div>
    </div>
  );
}