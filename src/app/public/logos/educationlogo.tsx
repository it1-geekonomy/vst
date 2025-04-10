import React from "react";

interface EducationLogoProps {
  className?: string;
}

const EducationLogo = ({ className }: EducationLogoProps) => {
  return (
    <svg 
      className={className}
      width="462" 
      height="155" 
      viewBox="0 0 462 155" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="461.599" height="154.583" fill="url(#pattern0_5089_11427)"/>
      <defs>
        <pattern id="pattern0_5089_11427" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_5089_11427" transform="scale(0.00042337 0.00126422)"/>
        </pattern>
      </defs>
    </svg>
  );
};

export default EducationLogo;
