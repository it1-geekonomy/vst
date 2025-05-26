"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import gif from "@/app/public/education/vst logo gif.gif"

import bg1 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 1 (1).png";
import bg2 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 1 (2).png";
import bg3 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 2 (1).png";
// import car2 from "@/app/public/faranchies/carpic/Benz Car 2 1.png";
// import car3 from "@/app/public/faranchies/carpic/land-rover car.png";
// import bg4 from "@/app/public/faranchies/bgpic/4carbg.png";
// import bg5 from "@/app/public/faranchies/bgpic/5carbg.png";
// import bg6 from "@/app/public/faranchies/bgpic/6carbg.png";
// import bg7 from "@/app/public/faranchies/bgpic/7carbg.png";
// import bg8 from "@/app/public/faranchies/bgpic/Honda-bg.png";
// import bg9 from "@/app/public/faranchies/bgpic/volkswagen-bg.png";
// import bg10 from "@/app/public/faranchies/bgpic/byd-bg.png";
// import car1 from "@/app/public/faranchies/bgpic/car1.png";
//  import ferrari from "@/app/public/faranchies/bgpic/ferrari.png";



import bikebg from "@/app/public/faranchies/bgpic/bikebg.png";


import porsche from "@/app/public/faranchies/newcarpics/porsche4.png";
import benzs from "@/app/public/faranchies/newcarpics/benz1.png";
import jaguar from "@/app/public/faranchies/newcarpics/jaguar2.png";
import landrover from "@/app/public/faranchies/newcarpics/landrover3.png";
import maserati from "@/app/public/faranchies/newcarpics/maserati5.png";
import honda from "@/app/public/faranchies/newcarpics/honda12.png";
import tata from "@/app/public/faranchies/newcarpics/tata8.png";
import kia from "@/app/public/faranchies/newcarpics/kia7.png";
import ducati from "@/app/public/faranchies/newcarpics/ducati6.png";
import mahindra from "@/app/public/faranchies/newcarpics/mahindra9.png";
import byd from "@/app/public/faranchies/newcarpics/byd11.png";
import wagen from "@/app/public/faranchies/newcarpics/wagen10.png";



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
import BusinessSectors from "./BusinessSectors";
import Logo from "@/app/public/logos/Logo";
import JaguarIcon from "@/app/public/faranchies/jaguarIcon";
import VSTLogoAnimation from "../VSTLogoAnimation";

interface SlideData {
  id: number;
  backgroundImage: StaticImageData;
  brand: "mercedes" | "jaguar" | "landrover" | "porsche" | "maserati" | "honda" | "kia" | "tata" | "volkswagen" | "BYD" | "ducati" | "mahindra";
  bgColor: {
    from: string;
    to: string;
  };
  LogoComponent: React.ComponentType<{ className?: string }>;
  header: string,
  description: string;
  learnMoreLink: string;
  locations?: {
    [key: string]: {
      sales?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;
      service?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;
      "sales & service"?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;
      "Sales, Service & Parts distribution"?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;
      "Pre-Owned Cars"?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;
      "service and parts"?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;

      "spares warehouse"?: Array<{
        address: string;
        phone: string | string[];
        email: string | string[];
        map: string;
      }>;
    };
  };
}

const slides: SlideData[] = [
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
            phone: "+91 90030 26789,+91 90036 93555,+91 96000 67911",
            email: "info.guindy@titaniummotors.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.849043901052!2d80.2094384!3d13.0104245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526774a3022697%3A0xe1ba2886b8f8e5ec!2sVST%20TITANIUM%20MOTORS%20(PARTS%20TRADING%20FOR%20MERCEDES%20BENZ)!5e0!3m2!1sen!2sin!4v1747217731579!5m2!1sen!2sin"
          }
        ]
      },

    }
  },
  {
    id: 2,
    backgroundImage: jaguar,
    brand: "jaguar",
    bgColor: {
      from: "#780E26",
      to: "rgba(120, 14, 38, 0.4)",
    },
    LogoComponent: JaguarIcon,
    header: "VST Grandeur - Jaguar",
    description: "VST Grandeur has been representing Jaguar in Tamil Nadu since 2011, offering the perfect blend of British luxury and rugged capability. With showrooms and service facilities in Chennai and Coimbatore, customers enjoy a seamless experience from purchase to after-sales care, crafted with precision and delivered with pride. One location operates as a comprehensive 3S facility, integrating Sales, Service, and Spare Parts, while the other focuses solely on sales. Whether it's highend SUVs or elegant sedans, VST Grandeur ensures a premium ownership experience, supported by expert after-sales care and personalised service.",
    learnMoreLink: "https://retailers.jaguar.in/vst-grandeur-jaguar",
    locations: {
      Chennai: {
        sales: [
          {
            address: "Old #182, New #237,VST Emerald,\n Anna Salai, Chennai - 600 006.",
            phone: "+91 96000 53000",
            email: " info@vstgrandeur.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6408169750102!2d80.25909779999999!3d13.05852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674abb0bb305%3A0x753d3dea0b6e7db9!2sVST%20EMERALD%20Anna%20Salai!5e0!3m2!1sen!2sin!4v1747217780062!5m2!1sen!2sin"
          }
        ],
        "sales & service": [
          {
            address: " #267/2, By-Pass Road, Poonamalle,\n Chennai - 600 056.",
            phone: "+91 44-6636 1373, +91 44-6636 1363",
            email: "crs.chn@vstgrandeur.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.694512902591!2d80.09370609999999!3d13.055106799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a0b75750ef7%3A0x3c4e908ec67d2f95!2sVST%20GRANDEUR!5e0!3m2!1sen!2sin!4v1747217817663!5m2!1sen!2sin"
          }
        ]
      },
      Coimbatore: {
        "sales & service": [
          {
            address: "#145-1C1, L&T By-pass Road,\n Oddar Palayam, Ondipudur ,\n Coimbatore - 641 016.",
            phone: "+91 422-452 4444",
            email: ["info.cbe@vstgrandeur.com", "workshop.cbe@vstgrandeur.com"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250652.7168123875!2d76.8123673!3d11.0049225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba856e0ac6041f1%3A0x5d84af563fa4d462!2sJaguar%20Vst%20Grandeur!5e0!3m2!1sen!2sin!4v1747217854171!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 3,
    backgroundImage: landrover,
    brand: "landrover",
    bgColor: {
      from: "#DCAB77",
      to: "rgba(220, 171, 119, 0.4)",
    },
    LogoComponent: LandRoverIcon,
    header: "VST Grandeur - Land Rover",
    description: "VST Grandeur has been representing Land Rover in Tamil Nadu since 2011, offering the perfect blend of British luxury and rugged capability. With showrooms and service facilities in Chennai and Coimbatore, customers enjoy a seamless experience from purchase to after-sales care, crafted with precision and delivered with pride. One location operates as a comprehensive 3S facility, integrating Sales, Service, and Spare Parts, while the other focuses solely on sales. Whether it's highend SUVs or elegant sedans, VST Grandeur ensures a premium ownership experience, supported byexpert after-sales care and personalised service.",
    learnMoreLink: "https://retailers.landrover.in/vst-grandeur-land-rover",
    locations: {
      Chennai: {
        sales: [
          {
            address: "Old #182, New #237,VST Emerald\n Anna Salai, Chennai - 600 006.",
            phone: "+91 96000 53000",
            email: " info@vstgrandeur.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6408169750102!2d80.25909779999999!3d13.05852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674abb0bb305%3A0x753d3dea0b6e7db9!2sVST%20EMERALD%20Anna%20Salai!5e0!3m2!1sen!2sin!4v1747217925445!5m2!1sen!2sin"
          }
        ],
        "sales & service": [
          {
            address: " #267/2, By-Pass Road, Poonamalle,\n Chennai - 600 056.",
            phone: "+91 44-6636 1373, +91 44-6636 1363",
            email: "crs.chn@vstgrandeur.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.694512902591!2d80.09370609999999!3d13.055106799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a0b75750ef7%3A0x3c4e908ec67d2f95!2sVST%20GRANDEUR!5e0!3m2!1sen!2sin!4v1747217959401!5m2!1sen!2sin"
          }
        ]
      },
      Coimbatore: {
        "sales & service": [
          {
            address: "#145-1C1, L&T By-pass Road,\n Oddar Palayam, Ondipudur ,\n Coimbatore - 641 016.",
            phone: "+91 422-452 4444",
            email: [" info.cbe@vstgrandeur.com", "workshop.cbe@vstgrandeur.com"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250652.7168123875!2d76.8123673!3d11.0049225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba856e0ac6041f1%3A0x5d84af563fa4d462!2sJaguar%20Vst%20Grandeur!5e0!3m2!1sen!2sin!4v1747217999025!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  {
    id: 4,
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
        service: [
          {
            address: "#2E3, Dyavasandra 1st Phase, Whitefield\n Road, Mahadevapura Post,\n Bengaluru - 560 048.",
            phone: "+91 63641 02911",
            email: "info@porsche-bengaluru.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6234932445195!2d77.7013255!3d12.995916399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1581493fbbc5%3A0xf725d431b45ab6f7!2sPorsche%20Centre%20Bengaluru!5e0!3m2!1sen!2sin!4v1747218158568!5m2!1sen!2sin"
          }
        ]
      },
    }
  },
  {
    id: 5,
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
            address: "VST Avventura Private Limited \n1st Phase, Plot #2E4, Whitefield Main \nRoad, Devasandra Industrial Estate,\n Mahadevapura, Bengaluru - 560 048",
            phone: "+91 99024 88899",
            email: "info@vstavventura.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.616039076196!2d77.701408!3d12.996392400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1106b7c2cac1%3A0x38325cbf53b042a9!2sVST%20Maserati%20Service!5e0!3m2!1sen!2sin!4v1747290651611!5m2!1sen!2sin"
          }
        ]
      },
    }
  },
  {
    id: 6,
    backgroundImage: ducati,
    brand: "maserati",
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
        sales: [
          {
            address: "#148, Rajiv Gandhi Salai, Okkiyam, \nThoraipakkam, Chennai, Tamil Nadu \n600096",
            phone: "+91 99405 06040",
            email: "info@vstducati.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.378970077429!2d80.2397104!3d12.9475848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526743a784e02f%3A0xf7842622171a72df!2sDucati%20Chennai!5e0!3m2!1sen!2sin!4v1747842004465!5m2!1sen!2sin" ,
          }
        ],
      
      },
    }
  },
  {
    id: 7,
    backgroundImage: kia,
    brand: "maserati",
    bgColor: {
      from: "#FDC756",
      to: "rgba(253, 199, 86, 0.4)",
    },
    LogoComponent: KiaIcon,
    header: "VST Central - KIA",
    description: "VST Central has been driving KIA's journey in South India since 2019, bringing innovative and dependable vehicles to customers across Bangalore and North Tamil Nadu. With showrooms and service centres in Bangalore, Chennai, Salem, Vellore, and Hosur, it ensures easy access to worldclass automotive experiences. Built on a foundation of reliability and customer-first service, VST Central continues to grow, making every journey smoother with exceptional care and support at every step.",
    learnMoreLink: "https://vstcentral-kia.in/karnataka/",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, \nBengaluru - 560 020.",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62194.590892308755!2d77.5057122!3d13.0253581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17efe70fb545%3A0x90e3a1c2447e9a93!2sVST%20CENTRAL%20KIA%20-%20PALACE%20CROSS%20ROAD!5e0!3m2!1sen!2sin!4v1747219026615!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, \nBagalagunte, Hesaraghatta Main Road, \n8th Mile, T. Dasarahalli, \nBengaluru - 560 057.",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62187.55965849731!2d77.442047!3d13.0533288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9f9c73cbf5%3A0x8e59bd0957a66f2e!2sKia%20Car%20Service%20-%20Vst%20Central%20Kia%20-%20Hesaraghatta!5e0!3m2!1sen!2sin!4v1747223252452!5m2!1sen!2sin"
          }
        ],
        "sales & service": [
          {
            address: "#48, Industrial Suburb, Opp. \nYeshwantpur Railway Station, \nBengaluru - 560 022.",
            phone: "+91 96069 88123",
            email: ["salesheadypr.bly@vstcentral-kia.in", "servicemanager.slm@vstcentral-kia.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248750.29439806883!2d77.3184282!3d13.0532734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d3c841e2cb3%3A0x89f4847827ee7596!2sVST%20CENTRAL%20KIA%20-%20YESHWANTHPUR!5e0!3m2!1sen!2sin!4v1747223315800!5m2!1sen!2sin"
          }
        ],
        "Pre-Owned Cars": [
          {
            address: "VST Central Kia-CPO, CPS Tower Building, \n#145, Kempegowda Layout, Laggere Ring \nRoad, Near Dhanushri Cycles, \nBengaluru - 560 058.",
            phone: "+91 96069 88134",
            email: ["managercpo.bly@vstcentral-kia.in", "servicemanager.vrl@vstcentral-kia.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248750.29439806883!2d77.3184282!3d13.0532734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df363fe3c01%3A0x6cd47089f0ab9064!2sVST%20CENTRAL%20KIA%20CERTIFIED%20PRE%20-%20OWNED%20CARS!5e0!3m2!1sen!2sin!4v1747223390388!5m2!1sen!2sin"
          }
        ]
      },
      "Chennai": {
        sales: [
          {
            address: "Old #182, New #237, Anna Salai, \nChennai - 600 006.",
            phone: "+91 90872 11113",
            email: "salesmanagerch@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31093.718074797078!2d80.2325632!3d13.0538196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b9e01bc651%3A0xb1106c2bec1384e2!2sKIA%20Showroom%20Chennai%20-%20VST%20Central!5e0!3m2!1sen!2sin!4v1747223435630!5m2!1sen!2sin"
          },
          {
            address: "#204/187, GR Plaza, North Usman Road, \nT. Nagar, Chennai - 600 017.",
            phone: "+91 99400 92010",
            email: "salesmanagertn@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.3750756576278!2d80.232498!3d13.0515692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670023549f87%3A0xd1302492f99f3c74!2sKia%20Showroom%20T%20Nagar%20-%20VST%20Kia!5e0!3m2!1sen!2sin!4v1747223565704!5m2!1sen!2sin"
          },
           {
            address: "#155, Swamith Ashithanar Nagar, GNT \nRoad, Thandalkalani, Pulicat, \nChennai - 600 066.",
            phone: "+91 73050 32085",
            email: " salesmanagerthk@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1942.4034805389128!2d80.1949667!3d13.1745681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527b573076743f%3A0x4df8fecc75acdc92!2sVST%20CENTRAL%20-%20KIA%20REDHILLS%20SHOWROOM!5e0!3m2!1sen!2sin!4v1747843481442!5m2!1sen!2sin" 
          },
           {
            address: "#548/6, Kattukottai, Nattamangalam, \nSalem - 636 010.",
            phone: "+91 93848 77744",
            email: "salesmanagerslm@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31261.099198102755!2d78.1153607!3d11.6491666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef3400b770e9%3A0xaa5d6b61a93abfdb!2sVST%20CENTRAL%20-%20KIA%20Kondalampatti%2C%20Salem!5e0!3m2!1sen!2sin!4v1747843601693!5m2!1sen!2sin" 
          },
        ],
        service: [
          {
            address: "#57, Arcot Road, Virugavayapuram, \nBharani Colony, Saligramam, \nChennai - 600 093.",
            phone: "+91 90872 11113, +91 89255 03894",
            email: "servicemanagerch@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124378.72962695648!2d80.0696671!3d13.0461534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526720103596eb%3A0x89ee02c1c5997cb0!2sKia%20Car%20Service%20-%20VST%20Central%2C%20Chennai!5e0!3m2!1sen!2sin!4v1747234107357!5m2!1sen!2sin"
          },
        ],
        "sales & service": [
          
          {
            address: "#250-2, Meyyanur Road, Ashokapuram \nPost, Salem - 636 004.",
            phone: "+91 81488 11113, +91 93848 77744, +91 93840 84430",
            email: "servicemanagerslm@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31258.594118025143!2d78.0997807!3d11.6714159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf06a1e618371%3A0xd149fb0b495752ca!2sKia%20Car%20Showroom%20-%20Vst%20Kia%2C%20Meyyanur%20Main%20Road!5e0!3m2!1sen!2sin!4v1747234237365!5m2!1sen!2sin"
          },
          {
            address: "#177, Kodipali, Thoppali Agrahara Village, \nHosur - 635 109.",
            phone: "+91 93449 04681, +91 78458 05068, +91 78458 05069",
            email: "salesmanagerhsr@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.934187484988!2d77.8746835!3d12.717716399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae776f63338a5b%3A0xaf507e08bea31c5!2sKia%20Car%20Showroom%20-%20Vst%20Central%2C%20Kumudepalli!5e0!3m2!1sen!2sin!4v1747234328566!5m2!1sen!2sin"
          },
          {
            address: "No. 43, Katpadi Road, Gandhinagar, \nVellore - 632 006.",
            phone: "+91 90872 11113, +91 93840 96077",
            email: ["servicemanagervlr@vstcentral-kia.in", "salesmanagervlr@vstcentral-kia.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.318270535633!2d79.1367769!3d12.9514746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad393de10f1b39%3A0xee4f088f339b7d95!2sVST%20CENTRAL%20-%20KIA%20SHOWROOM%20%26%20WORKSHOP!5e0!3m2!1sen!2sin!4v1747234422327!5m2!1sen!2sin"
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
      from: "#D6744E",
      to: "rgba(214, 116, 78, 0.4)",
    },
    LogoComponent: TataIcon,
    header: "VST Motors -TATA",
    description: "VST Motors, one of the group's oldest and most successful franchise partnerships, has represented Tata Motors in Tamil Nadu since 1954, becoming an integral part of the region's automotive landscape. The journey began in 1942 when V.S. Thiruvengadasamy Mudaliar acquired the family's first showroom on Mount Road, Chennai, now a landmark that marked the group's expansion into Tamil Nadu.  With a strong presence across key locations including Chennai, Cuddalore, Salem, Hosur, Trichy, and Vellore, VST Motors is committed to delivering reliable vehicles and exceptional after-sales service. Driven by a legacy of quality, trust, and customer focus, VST Motors continues to build lasting relationships with its customers, reinforcing its reputation as a dependable and customer-centric brand across the state.",
    learnMoreLink: "https://vstmotors.com/",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "#1049, Poonamallee High Road, Arumbakkam, Chennai - 600 106.",
            phone: "+91 73389 77522 , +91 93840 58820",
            email: "ace.ambkm@vstmotors.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3551153647277!2d80.2061238!3d13.076666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266a11dafd219%3A0x908e7f8c925d6c45!2s1049%2C%20Poonamallee%20High%20Rd%2C%20Amaravathi%20Nagar%2C%20Arumbakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600106!5e0!3m2!1sen!2sin!4v1747254535176!5m2!1sen!2sin"
          },
           {
            address: "#2D, Dindigul Road, Trichy - 620 001.",
            phone: "+91 98423 19820 , +91 98424 10847",
            email: " trycvdsales@vstmotors.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2206779968324!2d78.6797484!3d10.794403299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf515569addf1%3A0xdcd00c0fc03eabe8!2sTata%20Motors%20Commercial%20Vehicle%20Dealer%20-%20V%20S%20T%20Motors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747280248764!5m2!1sen!2sin"
          },
        ],
        // service: [
        //   {
        //     address: "By-Pass Road, Poonamallee, Chennai - 600 056.",
        //     phone: " +91 98403 76339 , +91 73974 92943 , +91 89259 95593 , +91 98401 5405",
        //     email: "  cvd.pnmi@vstmotors.com",
        //     map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
        //   }
        // ],
        "sales & service": [
          {
            address: "By-Pass Road, Poonamallee, Chennai - 600 056.",
            phone: " +91 98403 76339 , +91 73974 92943 , +91 89259 95593 , +91 98401 54057",
            email: "  cvd.pnmi@vstmotors.com",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.182183592293!2d80.2387666!3d12.9485207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d03a4292861%3A0x22d85d28dbf66c98!2sMercedes-Benz%20Titanium%20Motors!5e0!3m2!1sen!2sin!4v1747282040407!5m2!1sen!2sin"
          },
          {
            address: "#237, Anna Salai,\n Chennai - 600 006",
            phone: "+91 72598 36655",
            email: "info.chennai@vstducati.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6408169750102!2d80.25909779999999!3d13.05852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674abb0bb305%3A0x753d3dea0b6e7db9!2sVST%20EMERALD%20Anna%20Salai!5e0!3m2!1sen!2sin!4v1747217780062!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#267/2, By-Pass Road, Poonamalle,\n Chennai - 600 056",
            phone: "+91 72598 36655",
            email: "service.chennai@vstducati.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.694512902591!2d80.09370609999999!3d13.055106799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a0b75750ef7%3A0x3c4e908ec67d2f95!2sVST%20GRANDEUR!5e0!3m2!1sen!2sin!4v1747217817663!5m2!1sen!2sin"
          }
        ]
      }
    }
  },
  // {
  //   id: 9,
  //   backgroundImage: kia,
  //   brand: "kia",
  //   bgColor: {
  //     from: "#FDC756",
  //     to: "rgba(253, 199, 86, 0.4)",
  //   },
  //   LogoComponent: KiaIcon,
  //   header: "VST Central - KIA",
  //   description: "VST Central is the authorized dealer for KIA in Bengaluru and Mysore, offering a comprehensive range of KIA vehicles along with exceptional sales and service support. With modern showrooms and state-of-the-art service centers, it ensures a premium automotive experience for all customers.",
  //   learnMoreLink: "https://www.kia.com",
  //   locations: {
  //     Bangalore: {
  //       sales: [
  //         {
  //           address: "#202, 7th Main, HRBR Layout,\n Kalyan Nagar, Bengaluru - 560 043",
  //           phone: "+91 80 2542 2810",
  //           email: "sales.bangalore@vstcentral.in",
  //           map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3094986550345!2d77.6431027!3d13.015952299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1728131c0e23%3A0xa06978a43d8ffa58!2sCity%20Honda%20Sales%20HRBR%20Layout!5e0!3m2!1sen!2sin!4v1747228274606!5m2!1sen!2sin"
  //         }
  //       ],
  //       service: [
  //         {
  //           address: "#143, Lalbagh Road,\n Near Subbaiah Circle, Bengaluru - 560 027",
  //           phone: "+91 80 4333 3330",
  //           email: "service.bangalore@vstcentral.in",
  //           map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.164150449718!2d77.5865653!3d12.9613459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156978155c3f%3A0xead9a19c3f1e2497!2sCity%20Honda%20Sales%20Lalbagh%20Road!5e0!3m2!1sen!2sin!4v1747228307684!5m2!1sen!2sin"
  //         }
  //       ]
  //     },
  //     Mysore: {
  //       sales: [
  //         {
  //           address: "#123, Hunsur Road,\n Mysore - 570 008",
  //           phone: "+91 821 2345678",
  //           email: "sales.mysore@vstcentral.in",
  //           map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3094986550345!2d76.6431027!3d12.315952299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf0c0c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sVST%20Central%20KIA%20Mysore!5e0!3m2!1sen!2sin!4v1747228274606!5m2!1sen!2sin"
  //         }
  //       ],
  //       service: [
  //         {
  //           address: "#456, Ring Road,\n Mysore - 570 008",
  //           phone: "+91 821 2345679",
  //           email: "service.mysore@vstcentral.in",
  //           map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.164150449718!2d76.5865653!3d12.2613459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf0c0c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sVST%20Central%20KIA%20Service%20Mysore!5e0!3m2!1sen!2sin!4v1747228307684!5m2!1sen!2sin"
  //         }
  //       ]
  //     }
  //   }
  // },
  {
    id: 10,
    backgroundImage: mahindra,
    brand: "mahindra",
    bgColor: {
      from: "#05F1F2",
      to: "rgba(5, 241, 242, 0.4)",
    },
    LogoComponent: MahindraIcon,
    header: "India Garage - Mahindra",
    description: "India Garage, a well-established franchise partner of Mahindra & Mahindra, has been a trusted name in Karnataka since 1949, proudly serving both urban and rural communities. With showrooms and workshops in key locations including Bengaluru, Mysuru, and across southern Karnataka, India Garage offers an extensive range of robust SUVs and commercial vehicles, backed by a dependable service network and a customer-first approach. Driven by a commitment to excellence, reliability, and performance, India Garage remains the preferred destination for Mahindra customers across the region, continuing to build lasting trust and satisfaction.",
    learnMoreLink: "https://www.india-garage.in/",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "Head Office, #1, VST Vistas, Palace Cross Rd,\n Chakravarthy Layout, Jayamahal,\n Bengaluru - 560 020",
            phone: "+91 88844 98957",
            email: ["asm@india-garage.in", "jeevanprasad@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996461.3198621258!2d76.5380582!3d12.6855276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163883f74f7d%3A0x4385e2cd7037dce4!2sMahindra%20India%20Garage%20-%20Palace%20Cross%20Road!5e0!3m2!1sen!2sin!4v1747211520843!5m2!1sen!2sin"
          }
        ],
        service: [
          {
            address: "#110/110/10, Lalbagh Main Road,\n Near Urvashi Theatre,\n Bengaluru - 560 043",
            phone: "+91 80502 90512",
            email: ["sm.lalbagh@india-garage.in", "karthiks@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996461.3198621258!2d76.5380582!3d12.6855276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e77446713f%3A0x859a28fb0fd3f809!2sMahindra%20India%20Garage%20-%20Lal%20Bagh%20Road!5e0!3m2!1sen!2sin!4v1747211878143!5m2!1sen!2sin"
          }
        ]
      },
      Mysore: {
        sales: [
          {
            address: "#80/1, 1st Block, Bychanahalli, Mangalore Mysore Road, Kushalnagar, Karnataka - 571 234.",
            phone: "+91 88844 98958",
            email: "salescv.wf@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.945086531723!2d75.9493138!3d12.453378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba509cd1b9f725f%3A0x7ae5120debe37d14!2sMAHINDRA%20INDIA%20GARAGE-MYSORE!5e0!3m2!1sen!2sin!4v1747899225545!5m2!1sen!2sin"
          },
          {
            address: "#1608 Adhichunchanagiri Road, Kuvempunagar, P and T Block, Chamaraja Mohalla, Mysuru - 570 023.",
            phone: "+91 88844 98959",
            email: "sales.kuvempunagar@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3451145362455!2d76.6313254!3d12.2925299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b574f907843%3A0x6471774e6fa1206a!2sMahindra%20Indian%20Garage!5e0!3m2!1sen!2sin!4v1747899405373!5m2!1sen!2sin"
          },
          {
            address: "Mahindra Showroom, India Garage, Opp, Eid Ground, Maddur, Karnataka - 571 428.",
            phone: "+91 88844 98959",
            email: "sales.maddur@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31158.41933595251!2d76.8878506!3d12.5292446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa12923faac49%3A0x3b4688d0d189eda4!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899553266!5m2!1sen!2sin"
          },
          {
            address: "#C-18, Madikeri Bypass Road, Hunsur, Karnataka - 571105.",
            phone: "+91 88844 98959",
            email: "sales.hunsur@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1152686131504!2d76.3029991!3d12.308023599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ab35e5923543%3A0x93eca4c127398a40!2sMahindra%20India%20Garage!5e0!3m2!1sen!2sin!4v1747899617805!5m2!1sen!2sin"
          },
          {
            address: "No.1-4-35B, Two Shutter Ground Floor, Jayanagara, K R Pete, Mandya - 571 426.",
            phone: "+91 88844 98959",
            email: "sales.krpete@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31157.027815071415!2d76.9194856!3d12.5407536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa12923faac49%3A0x3b4688d0d189eda4!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899692604!5m2!1sen!2sin"
          }
        ],
         "sales & service": [
          {
            address: "Near LIC Opp Simha Theatre, Chamrajnagar - 571 313.",
            phone: "+91 88844 98959",
            email: ["ig.chnagar@india-garage.in", "service.chnagar@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.63656126204!2d76.933995!3d11.9303616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fe93a3dc03%3A0x2b3ece5b81cda608!2sMahindra%20India%20Garage%20Mysore%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899794763!5m2!1sen!2sin"
          },
        ],
        service: [
          {
            address: "#427/1A, Hebbal Ind. Area, Metagalli Post, Mysuru - 570 016.",
            phone: "+91 91485 89147",
            email: ["smhebbal@india-garage.in", "bodyshopmanager@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.265546858863!2d76.6155936!3d12.3651366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a3d00d7608b%3A0x260b9f18e163c5a8!2sMahindra%20India%20Garage%20%E2%80%93Workshop!5e0!3m2!1sen!2sin!4v1747899872802!5m2!1sen!2sin"
          },
           {
            address: "#201/202, Hunsur Road, next to Church, Vijayanagar 4th Stage, Hinkal, Mysuru-570 017.",
            phone: "+91 88844 98959",
            email: "sales.mysore@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3897.8701066935896!2d76.6107134!3d12.3245286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7af1a8477065%3A0xba976c8cd1a206a1!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899946356!5m2!1sen!2sin"
          },
          {
            address: "Old B.M Road, Gutturur village, Kottathi hobli, Belur Grampanchayat, Malavalli - 571 403.",
            phone: "+91 88844 98959",
            email: ["igmandya@india-garage.in", "mandyaservice@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62313.99311644604!2d76.8699647!3d12.541012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa12923faac49%3A0x3b4688d0d189eda4!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747900006805!5m2!1sen!2sin"
          },
           {
            address: "#292/10, Block #23, Sampige Katte Road, Madikeri - 571 201.",
            phone: "+91 88844 98959",
            email: ["sales.madikeri@india-garage.in", "service.madikeri@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.2574093870294!2d75.75174919999999!3d12.432562299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5aa9e27787899%3A0x9014a3a231e9653d!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747900081135!5m2!1sen!2sin"
          },
          {
            address: "State Highway 90, Ponnampet, Road Jodubetti, Gonikoppal - 571 213.",
            phone: "+91 88844 98959",
            email: ["sales.gonikoppal@india- garage.in", "service.gonikoppal@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.360701638476!2d75.939742!3d12.1558282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ba3786b87fad%3A0xc4dcb9f89be834c9!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747900133812!5m2!1sen!2sin"
          } 
        ]
      }
    }
  },
  {
    id: 11,
    backgroundImage: wagen,
    brand: "volkswagen",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: VolkswagenLogo,
    header: "Bangalore Motors - Volkswagen",
    description: "In 2009, Volkswagen Palace Cross, part of the VST Group's longstanding legacy in the Indian automotive space, became a premier destination for automotive excellence in Bengaluru. Located on Palace Cross Road, the showroom offers a refined buying experience, customer-first service, and a deep understanding of what Indian customers seek in a global brand. Bringing the best of German engineering to the city, it showcases the complete Volkswagen lineup, from stylish hatchbacks to robust SUVs in an elegant and welcoming environment. With a focus on trust, transparency, and attention to detail, Volkswagen Palace Cross continues to set benchmarks in customer satisfaction. Blending heritage with modernity, it remains the preferred destination for Volkswagen enthusiasts across the region.",
    learnMoreLink: "https://www.vw-bangaloremotors.co.in/",
    locations: {
      sales: {
        sales: [
          {
            address: "VW Palace Cross #1, Palace Cross Road, \nBengaluru - 560 020.",
            phone: "+91 96866 01249",
            email: "crhead@vw-bangaloremotors.co.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.600293612716!2d77.5856699!3d12.9973978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16471a670e77%3A0xa3b3b7d52a5f3498!2sVolkswagen%20Palace%20Cross%20Bangalore%20-%20Showroom!5e0!3m2!1sen!2sin!4v1747227805300!5m2!1sen!2sin"
          },
        ],
        service: [
          {
            address: "VW Rajajinagar, #1/1 Kodi Street, 4th \nMain Rajajinagar, Next to Venus Int \nSchool, Bengaluru - 560 010.",
            phone: "+91 96866 01249",
            email: "crhead@vw-bangaloremotors.co.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8569045788895!2d77.5604245!3d12.981002799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df640156a91%3A0x325ed398bf8b8612!2sVolkswagen%20Palace%20Cross%20-%20Rajajinager!5e0!3m2!1sen!2sin!4v1747227847236!5m2!1sen!2sin"
          },
          {
            address: "VW Palace Cross, #69/2, Begalagunte, \nHesarghatta Main Road, 8th Mile, \nT.Dasarahalli, Bengaluru - 560 057.",
            phone: "+91 96866 01249",
            email: "crhhsrg@vw-bangaloremotors.co.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.720216998035!2d77.5078525!3d13.053472600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae232cd37c0e0d%3A0x1a89d7aeb69240c1!2sVolkswagen%20Palace%20Cross%20Hesargatta%20-%20Volkswagen!5e0!3m2!1sen!2sin!4v1747227892497!5m2!1sen!2sin"
          },
        ],
        "sales & service": [
          {
            address: "VW Mysore Road, #26/2 & 27/2, \nKenchanahalli Village, Kengeri Hobli, \nMysore Road, Bengaluru - 560 059.",
            phone: "+91 96866 01249",
            email: "crhead@vw-bangaloremotors.co.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.3333016634388!2d77.5030693!3d12.9291368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ef00026b7f3%3A0xc01a322d21f9de9b!2sVolkswagen%20Mysore%20Road%20-%20Sales%20%26%20Service!5e0!3m2!1sen!2sin!4v1747227650015!5m2!1sen!2sin"
          }
        ],
      },
    }
  },
  {
    id: 12,
    backgroundImage: byd,
    brand: "BYD",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: BydLogo,
    header: "VST BYD",
    description: "In 2023, VST Group extended its automotive legacy by partnering with BYD, introducing a new era of electric mobility to Karnataka. With showrooms located on Cunningham Road and Outer Ring Road (OSUR), VST BYD offers access to BYD's cutting-edge electric vehicles, combining innovation with everyday practicality. As the first Chinese automotive brand in the VST portfolio, BYD represents a bold step toward the future of sustainable transportation. The VST Group brings its deep-rooted expertise in automotive retail and service to this new venture. With a strong focus on green mobility and future-ready technology, VST BYD is poised to redefine the electric vehicle experience in the region, backed by trusted guidance and dependable after-sales support.",
    learnMoreLink: "https://vstbyd.com/",
    locations: {
      India: {
        sales: [
          {
            address: "#8, KSCMF Building, Cunningham Road \nBengaluru - 560 052.",
            phone: "+91 96060 74777",
            email: " info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.9654766732485!2d77.593135!3d12.9895086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1723bff92db9%3A0xee980fcacf73499c!2sVST%20BYD%20Bangalore%20-%20Cunningham%20Road!5e0!3m2!1sen!2sin!4v1747227934358!5m2!1sen!2sin"
          },
          {
            address: "GKS Tower #40 & 41, sy:33, Hosur Main \nRoad, Hongasandra Metro Rail Stn, \nBommanahalli, Bengaluru - 560 058.",
            phone: "+91 96060 74777.",
            email: "info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.2865345441438!2d77.6334927!3d12.8983231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1574556b472b%3A0x40ce1c0dc073c801!2sVST%20BYD%20Showroom%20-%20Hosur%20Road!5e0!3m2!1sen!2sin!4v1747227978547!5m2!1sen!2sin"
          },
          {
            address: "#38/5A Hyland Industrial Estate, 11th \nKM, Hosur Road, \nBommanahalli,Bengaluru - 560 068.",
            phone: "+91 96060 74777.",
            email: "info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.149986869151!2d77.6354502!3d12.8980755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153776c653cf%3A0xe7341df12627565a!2sVST%20BYD%20-%20Service!5e0!3m2!1sen!2sin!4v1747228024967!5m2!1sen!2sin"
          }
        ],
      },
    }
  },
  {
    id: 13,
    backgroundImage: honda,
    brand: "honda",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: HondaLogo,
    header: "City Honda",
    description: "Since 2001, City Honda has been bringing the trusted performance of Honda two-wheelers to customers across Karnataka. As part of the VST Group, City Honda caters to a dynamic and growing community of riders, offering a seamless blend of reliability, efficiency, and service excellence. With two centrally located showrooms in Bangalore and workshops across the city and Chikmagalur, City Honda delivers a complete 4S experience - Sales, Service, Spares, and Safety Riding under one roof. Backed by a knowledgeable sales team and expert service technicians, the brand ensures every customer enjoys a smooth and dependable ownership journey. Rooted in trust and powered by performance, City Honda continues to be a preferred destination for two-wheeler enthusiasts.",
    learnMoreLink: "https://cityhonda.in/",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "M/S. City Honda, #6, St. John's Road, \nUlsoor, Bengaluru - 560 042.",
            phone: ["+91 80 2513 9199, +91 94808 12350"],
            email: "sales.ho@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7771161651913!2d77.6159692!3d12.9860895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168c36ee3133%3A0xe180f725b7e36d72!2sCity%20Honda%20Sales%20St.%20Johns%20Road%20India%20Garage%20Agencies!5e0!3m2!1sen!2sin!4v1711542825613!5m2!1sen!2sin"
          },
          {
            address: "#202,7th Main, HRBR Layout, Kalyan \nNagar, Bengaluru - 560 043.",
            phone: ["+91 80 2542 2810", "+91 80 2542 2811", "+91 98459 41305"],
            email: "sales.hrbr@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3094986550345!2d77.6431027!3d13.015952299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1728131c0e23%3A0xa06978a43d8ffa58!2sCity%20Honda%20Sales%20HRBR%20Layout!5e0!3m2!1sen!2sin!4v1747228274606!5m2!1sen!2sin"
          },
          {
            address: "#143, Lalbagh Road, Near Subbaiah \nCircle, Opp, GST Seva Kendra, \nBengaluru - 560 027.",
            phone: ["+91 80 4333 3330", "+91 88844 34200"],
            email: "sales.lbg@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.164150449718!2d77.5865653!3d12.9613459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156978155c3f%3A0xead9a19c3f1e2497!2sCity%20Honda%20Sales%20Lalbagh%20Road!5e0!3m2!1sen!2sin!4v1747228307684!5m2!1sen!2sin"
          }
        ],
        "service and parts": [
          {
            address: "#113, 1sr Main Road, Lingarajapuram, \nBengaluru - 560 084.",
            phone: ["+91 80 2549 6561", "+91 94808 12384"],
            email: "service.lrp@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.4260254411024!2d77.6207003!3d13.0085203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e7556e6ef3%3A0xf689f35e9637d316!2sCity%20Honda%20Service%20Lingarajapuram!5e0!3m2!1sen!2sin!4v1747228353651!5m2!1sen!2sin"
          },
          {
            address: "Head Workshop, No.6, St. John's Road, \nUlsoor,  Bengaluru - 560 042.",
            phone: ["+91 80 2513 9199", "+91 94498 67080"],
            email: "service.ho@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7771161651913!2d77.6160922!3d12.986102700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1750ec0c4ff3%3A0xf64250c532b819ee!2sCity%20Honda%20Service%20St%20Johns%20Road!5e0!3m2!1sen!2sin!4v1747228507673!5m2!1sen!2sin"
          },
          {
            address: "No. 24, 25, 30 and 31, 40 Ft Road, PNS \nLayout, Subbannapalya, Kalyan Nagar, \nBengalur - 560 043.",
            phone: ["+91 80 2542 2813", "+91 76193 95014"],
            email: "service.hrbr@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.91462263749514!2d77.6412537!3d13.0154752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1727eef1d2ed%3A0xe882785e66ab71e1!2sCity%20Honda%20Service%20HRBR%20Layout%20-Kalyan%20Nagar!5e0!3m2!1sen!2sin!4v1747228536688!5m2!1sen!2sin"
          },
          {
            address: "#143, Lalbagh Road, Near Subbaiah \nCircle, Opp, GST Seva Kendra, \nBengaluru - 560 027.",
            phone: ["+91 80 4333 3330", "+91 94808 12380"],
            email: "service.ibg@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.161242209912!2d77.58864729999999!3d12.961532099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d9607610e3%3A0x379b9710e881c087!2sCITY%20HONDA%20SERVICE%20LALBAGH%20ROAD!5e0!3m2!1sen!2sin!4v1747228564023!5m2!1sen!2sin"
          },
          {
            address: "#40/2, Ramamurthynagar Main Road, \nRamamurthy Nagar, Bengaluru - 560 016.",
            phone: ["+91 80 4094 4950", "+91 94808 12390"],
            email: "service.rmn@cityhonda.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.357387289643!2d77.66433099999999!3d13.012898499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112887e697bf%3A0x46b5e5388f798533!2sCity%20Honda%20Service%20Ramamurthy%20Nagar!5e0!3m2!1sen!2sin!4v1747228592460!5m2!1sen!2sin"
          }
        ],
        "spares warehouse": [
          {
            address: "#113, 1st Main Road, Lingarajpuram, \nBengaluru - 560 084.",
            phone: "+91 80 2549 6561, +91 94483 97794",
            email: ["warehouse@cityhonda.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.4260254411024!2d77.6207003!3d13.0085203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e7556e6ef3%3A0xf689f35e9637d316!2sCity%20Honda%20Service%20Lingarajapuram!5e0!3m2!1sen!2sin!4v1747278984074!5m2!1sen!2sin"
          },
        ]
      },
    }
  },
];

// Get the type of the current slide's locations
type LocationKeys = keyof typeof slides[number]['locations'];

const FranchiseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData?.locations) {
      const locationKeys = Object.keys(currentSlideData.locations);
      if (locationKeys.length > 0) {
        setActiveLocation(locationKeys[0]);
      }
    } else {
      setActiveLocation(null);
    }
  }, [currentSlide]);

  const goToSlide = (brand: SlideData["brand"]) => {
    const index = slides.findIndex((slide) => slide.brand === brand);
    if (index !== -1) {
      setCurrentSlide(index);
    }
  };

  const gradientColor = "rgba(223, 172, 79, 0.56)"

  // Total number of virtual slides for infinite scrolling
  const totalVirtualSlides = 50 * slides.length;

  // Move to previous slide with infinite loop
  const prevSlide = () => {
    // Only allow backward scrolling if we're not at the beginning
    if (scrollPosition > 0) {
      const newPosition = scrollPosition - 1;
      setScrollPosition(newPosition);
      setCurrentSlide(newPosition % slides.length);
    } else {
      // If at beginning, we don't scroll (as per user requirement)
      // But we still update the active slide display
      // setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  // Move to next slide with infinite loop
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setScrollPosition((prev) => prev + 1);
  };

  const currentLocations = slides[currentSlide].locations;

  return (
    <div className="relative w-full min-h-screen lg:mt-[-3rem] mt-[1rem]">
      {/* Fixed background gradient */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #225a8c 20%, #4194D8 90%)"
        }}
      />

      {/* Content */}
      <motion.div
        className="relative w-full min-h-screen overflow-x-hidden z-10"
        initial={false}
        transition={{ duration: 0.01 }}
      >
        {/* Car section */}
        <div className="relative w-full h-auto sm:h-auto lg:h-screen flex flex-col lg:flex-row sm:mb-[1rem] lg:mb-[10rem] mb-[4rem]">
          {/* Left section with background and car */}
          <div className="relative w-full lg:w-[85%] h-[50vh] sm:h-[50vh] lg:h-full xl:h-[100vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 w-full lg:w-[92%] h-full sm:h-[80vh] lg:h-[95%] rounded-br-[60px] sm:rounded-br-[60px] lg:rounded-br-[120px] overflow-hidden"
              >
                <Image
                  src={slides[currentSlide].backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
                  style={{
                    objectPosition: 'center center'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right section */}
          <div className="relative w-full lg:w-[45%] px-4 sm:px-6 lg:px-1 flex flex-col justify-start lg:justify-between py-4 lg:py-20 mt-4 lg:mt-0 gap-0 lg:gap-0">
            {/* Title */}
            <div className="flex-1 flex items-center justify-center sm:justify-center  sm:mb-[2rem] lg:mb-[4rem] mb-[2rem] w-full">
              <h2 className="text-white font-rocWide font-light text-4xl sm:text-[3.5rem] lg:text-[4.5rem] text-center lg:text-start w-full sm:w-[90%] lg:w-auto">
                <div className="flex flex-col items-center sm:items-center lg:items-start gap-2 sm:gap-4 lg:gap-6 w-full">
                  <div className="flex flex-row sm:flex-row lg:flex-col items-center sm:items-center lg:items-start gap-2 sm:gap-4 lg:gap-6 justify-center sm:justify-center lg:justify-start">
                    <span className="text-4xl sm:text-[3.5rem] lg:clamp-67 text-center sm:text-center lg:text-start">Our</span>
                    <span className="text-4xl sm:text-[3.5rem] lg:clamp-67 text-center sm:text-center lg:text-start">Automotive</span>
                  </div>
                  <span className="text-4xl sm:text-[3.5rem] lg:text-clamp-67 text-center sm:text-center lg:text-start">Franchises</span>
                </div>
              </h2>
            </div>

            {/* Navigation and logos */}
            <div className="flex flex-col items-center lg:items-start justify-start gap-2 sm:gap-4 lg:gap-8 h-auto lg:h-[16rem] translate-y-[-10%] lg:translate-y-[-20%] w-full lg:mt-16">
              {/* Up arrow */}
              <button
                onClick={prevSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[5.5rem] mb-2 sm:mb-4 lg:mb-0"
              >
                <svg
                  className="w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>

              {/* Brand logos - infinite loop implementation */}
              <div className="w-full flex justify-center lg:justify-start overflow-hidden py-2 sm:py-4 lg:py-[2rem] lg:pl-[3rem] relative">
                <motion.div
                  className="flex items-center gap-4 sm:gap-6 lg:gap-16"
                  animate={{
                    x: `-${scrollPosition * ((screenWidth ?? 1200) < 640 ? 216 : (screenWidth ?? 1200) < 1024 ? 223 : 264)}px`,
                    translateX: (screenWidth ?? 1200) < 640 ? "9.59%" : (screenWidth ?? 1200) < 1024 ? "9.55%" : "-0.1%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Create a large number of repeating logos for infinite scrolling */}
                  {Array(10).fill(null).map((_, outerIndex) =>
                    slides.map((slide, innerIndex) => {
                      const index = (outerIndex * slides.length) + innerIndex;
                      const realIndex = index % slides.length;
                      const isActive = realIndex === currentSlide;

                      return (
                        <motion.button
                          key={`slide-infinite-${index}`}
                          onClick={isActive ? undefined : () => { }}
                          className={`transition-opacity duration-300 flex-shrink-0 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-75 pointer-events-none"
                            }`}
                          whileHover={isActive ? { scale: 1.05 } : undefined}
                          animate={{
                            scale: isActive ? 1.10 : 0.80
                          }}
                          transition={{
                            scale: { duration: 0.3 }
                          }}
                        >
                          <slide.LogoComponent />
                        </motion.button>
                      );
                    })
                  )}
                </motion.div>

                {/* 70% bottom border from right side */}
                <div className="absolute bottom-0 right-0 w-full lg:w-[70%] h-[1px] bg-white bg-opacity-50"></div>
              </div>

              {/* Down arrow */}
              <button
                onClick={nextSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[5.5rem] mt-2 sm:mt-4 lg:mt-0"
              >
                <svg
                  className="w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className="w-full flex flex-col lg:flex-row py-2 sm:py-12 lg:py-10 px-4 sm:px-6 lg:px-24 items-start gap-6 sm:gap-8">
          {/* Left: Description */}
          <div className="w-full lg:w-3/5 flex flex-col items-center sm:items-center lg:items-start">
            <h2 className="text-white text-xl sm:text-2xl lg:text-[3rem] font-normal mb-3 sm:mb-4 lg:mb-8 text-center sm:text-center lg:text-left w-full flex justify-center sm:justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`header-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-xl sm:text-2xl lg:text-[3rem] font-semibold sm:font-semibold lg:font-normal mb-3 sm:mb-4 lg:mb-8 text-center sm:text-center lg:text-left w-full flex justify-center sm:justify-center lg:justify-start xl:justify-start"
                >
                  {slides[currentSlide].header}
                </motion.h2>
              </AnimatePresence>
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white text-sm sm:text-base lg:text-[24px] text-justify 
                font-normal leading-[150%] sm:leading-[160%] lg:leading-[177%] tracking-[0%] max-w-6xl"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            <a href={slides[currentSlide].learnMoreLink} className="mt-4 sm:mt-6 lg:mt-10 inline-block w-full sm:w-auto flex justify-center sm:justify-center lg:justify-start" target="_blank" rel="noopener noreferrer">
              <h3 className="bg-white rounded-lg px-6 sm:px-8 lg:px-40 py-2 sm:py-3 lg:py-5 text-[#0f0f0e] text-lg sm:text-xl lg:text-3xl font-light hover:bg-[#DFAC4F] hover:text-white transition-colors text-center">
                Learn More
              </h3>
            </a>
          </div>

          {/* Right: Switchable Location Tabs */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4 mt-6 sm:mt-8 lg:mt-0">
            {slides[currentSlide]?.locations && (
              <>
                {/* Website Link */}
                {slides[currentSlide]?.learnMoreLink && (
                  <div className="w-full flex justify-end mb-4">
                    <div className="flex items-center gap-2 w-[400px]">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-roc font-normal whitespace-nowrap">Website:</span>
                      <h2 
                        onClick={() => window.open(slides[currentSlide].learnMoreLink, '_blank')}
                        className="text-white hover:text-[#DFAC4F] transition-colors text-sm sm:text-base lg:text-lg font-roc font-normal cursor-pointer truncate flex-1"
                      >
                        {slides[currentSlide].learnMoreLink}
                      </h2>
                    </div>
                  </div>
                )}

                {/* Only show tabs if there are multiple locations */}
                {Object.keys(slides[currentSlide].locations).length > 1 && (
                  <div className="flex gap-2 sm:gap-4 mb-2 w-full overflow-x-auto pb-2">
                    {Object.keys(slides[currentSlide].locations).map((loc) => (
                      <button
                        key={`${currentSlide}-${loc}`}
                        onClick={() => setActiveLocation(loc)}
                        className={`flex-1 min-w-[120px] px-3 sm:px-4 py-2 rounded-t-lg font-semibold text-base sm:text-lg border-b-2 transition-colors whitespace-nowrap
                          ${activeLocation === loc
                            ? 'border-b-4 border-[#DFAC4F] text-white'
                            : 'border-b-2 border-white/30 text-white'}
                        `}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
                {/* Location Card */}
                <div
                  className="border-l border-r border-white p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 min-w-0 max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] overflow-y-auto"
                  style={{ background: "transparent", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style>{`
                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                  `}</style>
                  {/* If only one location, use that directly */}
                  {(() => {
                    const locationKey = Object.keys(slides[currentSlide].locations).length === 1
                      ? Object.keys(slides[currentSlide].locations)[0]
                      : activeLocation;

                    if (!locationKey || !slides[currentSlide].locations[locationKey]) return null;

                    const location = slides[currentSlide].locations[locationKey];

                    return (
                      <>
                        {/* Sales */}
                        {location.sales && location.sales.length > 0 && (
                          <div className="hide-scrollbar">
                            {location.sales.map((sale, idx) => (
                              <div key={`${currentSlide}-${locationKey}-sales-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {sale.address}<br />
                                  {Array.isArray(sale.phone) ? (
                                    sale.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {sale.phone}
                                    </div>
                                  )}
                                  {Array.isArray(sale.email) ? (
                                    sale.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {sale.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales Location Map ${idx + 1}`}
                                    src={sale.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Service */}
                        {location.service && location.service.length > 0 && (
                          <div className="hide-scrollbar mb-6">
                            {location.service.map((service, idx) => (
                              <div key={`${currentSlide}-${locationKey}-service-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Service :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {service.address}<br />
                                  {Array.isArray(service.phone) ? (
                                    service.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {service.phone}
                                    </div>
                                  )}
                                  {Array.isArray(service.email) ? (
                                    service.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {service.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Service Location Map ${idx + 1}`}
                                    src={service.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Sales and Service */}
                        {location["sales & service"] && location["sales & service"].length > 0 && (
                          <div className="hide-scrollbar mb-6">
                            {location["sales & service"].map((salesService, idx) => (
                              <div key={`${currentSlide}-${locationKey}-salesservice-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales & Service :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {salesService.address}<br />
                                  {Array.isArray(salesService.phone) ? (
                                    salesService.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {salesService.phone}
                                    </div>
                                  )}
                                  {Array.isArray(salesService.email) ? (
                                    salesService.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {salesService.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales & Service Location Map ${idx + 1}`}
                                    src={salesService.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Sales, Service & Parts distribution */}
                        {location["Sales, Service & Parts distribution"] && location["Sales, Service & Parts distribution"].length > 0 && (
                          <div className="hide-scrollbar mb-6">
                            {location["Sales, Service & Parts distribution"].map((salesDist, idx) => (
                              <div key={`${currentSlide}-${locationKey}-salesdist-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales, Service & Parts Distribution :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {salesDist.address}<br />
                                  {Array.isArray(salesDist.phone) ? (
                                    salesDist.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {salesDist.phone}
                                    </div>
                                  )}
                                  {Array.isArray(salesDist.email) ? (
                                    salesDist.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {salesDist.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales & Distribution Location Map ${idx + 1}`}
                                    src={salesDist.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Pre-Owned Cars */}
                        {location["Pre-Owned Cars"] && location["Pre-Owned Cars"].length > 0 && (
                          <div className="hide-scrollbar mb-6">
                            {location["Pre-Owned Cars"].map((preOwned, idx) => (
                              <div key={`${currentSlide}-${locationKey}-preowned-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Pre-Owned Cars :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {preOwned.address}<br />
                                  {Array.isArray(preOwned.phone) ? (
                                    preOwned.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {preOwned.phone}
                                    </div>
                                  )}
                                  {Array.isArray(preOwned.email) ? (
                                    preOwned.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {preOwned.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Pre-Owned Cars Map ${idx + 1}`}
                                    src={preOwned.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Service and Parts */}
                        {location["service and parts"] && (location["service and parts"]?.length ?? 0) > 0 && (
                          <div className="hide-scrollbar mb-6">
                            {location["service and parts"].map((serviceParts, idx) => (
                              <div key={`${currentSlide}-${locationKey}-serviceparts-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl mb-2">
                                  Service & Parts :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {serviceParts.address}<br />
                                  {Array.isArray(serviceParts.phone) ? (
                                    serviceParts.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {serviceParts.phone}
                                    </div>
                                  )}
                                  {Array.isArray(serviceParts.email) ? (
                                    serviceParts.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {serviceParts.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Service and Parts Map ${idx + 1}`}
                                    src={serviceParts.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Spares Warehouse */}
                        {location["spares warehouse"] && (location["spares warehouse"]?.length ?? 0) > 0 && (
                          <div className="hide-scrollbar mb-6">
                            {location["spares warehouse"].map((spares, idx) => (
                              <div key={`${currentSlide}-${locationKey}-spareswarehouse-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl mb-2">
                                  Spares Warehouse :
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium" style={{ whiteSpace: 'pre-line' }}>
                                  {spares.address}<br />
                                  {Array.isArray(spares.phone) ? (
                                    spares.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {spares.phone}
                                    </div>
                                  )}
                                  {Array.isArray(spares.email) ? (
                                    spares.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {spares.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe

                                    title={`Spares Warehouse Map ${idx + 1}`}
                                    src={spares.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </>
            )}
          </div>
          
        </div>
          
        {/* Text Learn More Link */}
       

        <BusinessSectors />

        {/* Logo section */}
          <div className="w-full mt-20">
        <VSTLogoAnimation />
      </div>

      </motion.div>
    </div>
  );
};

export default FranchiseSlider;
