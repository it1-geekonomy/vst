import { StaticImageData } from 'next/image';
import React from 'react';

// Import images
import porsche from "@/app/public/faranchies/newcarpics/porsche4.png";
import benzs from "@/app/public/faranchies/newcarpics/benz1.png";
import jaguar from "@/app/public/faranchies/newcarpics/ja-la.png";
import landrover from "@/app/public/faranchies/newcarpics/landrover3.png";
import maserati from "@/app/public/faranchies/newcarpics/maserati5.png";
import honda from "@/app/public/faranchies/newcarpics/honda12.png";
import tata from "@/app/public/faranchies/newcarpics/tata8.png";
import kia from "@/app/public/faranchies/newcarpics/kia7.png";
import ducati from "@/app/public/faranchies/newcarpics/ducati6.png";
import mahindra from "@/app/public/faranchies/newcarpics/mahindra9.png";
import byd from "@/app/public/faranchies/newcarpics/byd11.png";
import wagen from "@/app/public/faranchies/newcarpics/wagen10.png";
import bmw from "@/app/public/faranchies/newcarpics/bmw.png";
import mini from "@/app/public/faranchies/newcarpics/mini.png";

// Import logo components
import MercedesIcon from "@/app/public/faranchies/MercedesIcon";
import LandRoverIcon from "@/app/public/faranchies/LandRoverIcon";
import PorscheIcon from "@/app/public/faranchies/PorscheIcon";
import MaseratiIcon from "@/app/public/faranchies/MaseratiIcon";
import MahindraIcon from "@/app/public/faranchies/MahindraIcon";
import KiaIcon from "@/app/public/faranchies/KiaIcon";
import DucatiIcon from "@/app/public/faranchies/DucatiIcon";
import HondaLogo from "@/app/public/faranchies/HondaLogo";
import VolkswagenLogo from "@/app/public/faranchies/VolkswagenLogo";
import BydLogo from "@/app/public/faranchies/BydLogo";
import TataIcon from "@/app/public/faranchies/TataIcon";
import JaguarIcon from "@/app/public/faranchies/jaguarIcon";
// TODO: Add BMW and MINI icons when available
// import BMWIcon from "@/app/public/faranchies/BMWIcon";
// import MINIIcon from "@/app/public/faranchies/MINIIcon";

export interface LocationData {
  address: string;
  phone: string | string[];
  email: string | string[];
  map: string;
  website?: string;  // Optional website link
}

export interface LocationTypes {
  sales?: LocationData[];
  service?: LocationData[];
  "sales & service"?: LocationData[];
  "Sales, Service & Parts distribution"?: LocationData[];
  "Pre-Owned Cars"?: LocationData[];
  "service and parts"?: LocationData[];
  "Spares & Distribution"?: LocationData[];
  "spares warehouse"?: LocationData[];
  "Sales, Service & Spares"?: LocationData[];
}

export interface SlideData {
  id: number;
  backgroundImage: StaticImageData;
  brand: "mercedes" | "jlr" | "porsche" | "maserati" | "honda" | "kia" | "tata" | "volkswagen" | "BYD" | "ducati" | "mahindra" | "bmw" | "mini";
  bgColor: {
    from: string;
    to: string;
  };
  LogoComponent: React.ComponentType<{ className?: string }>;
  header: string;
  description: string;
  learnMoreLink: string;
  locations?: {
    [key: string]: LocationTypes;
  };
}

// Export type for location keys
export type LocationKeys = keyof LocationTypes;

// Export the slides data
export const slides: SlideData[] = [
  {
    id: 1,
    backgroundImage: benzs,
    brand: "mercedes",
    bgColor: {
      from: "#B897FF",
      to: "#5A6292"
    },
    LogoComponent: MercedesIcon,
    header: "VST Titanium - Mercedes Benz ",
    description: "VST Titanium began bringing the legacy of Mercedes-Benz to Chennai and North Tamil Nadu in 2015, with the Mount Road showroom - an iconic heritage property over 105 years old, standing as a landmark of timeless elegance. This historic setting perfectly mirrors the brand's legacy of luxury and engineering excellence. Expanding its footprint, VST Titanium opened a second showroom on OMR, offering a contemporary and dynamic environment to experience the full range of Mercedes-Benz vehicles. A state-of-the-art service centre nearby, staffed by MB-trained technicians and equipped with advanced diagnostic tools, ensures expert maintenance, certified body repairs, and round-the-clock support. Dedicated to delivering distinction at every touchpoint, VST Titanium continues to raise the bar in luxury automotive ownership.",
    learnMoreLink: "https://www.titaniummotors.mercedes-benz.co.in/",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "#199, Anna Salai, Chennai - 600 002. ",
            phone: " +91 44-6649 8080",
            email: ["info.citysales@titaniummotors.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62186.793014227944!2d80.2065924!3d13.056375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526617129cac13%3A0x3684f8447a03532e!2sMercedes-Benz%20Titanium%20Motors!5e0!3m2!1sen!2sin!4v1747217306800!5m2!1sen!2sin"
          },
          {
            address: "#148 K, Old Mahabalipuram Road, \nOkkiyam, Thoraipakkam, \nChennai - 600 096.",
            phone: " +91 44-6649 8181",
            email: ["info.chennaisales@titaniummotors.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1193.6802138844046!2d80.2383462355382!3d12.947988840734611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d03a4292861%3A0x22d85d28dbf66c98!2sMercedes-Benz%20Titanium%20Motors!5e0!3m2!1sen!2sin!4v1747834700657!5m2!1sen!2sin" 
          }
        ],
        service: [
          {
            address: "Plot #115, Industrial Estate (EEII), \nPerungudi, Chennai - 600 096.",
            phone: "+91 44-4610 8282",
            email: "info.service@titaniummotors.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.0144022068351!2d80.2484338!3d12.9571013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d10b409895b%3A0xb14f9ec23ada69d8!2sV.S.T%20Titanium%20Motors%20Private%20Limited%20Mercedes%20Benz!5e0!3m2!1sen!2sin!4v1747217696418!5m2!1sen!2sin"
          }
        ],
        "Sales, Service & Parts distribution": [
          {
            address: "#A9 & A10, Thiru-Vi-Ka Industrial \n Estate, Guindy, Chennai - 600 032.",
            phone: "+91 90030 26789, +91 90036 93555, +91 96000 67911",
            email: "info.guindy@titaniummotors.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.849043901052!2d80.2094384!3d13.0104245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526774a3022697%3A0xe1ba2886b8f8e5ec!2sVST%20TITANIUM%20MOTORS%20(PARTS%20TRADING%20FOR%20MERCEDES%20BENZ)!5e0!3m2!1sen!2sin!4v1747217731579!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 2,
    backgroundImage: jaguar,
    brand: "jlr",
    bgColor: {
      from: "#780E26",
      to: "rgba(120, 14, 38, 0.4)",
    },
    LogoComponent: JaguarIcon,
    header: "VST Grandeur - Jaguar Land Rover",
    description: "VST Grandeur has been representing Jaguar Land Rover in Tamil Nadu since 2011, offering the perfect blend of British luxury and rugged capability. With showrooms and service facilities in Chennai and Coimbatore, customers enjoy a seamless experience from purchase to after-sales care, crafted with precision and delivered with pride. One location operates as a comprehensive 3S facility, integrating Sales, Service, and Spare Parts, while the other focuses solely on sales. Whether it's high-end SUVs or elegant sedans, VST Grandeur ensures a premium ownership experience, supported by expert after-sales care and personalized service.",
    learnMoreLink: "https://www.jlr.com/",
    locations: {
      Chennai: {
        sales: [
          {
            address: "Old #182, New #237,VST Emerald\n Anna Salai, Chennai - 600 006.",
            phone: "+91 96000 53000",
            email: "info@vstgrandeur.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6408169750102!2d80.25909779999999!3d13.05852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674abb0bb305%3A0x753d3dea0b6e7db9!2sVST%20EMERALD%20Anna%20Salai!5e0!3m2!1sen!2sin!4v1747217925445!5m2!1sen!2sin"
          }
        ],
        "sales & service": [
          {
            address: "#267/2, By-Pass Road, Poonamalle,\n Chennai - 600 056.",
            phone: "+91 44-6636 1373, +91 44-6636 1363",
            email: "crs.chn@vstgrandeur.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.694512902591!2d80.09370609999999!3d13.055106799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a0b75750ef7%3A0x3c4e908ec67d2f95!2sVST%20GRANDEUR!5e0!3m2!1sen!2sin!4v1747217959401!5m2!1sen!2sin"
          }
        ]
      },
      Coimbatore: {
        "sales & service": [
          {
            address: "#145-1C1, L&T By-pass Road, Oddar\n Palayam, Ondipudur , Coimbatore - 641 016.",
            phone: "+91 422 6636 1373, +91 422 6636 1363",
            email: "crs.cbe@vstgrandeur.com",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250652.7168123875!2d76.8123673!3d11.0049225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba856e0ac6041f1%3A0x5d84af563fa4d462!2sJaguar%20Vst%20Grandeur!5e0!3m2!1sen!2sin!4v1748587200340!5m2!1sen!2sin" 
          }
        ]
      }
    }
  },
  {
    id: 3,
    backgroundImage: porsche,
    brand: "porsche",
    bgColor: {
      from: "#780E26",
      to: "rgba(120, 14, 38, 0.4)",
    },
    LogoComponent: PorscheIcon,
    header: "VST Supercars - Porsche",
    description: "Porsche Centre Bengaluru, under VST Supercars, has been bringing world-class performance and luxury to Karnataka since 2022. Located in the city's Central Business District, the showroom presents the complete Porsche lineup in a premium urban setting, while a dedicated 3S facility in Whitefield offers expert service, advanced diagnostics, and a certified body repair centre.With a strong presence across key locations, Porsche Centre Bengaluru ensures easy access and an exceptional ownership experience. As part of VST Group's continued expansion in the luxury automotive space, it reflects the group's enduring legacy and passion for excellence.",
    learnMoreLink: "https://dealer.porsche.com/in/bengaluru/en-GB",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Supercars Private Limited\n #22, Sankey Road, Opp. BDA Office,\n Bengaluru - 560 051. ",
            phone: "+91 63641 02911",
            email: "info@porsche-bengaluru.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6105688613943!2d77.5848628!3d12.9967417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fe9bf1e903%3A0x1e8042f60610fb34!2sPorsche%20Showroom%20Bengaluru!5e0!3m2!1sen!2sin!4v1747218092398!5m2!1sen!2sin"
          }
        ],
        "Sales, Service & Spares": [
          {
            address: "#2E3, Dyavasandra 1st Phase, Whitefield\n Road, Mahadevapura Post,\n Bengaluru - 560 048.",
            phone: "+91 63641 02911",
            email: "info@porsche-bengaluru.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6234932445195!2d77.7013255!3d12.995916399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1581493fbbc5%3A0xf725d431b45ab6f7!2sPorsche%20Centre%20Bengaluru!5e0!3m2!1sen!2sin!4v1747218158568!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 4,
    backgroundImage: maserati,
    brand: "maserati",
    bgColor: {
      from: "#6FBEFF",
      to: "rgba(111, 190, 255, 0.4)",
    },
    LogoComponent: MaseratiIcon,
    header: "VST Avventura - Maserati",
    description: "With its South India debut in 2024 through VST Avventura, VST Maserati has quickly emerged as a symbol of refined power and bespoke service. Bringing Italian craftsmanship and cutting-edge performance to the region, the brand redefines luxury through its flagship showroom in Bangalore's Central Business District (CBD), complemented by a dedicated service facility in Whitefield. Showcasing the complete Maserati range—from high-performance sedans to iconic SUVs—VST Maserati offers customers a truly immersive experience marked by elegance and precision. Wit expansion plans underway across South India, it is poised to enhance accessibility while delivering personalised service rooted in a legacy of excellence. The addition of Maserati to the VST Group's premium portfolio reinforces its commitment to curating the world's finest automobile experiences. Your Maserati journey begins here.",
    learnMoreLink: "https://www.maserati.com/in/en/official-dealer/vst-maserati",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Avventura Private Limited \n#73/1, Millers Road, Bengaluru - 560 001.",
            phone: "+91 99024 88899",
            email: " info@vst-maserati.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7475751110064!2d77.5915893!3d12.9879904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e80714a3af%3A0x8de8cd7a5664e5aa!2sVST%20Maserati%20Sales!5e0!3m2!1sen!2sin!4v1747218568134!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "VST Avventura Private Limited \n1st Phase, Plot #2E4, Whitefield Main \nRoad, Devasandra Industrial Estate,\n Mahadevapura, Bengaluru - 560 048.",
            phone: "+91 99024 88899",
            email: "info@vstavventura.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.616039076196!2d77.701408!3d12.996392400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1106b7c2cac1%3A0x38325cbf53b042a9!2sVST%20Maserati%20Service!5e0!3m2!1sen!2sin!4v1747290651611!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 5,
    backgroundImage: ducati,
    brand: "ducati",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: DucatiIcon,
    header: "VST & Sons - Ducati",
    description: "In 2015, VST Ducati introduced Karnataka and Tamil Nadu to the world of Ducati, offering more than just motorcycles, but an unmatched riding lifestyle. With showrooms in Bangalore and Chennai, the brand pairs Italian heritage with local expertise and care. Showcasing the complete Ducati range, along with premium riding gear, accessories, and merchandise. A dedicated sales team ensures customers find the perfect bike and safety gear for an unmatched riding experience. Our service centres, equipped with service bays and advanced diagnostic tools, are staffed by trained Ducati technicians using only genuine parts to maintain peak performance. At VST Ducati, buying a bike is just the beginning, we're committed to delivering exceptional care throughout your ownership journey.",
    learnMoreLink: "https://www.ducati.com/in/en/dealers/bengaluru/vst-ducati",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vstducati.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20Ducati%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin",
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vstducati.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20Ducati%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      },
      Chennai: {
        "sales & service": [
          {
            address: "#148, Rajiv Gandhi Salai, Okkiyam, \nThoraipakkam, Chennai, Tamil Nadu \n600096",
            phone: "+91 99405 06040",
            email: "info@vstducati.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.378970077429!2d80.2397104!3d12.9475848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526743a784e02f%3A0xf7842622171a72df!2sDucati%20Chennai!5e0!3m2!1sen!2sin!4v1747842004465!5m2!1sen!2sin" ,
          }
        ]
      }
    }
  },
  {
    id: 6,
    backgroundImage: honda,
    brand: "honda",
    bgColor: {
      from: "#000000",
      to: "rgba(0, 0, 0, 0.4)",
    },
    LogoComponent: HondaLogo,
    header: "VST & Sons - Honda",
    description: "VST & Sons, the official Honda dealer in Bangalore, brings the Japanese brand's renowned reliability and innovation to the city. Our showroom features the complete Honda range, from fuel-efficient sedans to versatile SUVs, while our state-of-the-art service centre ensures your Honda receives expert care. With a team of trained professionals and genuine Honda parts, we deliver excellence in both sales and service, making us the trusted destination for Honda enthusiasts in Bangalore.",
    learnMoreLink: "https://www.hondacarindia.com/dealer-locator/bengaluru/vst-and-sons.html",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vsthonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20Honda%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vsthonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20Honda%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 7,
    backgroundImage: kia,
    brand: "kia",
    bgColor: {
      from: "#000000",
      to: "rgba(0, 0, 0, 0.4)",
    },
    LogoComponent: KiaIcon,
    header: "VST & Sons - Kia",
    description: "VST & Sons, the official Kia dealer in Bangalore, brings the Korean brand's innovative design and advanced technology to the city. Our showroom features the complete Kia range, from stylish hatchbacks to premium SUVs, while our state-of-the-art service centre ensures your Kia receives expert care. With a team of trained professionals and genuine Kia parts, we deliver excellence in both sales and service, making us the trusted destination for Kia enthusiasts in Bangalore.",
    learnMoreLink: "https://www.kia.com/in/dealer-locator/bengaluru/vst-and-sons.html",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vstkia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20Kia%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vstkia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20Kia%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 8,
    backgroundImage: tata,
    brand: "tata",
    bgColor: {
      from: "#000000",
      to: "rgba(0, 0, 0, 0.4)",
    },
    LogoComponent: TataIcon,
    header: "VST & Sons - Tata",
    description: "VST & Sons, the official Tata dealer in Bangalore, brings the Indian brand's commitment to innovation and sustainability to the city. Our showroom features the complete Tata range, from electric vehicles to premium SUVs, while our state-of-the-art service centre ensures your Tata receives expert care. With a team of trained professionals and genuine Tata parts, we deliver excellence in both sales and service, making us the trusted destination for Tata enthusiasts in Bangalore.",
    learnMoreLink: "https://www.tatamotors.com/dealer-locator/bengaluru/vst-and-sons.html",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vsttata.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20Tata%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vsttata.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20Tata%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 9,
    backgroundImage: wagen,
    brand: "volkswagen",
    bgColor: {
      from: "#000000",
      to: "rgba(0, 0, 0, 0.4)",
    },
    LogoComponent: VolkswagenLogo,
    header: "VST & Sons - Volkswagen",
    description: "VST & Sons, the official Volkswagen dealer in Bangalore, brings German engineering excellence to the city. Our showroom features the complete Volkswagen range, from premium hatchbacks to sophisticated SUVs, while our state-of-the-art service centre ensures your Volkswagen receives expert care. With a team of trained professionals and genuine Volkswagen parts, we deliver excellence in both sales and service, making us the trusted destination for Volkswagen enthusiasts in Bangalore.",
    learnMoreLink: "https://www.volkswagen.co.in/en/dealer-locator/bengaluru/vst-and-sons.html",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vstvolkswagen.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20Volkswagen%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vstvolkswagen.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20Volkswagen%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 10,
    backgroundImage: byd,
    brand: "BYD",
    bgColor: {
      from: "#000000",
      to: "rgba(0, 0, 0, 0.4)",
    },
    LogoComponent: BydLogo,
    header: "VST & Sons - BYD",
    description: "VST & Sons, the official BYD dealer in Bangalore, brings Chinese electric vehicle innovation to the city. Our showroom features the complete BYD range of electric vehicles, from efficient sedans to spacious SUVs, while our state-of-the-art service centre ensures your BYD receives expert care. With a team of trained professionals and genuine BYD parts, we deliver excellence in both sales and service, making us the trusted destination for BYD enthusiasts in Bangalore.",
    learnMoreLink: "https://www.byd.com/in/dealer-locator/bengaluru/vst-and-sons.html",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20BYD%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20BYD%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 11,
    backgroundImage: mahindra,
    brand: "mahindra",
    bgColor: {
      from: "#000000",
      to: "rgba(0, 0, 0, 0.4)",
    },
    LogoComponent: MahindraIcon,
    header: "VST & Sons - Mahindra",
    description: "VST & Sons, the official Mahindra dealer in Bangalore, brings Indian automotive excellence to the city. Our showroom features the complete Mahindra range, from rugged SUVs to electric vehicles, while our state-of-the-art service centre ensures your Mahindra receives expert care. With a team of trained professionals and genuine Mahindra parts, we deliver excellence in both sales and service, making us the trusted destination for Mahindra enthusiasts in Bangalore.",
    learnMoreLink: "https://www.mahindra.com/dealer-locator/bengaluru/vst-and-sons.html",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "#22, Sankey Road, Opp. BDA Office, \nBengaluru - 560 051.",
            phone: "+91 72598 36655",
            email: "info@vstmahindra.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.61103241798!2d77.5848312!3d12.9967121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179017e9fa09%3A0x9e5a3f7c0c1b092e!2sVST%20Mahindra%20Sales!5e0!3m2!1sen!2sin!4v1747218886328!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#459, Dhanalakshmi Building, \nCottenpet, Bengaluru - 560 053.",
            phone: "+91 72598 36655",
            email: "info@vstmahindra.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.9894930788764!2d77.5685244!3d12.9731958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e258e463fb%3A0x333f8831fd53cd6d!2sVST%20Mahindra%20Service!5e0!3m2!1sen!2sin!4v1747250831535!5m2!1sen!2sin"
          }
        ]
      }
    }
  }
]; 