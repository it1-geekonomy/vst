import Image from 'next/image';
import gif from "@/app/public/education/vst logo gif.gif";

interface VSTLogoAnimationProps {
  className?: string;
}

const VSTLogoAnimation = ({ className = "" }: VSTLogoAnimationProps) => {
  return (
    <div className={`w-full h-[240px] lg:h-[240px] xl:h-[280px] pl-4  flex justify-center items-center relative ${className}`}>
      <div className="w-full h-full relative">
        <Image
          src={gif}
          alt="VST Logo Animation"
          className="w-[100%] h-[100%] object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default VSTLogoAnimation; 