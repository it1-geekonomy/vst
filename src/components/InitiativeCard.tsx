// src/components/InitiativeCard.tsx
import Image from "next/image";

interface InitiativeCardProps {
  title: string;
  description: string;
  image: any;
}

export default function InitiativeCard({ title, description, image }: InitiativeCardProps) {
  return (
    <div className="relative group overflow-hidden cursor-pointer select-none">
      <Image
        src={image}
        alt={title}
        priority
      />

      <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 w-full flex justify-center group-hover:opacity-0 transition-opacity duration-300">
          <h2 className="text-white text-clamp-42 text-center">
            {title}
          </h2>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 py-4">
        <p className="text-white text-clamp-24 font-light text-justify leading-4 md:leading-5 2xl:leading-6">
          {description}
        </p>
      </div>
    </div>

  );
}