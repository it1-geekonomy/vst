import { StaticImageData } from 'next/image';
import React from 'react';

// Import images
import porsche from "@/app/public/faranchies/newcarpics/porsche4.png";
import benzs from "@/app/public/faranchies/newcarpics/benz1.png";
import jaguar from "@/app/public/faranchies/newcarpics/ja-la.png";
import landrover from "@/app/public/faranchies/newcarpics/landrover3.png";
import maserati from "@/app/public/faranchies/newcarpics/maserati5.png";
//import honda from "@/app/public/faranchies/newcarpics/honda12.png";
import tata from "@/app/public/faranchies/newcarpics/tata8.png";
import tataupdate from "@/app/public/faranchies/newcarpics/tataupdate.jpg";
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
//import HondaLogo from "@/app/public/faranchies/HondaLogo";
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
  brand: "mercedes" | "jlr" | "porsche" | "maserati" |/*"honda"*/ "kia" | "tata" | "volkswagen" | "BYD" | "ducati" | "mahindra" | "bmw" | "mini";
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
    description: "VST Titanium began bringing the legacy of Mercedes-Benz to Chennai and North Tamil Nadu in 2015, with the Mount Road showroom - an iconic heritage property over 109 years old, standing as a landmark of timeless elegance. This historic setting perfectly mirrors the brand's legacy of luxury and engineering excellence. Expanding its footprint, VST Titanium opened a second showroom on OMR, offering a contemporary and dynamic environment to experience the full range of Mercedes-Benz vehicles. A state-of-the-art service centre nearby, staffed by MB-trained technicians and equipped with advanced diagnostic tools, ensures expert maintenance, certified body repairs, and round-the-clock support. Dedicated to delivering distinction at every touchpoint, VST Titanium continues to raise the bar in luxury automotive ownership.",
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
            phone: "+91 90030 26789,+91 90036 93555,\n+91 96000 67911",
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
      },
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
            address: "Marksquare, 61 - St Mark's Rd, \nShanthala Nagar, Bengaluru - 560 001",
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
      },
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
    description: "In 2015, VST Ducati introduced Karnataka to the world of Ducati, offering more than just motorcycles, but an unmatched riding lifestyle. With showrooms and service centres in Bangalore, the brand blends Italian heritage with strong local expertise and care. VST Ducati showcases the complete Ducati range along with premium riding gear, accessories, and merchandise. A dedicated sales team ensures customers find the perfect bike and safety gear for an exceptional riding experience. Our service centres, equipped with service bays and advanced diagnostic tools, are staffed by trained Ducati technicians using only genuine parts to maintain peak performance. At VST Ducati, buying a bike is just the beginning, we're committed to delivering exceptional care throughout your ownership journey.",
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
      //  Chennai: {
      //   "sales & service": [
      //     {
      //       address: "#148, Rajiv Gandhi Salai, Okkiyam, \nThoraipakkam, Chennai, Tamil Nadu \n600096",
      //       phone: "+91 99405 06040",
      //       email: "info@vstducati.in",
      //       map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.378970077429!2d80.2397104!3d12.9475848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526743a784e02f%3A0xf7842622171a72df!2sDucati%20Chennai!5e0!3m2!1sen!2sin!4v1747842004465!5m2!1sen!2sin" ,
      //     }
      //   ],
      
      // },
    }
  },
  {
    id: 6,
    backgroundImage: kia,
    brand: "kia",
    bgColor: {
      from: "#FDC756",
      to: "rgba(253, 199, 86, 0.4)",
    },
    LogoComponent: KiaIcon,
    header: "VST Central - KIA",
    description: "VST Central has been driving KIA's journey in South India since 2019, bringing innovative and dependable vehicles to customers across Bangalore and North Tamil Nadu. With showrooms and service centres in Bangalore, Chennai, Salem, Vellore, and Hosur, it ensures easy access to worldclass automotive experiences. Built on a foundation of reliability and customer-first service, VST Central continues to grow, making every journey smoother with exceptional care and support at every step.",
    learnMoreLink: "https://vstcentral-kia.in/",

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
      " Tamil Nadu": {
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
            phone: "+91 90872 11113 , +91 89255 03894",
            email: "servicemanagerch@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124378.72962695648!2d80.0696671!3d13.0461534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526720103596eb%3A0x89ee02c1c5997cb0!2sKia%20Car%20Service%20-%20VST%20Central%2C%20Chennai!5e0!3m2!1sen!2sin!4v1747234107357!5m2!1sen!2sin"
          },
        ],
        "sales & service": [
          
          {
            address: "#250-2, Meyyanur Road, Ashokapuram \nPost, Salem - 636 004.",
            phone: "+91 81488 11113 , +91 93848 77744, \n+91 93840 84430",
            email: "servicemanagerslm@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31258.594118025143!2d78.0997807!3d11.6714159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf06a1e618371%3A0xd149fb0b495752ca!2sKia%20Car%20Showroom%20-%20Vst%20Kia%2C%20Meyyanur%20Main%20Road!5e0!3m2!1sen!2sin!4v1747234237365!5m2!1sen!2sin"
          },
          {
            address: "#177, Kodipali, Thoppali Agrahara Village, \nHosur - 635 109.",
            phone: "+91 93449 04681 , +91 78458 05068, \n+91 78458 05069",
            email: "salesmanagerhsr@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.934187484988!2d77.8746835!3d12.717716399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae776f63338a5b%3A0xaf507e08bea31c5!2sKia%20Car%20Showroom%20-%20Vst%20Central%2C%20Kumudepalli!5e0!3m2!1sen!2sin!4v1747234328566!5m2!1sen!2sin"
          },
          {
            address: "No. 43, Katpadi Road, Gandhinagar, \nVellore - 632 006.",
            phone: "+91 90872 11113 , +91 93840 96077",
            email: ["servicemanagervlr@vstcentral-kia.in", "salesmanagervlr@vstcentral-kia.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.318270535633!2d79.1367769!3d12.9514746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad393de10f1b39%3A0xee4f088f339b7d95!2sVST%20CENTRAL%20-%20KIA%20SHOWROOM%20%26%20WORKSHOP!5e0!3m2!1sen!2sin!4v1747234422327!5m2!1sen!2sin"
          }
        ],
        "Pre-Owned Cars": [
          {
            address: "#548/6, Kattukottai, Nattamangalam, \nSalem - 636 010.",
            phone: "+91 93848 77744",
            email: "salesmanagerslm@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31261.099198102755!2d78.1153607!3d11.6491666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef3400b770e9%3A0xaa5d6b61a93abfdb!2sVST%20CENTRAL%20-%20KIA%20Kondalampatti%2C%20Salem!5e0!3m2!1sen!2sin!4v1747843601693!5m2!1sen!2sin" 
          },
          {
            address: "184 Anna Salai, India Garage building Chennai, 600 006",
            phone: "+91 9500722951",
            email: " pocmanager.chn@vstcentral-kia.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6426892964228!2d80.25879789999999!3d13.058401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e3df4cc7d7%3A0x821c429e677033ea!2sKIA%20Showroom%20Chennai%20-%20VST%20Central%20CPO!5e0!3m2!1sen!2sin!4v1751965936879!5m2!1sen!2sin" 
          },
        ]
      }
    }
  },
  {
    id: 7,
    backgroundImage: tataupdate,
    brand: "tata",
    bgColor: {
      from: "#D6744E",
      to: "rgba(214, 116, 78, 0.4)",
    },
    LogoComponent: TataIcon,
    header: "VST Motors -TATA",
    description: "VST Motors, one of the group's oldest and most successful  commercial  vehicles franchise partnerships, has represented Tata Motors in Tamil Nadu since 1954, becoming an integral part of the region's automotive landscape. The journey began in 1942 when V.S. Thiruvengadasamy Mudaliar acquired the family's first showroom on Mount Road, Chennai, now a landmark that marked the group's expansion into Tamil Nadu.  With a strong presence across key locations including Chennai, Cuddalore, Salem, Hosur, Trichy, and Vellore, VST Motors is committed to delivering reliable vehicles and exceptional after-sales service. Driven by a legacy of quality, trust, and customer focus, VST Motors continues to build lasting relationships with its customers, reinforcing its reputation as a dependable and customer-centric brand across the state.",
    learnMoreLink: "https://vstmotors.com/",
    locations: {
      Bangalore: {
        sales: [
          
           {
            address: "#2D, Dindigul Road, Trichy - 620 001.",
            phone: "+91 98423 19820 , +91 98424 10847",
            email: " trycvdsales@vstmotors.com",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2206779968324!2d78.6797484!3d10.794403299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf515569addf1%3A0xdcd00c0fc03eabe8!2sTata%20Motors%20Commercial%20Vehicle%20Dealer%20-%20V%20S%20T%20Motors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747890696548!5m2!1sen!2sin"
          },
        ],
        "sales & service": [
          {
            address: "By-Pass Road, Poonamallee, \nChennai - 600 056.",
            phone: [" +91 98403 76339 , +91 73974 92943 " ,"+91 89259 95593 , +91 98401 54057"],
            email: "  cvd.pnml@vstmotors.com",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.663392277386!2d80.09531729999999!3d13.0570851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bad1a24d0f1%3A0xba63e50f543b52c9!2sVST%20MOTORS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1751004583770!5m2!1sen!2sin"
          },
          {
            address: "#43, Katpadi Road, Gandhinagar, \nVellore - 632 006.",
            phone: [" +91 98423 15740 "," +91 98423 45530, +91 98424 10825"],
            email: " vlr@vstmotors.com",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.316786294946!2d79.1369261!3d12.9515697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad4761940a1a59%3A0xf7813b55f7eaa1a2!2sTata%20Motors%20Commercial%20Vehicle%20Dealer%20-%20V%20S%20T%20Motors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747890843996!5m2!1sen!2sin" 
          },
            {
            address: "#10/3, Anai Goudampatti, Opp to Govt. \nEngineering College, Omalur Taluk,\nSalem - 636 011.",
            phone: [" +91 80560 90333","+91 94432 39806, +91 73581 09129"],
            email: ["slm@vstmotors.com", "wm.slm@vstmotors.com"],
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1953.3741033567155!2d78.0846876!3d11.7122379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfb00691d7ad9%3A0x843fd77a9ee4e7de!2sVST%20MOTORS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1747890920571!5m2!1sen!2sin" 
          },
            {
            address: "#42, Mambalapattu Road, \nVillupuram - 605 602.",
            phone: " +91 98424 10813 , +91 81487 11014",
            email: [" wm.vpm@vstmotors.com","acetl.vpm@vstmotors.com"],
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3903.5280666491453!2d79.4756295!3d11.9378961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a535700220f15e3%3A0xea410901d283e890!2sTATA%20MOTORS%20PVT%20LTD%20%26VST!5e0!3m2!1sen!2sin!4v1747891034524!5m2!1sen!2sin" 
          },
          {
            address:"Nellikuppam Main Road, Kondur Post, \nCuddalore - 607 006.",
            phone: [" +91 98424 10813 , +91 99943 67350","+91 96007 99947 , +91 99943 67310"],
            email: [" comm.cud@vstmotors.com","cudserv@vstmotors.com"],
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62496.125965978885!2d79.6792734!3d11.7644961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a2743110ef23%3A0x7b9ed2ba281e57a1!2sTata%20Motors%20Limited!5e0!3m2!1sen!2sin!4v1747891093784!5m2!1sen!2sin"
          },
          {
            address:"#524/1, 525/1A, O. Karapalli Village, \nOnnalvadi Post, Hosur - 635 109.",
            phone: [" +91 94437 47392 , +91 73581 09129","+91 81488 54889 , +91 98424 10825"],
            email: [" hosur@vstmotors.com","wm.hosur@vstmotors.com"],
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.144510501195!2d77.8461167!3d12.7039895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70ba3aafc4c1%3A0x8dd6df1a69e8bf7d!2sTata%20Motors%20Commercial%20Vehicle%20Dealer%20-%20V%20S%20T%20Motors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747891729704!5m2!1sen!2sin" 
          }
        ],
        "Spares & Distribution" : [
          {
            address: "#235/1, Bypass Road, Poonamallee,\n Chennai - 600 056.",
            phone: "+91 89255 20999 , +91 73388 59276",
            email: "autoparts.pme@vstmotors.com",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124372.9908796914!2d79.9641057!3d13.0575572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bf72c7cf71d%3A0x775c66b74dcbbb9f!2sVST%20MOTORS%20P%20LTD%20PARTS%20DIVISION!5e0!3m2!1sen!2sin!4v1747891797570!5m2!1sen!2sin" 
          },
          {
            address: "Nellikuppam Main Road, Kondur Post,\nCuddalore - 607 006.",
            phone: "+91 90039 32034 , +91 73584 44125",
            email: "autopartssm.cud@vstmotors.com",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62496.125965978885!2d79.6792734!3d11.7644961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a2743110ef23%3A0x7b9ed2ba281e57a1!2sTata%20Motors%20Limited!5e0!3m2!1sen!2sin!4v1747891861045!5m2!1sen!2sin" 
          },
           {
            address: "#3/1, New By-pass Road, Chennai-\nBengaluru Highway, Shenbakkam, \nVellore - 632 008.",
            phone: "+91 99406 00442 , +91 73584 44125",
            email: "autopartssm.vlr@vstmotors.com",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62496.125965978885!2d79.6792734!3d11.7644961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a2743110ef23%3A0x7b9ed2ba281e57a1!2sTata%20Motors%20Limited!5e0!3m2!1sen!2sin!4v1747891932644!5m2!1sen!2sin" 
          },
           {
            address: "#A18/1, Alagesan Nagar, Chengalpet - 603 001.",
            phone:  ["+91 73050 26539","+91 73058 88646"],
            email: "autopartssm.cgl@vstmotors.com ",
            map:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3892.5212143571725!2d79.97430037507146!3d12.67936708760981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQwJzQ1LjciTiA3OcKwNTgnMzYuOCJF!5e0!3m2!1sen!2sin!4v1750851830026!5m2!1sen!2sin"  
           }
        ]
      }
    }
  },
  {
    id: 8,
    backgroundImage: mahindra,
    brand: "mahindra",
    bgColor: {
      from: "#05F1F2",
      to: "rgba(5, 241, 242, 0.4)",
    },
    LogoComponent: MahindraIcon,
    header: "India Garage - Mahindra & Mahindra",
    description: "India Garage, a well-established franchise partner of Mahindra & Mahindra, has been a trusted name in Karnataka since 1949, proudly serving both urban and rural communities. With showrooms and workshops in key locations including Bengaluru, Mysuru, and across southern Karnataka, India Garage offers an extensive range of robust SUVs and commercial vehicles, backed by a dependable service network and a customer-first approach. Driven by a commitment to excellence, reliability, and performance, India Garage remains the preferred destination for Mahindra customers across the region, continuing to build lasting trust and satisfaction.",
    learnMoreLink: "https://www.india-garage.in/",
    locations: {
      Bengaluru: {
        sales: [
          {
            address: "Head Office, #1, VST Vistas, Palace \nCross Rd, Chakravarthy Layout, \nJayamahal, Bengaluru - 560 020.",
            phone: "+91 88844 98957",
            email: ["dem@india-garage.in"],
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996461.3198621258!2d76.5380582!3d12.6855276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163883f74f7d%3A0x4385e2cd7037dce4!2sMahindra%20India%20Garage%20-%20Palace%20Cross%20Road!5e0!3m2!1sen!2sin!4v1747895221318!5m2!1sen!2sin"           
          },
          {
            address: "#110/110/10, Lalbagh Main Road, Near \n Urvashi Theatre,Bengaluru - 560 043.",
            phone: "+91 80502 90512",
            email: ["sm.lalbagh@india-garage.in", "karthiks@india-garage.in"],
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996461.3198621258!2d76.5380582!3d12.6855276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e77446713f%3A0x859a28fb0fd3f809!2sMahindra%20India%20Garage%20-%20Lal%20Bagh%20Road!5e0!3m2!1sen!2sin!4v1747895356864!5m2!1sen!2sin" 
          },
          {
            address: "#121/32, Danojipalya village, Tumkur \nRoad NH-4, Nelamangala, Bengaluru - \n562 123.",
            phone: "+91 99001 59602 ",
            email: ["prosper.mdhalli@india-garage.in"],
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124357.36647001428!2d77.2641574!3d13.0885559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae25409b550d2b%3A0xe2e55c1338f935d1!2sMahindra%20India%20Garage%20-%20Commercial%20Showroom%20Nelamangala!5e0!3m2!1sen!2sin!4v1747895413474!5m2!1sen!2sin" 
          },
           {
            address: " CM Layout, BB Road, Old NH-7, \nChikkaballapur - 562 101.",
            phone: "+91 74115 67633 ",
            email: "sales.ckb@india-garage.in",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.921836472896!2d77.72855919999999!3d13.4171652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e59836e5f33f%3A0xa6cd6ee6f458d36b!2sMahindra%20Showroom%20-%20India%20Garage%20Chikkaballapur!5e0!3m2!1sen!2sin!4v1747895776906!5m2!1sen!2sin" 
          },
          {
            address: " BB Road, Opp. To Reliance Petrol Bunk, \nChikkaballapur - 560 101.",
            phone: "+91 88844 98958 ",
            email: "prosper.cbkr@india-garage.in",
            map :"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15522.874073908808!2d77.7208083!3d13.4297424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e5593eb46f03%3A0x9ee339a0dd9e6ee1!2sMahindra%20India%20Garage!5e0!3m2!1sen!2sin!4v1747895856529!5m2!1sen!2sin" 
          },
          {
            address: " #344/60, Chikkagollarahatti, \nNear Embassy School, Magadi Main Road,\nBengaluru - 560 091.",
            phone: "+91 88844 98958",
            email: "sales.mgd@india-garage.in",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62203.047345636965!2d77.3926228!3d12.9916394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3bc02d8ac7a7%3A0x67a3e32fa9009175!2sMahindra%20India%20Garage%20-%20Commercial%2C%20Magadi%20Road!5e0!3m2!1sen!2sin!4v1747895927992!5m2!1sen!2sin"
          },
          {
            address: " Municipal #20/2, P Kalinga Rao Road, \nMission Road, Bengaluru - 560 027.",
            phone: "+91 88844 98958",
            email: "sales.mgd@india-garage.in",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d496732.41440844996!2d77.401443!3d13.4295279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154a34bb2109%3A0x4390fad42917eae2!2sMahindra%20India%20Garage%20-%20Commercial%20Mission%20Road!5e0!3m2!1sen!2sin!4v1747895986496!5m2!1sen!2sin" 
          },
            {
            address: "#610/9, Ground Floor, Laggere, Rajagopalnagar, 1st Main Road, Opp.  Peenya 2nd Stage Bus Stand, Bangalore - 560 058.",
            phone: "+91 88844 98958",
            email: "prosper.pny@india-garage.in",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.38306928848!2d77.5046024!3d13.0112605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cf9a936cbc3%3A0x71d718e2c7baba6b!2sMahindra%20India%20Garage%20-%20Peenya%20Commercial%20Showroom!5e0!3m2!1sen!2sin!4v1747896043710!5m2!1sen!2sin" 
          },
          {
            address: " #13/7, Thirumalashettyhalli Cross, \nAnugondanahalli, Bengaluru - 560 117.",
            phone: "+91 88844 98958",
            email: " salescv.wf@india-garage.in",
            map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.64689946292!2d77.7825065!3d12.9831414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fb453bd4d9f%3A0x612685a21d459c3e!2sMahindra%20India%20Garage%20-%20Whitefield%20Commercial%20Showroom%20(Thirumalashettihalli%20Cross)!5e0!3m2!1sen!2sin!4v1747896109759!5m2!1sen!2sin" 
          },

        ],
        service: [
          {
            address: "#207/208, 11th Main, 3rd Phase, Peenya \nIndustrial Area, Bengaluru - 560 058.",
            phone: "+91 96069 15740",
            email: ["smpeenya@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.6323219085114!2d77.5210083!3d13.018812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1b47f37b49%3A0xb59d56802a43eb4d!2sMahindra%20India%20Garage%20%E2%80%93%20Peenya%20Workshop!5e0!3m2!1sen!2sin!4v1747895747654!5m2!1sen!2sin"
          },

          {
            address: "#53/10, Madanayakanahalli Village, \nDasanapura Hobli, Bangalore - 562 162.",
            phone: "+91 98423 19820 , +91 98424 10847",
            email: [" sm.mnhalli@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7773.1723952034945!2d77.4508649!3d13.061991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae24a8f3ae6a4b%3A0x5714d99795576775!2sMahindra%20India%20Garage%20-%20Madanayakanahalli%20Workshop!5e0!3m2!1sen!2sin!4v1747895817487!5m2!1sen!2sin"  
          },
           {
            address: "Address: #11, 1st Main Road \nSadaramanagala, Industrial Area, White \nField Road, Near ITPL Bus Stop, \nBengaluru - 560 067.",
            phone: "+91 97855 13333",
            email: ["smitpl@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.626972808544!2d77.731718!3d12.995694199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e1e8760a745%3A0x557c4e084a2bb5d9!2sMahindra%20India%20Garage!5e0!3m2!1sen!2sin!4v1747895898763!5m2!1sen!2sin" 
          }
        ],
        "sales & service": [
          {
            address: "1st Phase, Plot #2E4, Whitefield Main \nRoad, Behind Decathlon, Mahadevapura, \nBengaluru - 560 048.",
            phone: "+91 97855 51333 ",
            email: [" smvrwf@india-garage.in","chandrasekharnm@india-garage.in"," sales.wf@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.252573845026!2d77.69879!3d12.995738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1163598ae1a3%3A0x62bd833b811078c2!2sMahindra%20India%20Garage%20-%20Whitefield%20%7C%20Showroom%2C%20Service%20center!5e0!3m2!1sen!2sin!4v1747895959839!5m2!1sen!2sin" 
          }
        ]
      },
      Mysore: {
        sales: [
          {
            address: "#80/1, 1st Block, Bychanahalli, \nMangalore Mysore Road,\n Kushalnagar, Karnataka - 571 234.",
            phone: "+91 88844 98958",
            email: "salescv.wf@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.945086531723!2d75.9493138!3d12.453378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba509cd1b9f725f%3A0x7ae5120debe37d14!2sMAHINDRA%20INDIA%20GARAGE-MYSORE!5e0!3m2!1sen!2sin!4v1747899225545!5m2!1sen!2sin"
          },
          {
            address: "#1608 Adhichunchanagiri Road, \nKuvempunagar, P and T Block,\n Chamaraja Mohalla, Mysuru - 570 023.",
            phone: "+91 88844 98959",
            email: "sales.kuvempunagar@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3451145362455!2d76.6313254!3d12.2925299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b574f907843%3A0x6471774e6fa1206a!2sMahindra%20Indian%20Garage!5e0!3m2!1sen!2sin!4v1747899405373!5m2!1sen!2sin"
          },
          {
            address: "Mahindra Showroom, India Garage, \nOpp, Eid Ground, Maddur, Karnataka - \n571 428.",
            phone: "+91 88844 98959",
            email: "sales.maddur@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31158.41933595251!2d76.8878506!3d12.5292446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa12923faac49%3A0x3b4688d0d189eda4!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899553266!5m2!1sen!2sin"
          },
          {
            address: "#C-18, Madikeri Bypass Road, Hunsur, \nKarnataka - 571105.",
            phone: "+91 88844 98959",
            email: "sales.hunsur@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1152686131504!2d76.3029991!3d12.308023599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ab35e5923543%3A0x93eca4c127398a40!2sMahindra%20India%20Garage!5e0!3m2!1sen!2sin!4v1747899617805!5m2!1sen!2sin"
          },
          {
            address: "No.1-4-35B, Two Shutter Ground \nFloor, Jayanagara, K R Pete, Mandya - \n571 426.",
            phone: "+91 88844 98959",
            email: "sales.krpete@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31157.027815071415!2d76.9194856!3d12.5407536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa12923faac49%3A0x3b4688d0d189eda4!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899692604!5m2!1sen!2sin"
          }
        ],
         "sales & service": [
         
         {
            address: "201/ 1&2 , Vijayanagar 4th Stage, Hinkal, India Garage Showroom - Hinkal , Mysore, Karnataka - 570017",
            phone: "+91 88844 98959",
            email: "sales.mysore@india-garage.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3897.8701066935896!2d76.6107134!3d12.3245286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7af1a8477065%3A0xba976c8cd1a206a1!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899946356!5m2!1sen!2sin"
          },
           {
            address: "Mysore Road, Near LIC Opp Simha \nTheatre, Chamrajnagar - 571 313.",
            phone: "+91 88844 98959",
            email: ["ig.chnagar@india-garage.in", "service.chnagar@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.63656126204!2d76.933995!3d11.9303616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fe93a3dc03%3A0x2b3ece5b81cda608!2sMahindra%20India%20Garage%20Mysore%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747899794763!5m2!1sen!2sin"
          },
          
        ],
        service: [
          {
            address: "#427/1A, Hebbal Ind. Area, Metagalli Post, \nMysuru - 570 016.",
            phone: "+91 91485 89147",
            email: ["smhebbal@india-garage.in", "bodyshopmanager@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.265546858863!2d76.6155936!3d12.3651366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a3d00d7608b%3A0x260b9f18e163c5a8!2sMahindra%20India%20Garage%20%E2%80%93Workshop!5e0!3m2!1sen!2sin!4v1747899872802!5m2!1sen!2sin"
          },
          
          {
            address: "#99/145 MC Road ,Belur Gram Panchyath ,Near Acetate Town, Mandya - 571 404.",
            phone: "+91 88844 98959",
            email: ["igmandya@india-garage.in", "mandyaservice@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62313.99311644604!2d76.8699647!3d12.541012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa12923faac49%3A0x3b4688d0d189eda4!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747900006805!5m2!1sen!2sin"
          },
           {
            address: "#292/10, Block #23, Sampige Katte Road, \nMadikeri - 571 201.",
            phone: "+91 88844 98959",
            email: ["sales.madikeri@india-garage.in", "service.madikeri@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.2574093870294!2d75.75174919999999!3d12.432562299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5aa9e27787899%3A0x9014a3a231e9653d!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747900081135!5m2!1sen!2sin"
          },
          {
            address: "State Highway 90, Ponnampet, Road \nJodubetti, Gonikoppal - 571 213.",
            phone: "+91 88844 98959",
            email: ["sales.gonikoppal@india- garage.in", "service.gonikoppal@india-garage.in"],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.360701638476!2d75.939742!3d12.1558282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ba3786b87fad%3A0xc4dcb9f89be834c9!2sMahindra%20India%20Garage%20-%20SUV%20%26%20Commercial%20Vehicle%20Showroom!5e0!3m2!1sen!2sin!4v1747900133812!5m2!1sen!2sin"
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
      id: 10,
    backgroundImage: byd,
    brand: "BYD",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: BydLogo,
    header: "VST BYD",
    description: "In 2023, VST Group extended its automotive legacy by partnering with BYD, introducing a new era of electric mobility to Karnataka. With showrooms located on Cunningham Road and Outer Ring Road (ORR), VST BYD offers access to BYD's cutting-edge electric vehicles, combining innovation with everyday practicality. As the first Chinese automotive brand in the VST portfolio, BYD represents a bold step toward the future of sustainable transportation. The VST Group brings its deep-rooted expertise in automotive retail and service to this new venture. With a strong focus on green mobility and future-ready technology, VST BYD is poised to redefine the electric vehicle experience in the region, backed by trusted guidance and dependable after-sales support.",
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
            phone: "+91 96060 74777",
            email: "info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.2865345441438!2d77.6334927!3d12.8983231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1574556b472b%3A0x40ce1c0dc073c801!2sVST%20BYD%20Showroom%20-%20Hosur%20Road!5e0!3m2!1sen!2sin!4v1747227978547!5m2!1sen!2sin"
          },
        ],
        service: [
            {
            address: "#38/5A Hyland Industrial Estate, 11th \nKM, Hosur Road, \nBommanahalli,Bengaluru - 560 068.",
            phone: "+91 96060 74777",
            email: "info@vstbyd.in",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.149986869151!2d77.6354502!3d12.8980755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153776c653cf%3A0xe7341df12627565a!2sVST%20BYD%20-%20Service!5e0!3m2!1sen!2sin!4v1747228024967!5m2!1sen!2sin"
          }
        ]
      },
    }
  },
// {
//     id: 11,
//     backgroundImage: honda,
//     brand: "honda",
//     bgColor: {
//       from: "#E9354C",
//       to: "rgba(233, 53, 76, 0.4)",
//     },
//     LogoComponent: HondaLogo,
//     header: "City Honda",
//     description: "Since 2001, City Honda has been bringing the trusted performance of Honda two-wheelers to customers across Karnataka. As part of the VST Group, City Honda caters to a dynamic and growing community of riders, offering a seamless blend of reliability, efficiency, and service excellence. With two centrally located showrooms in Bangalore and workshops across the city and Chikmagalur, City Honda delivers a complete 4S experience - Sales, Service, Spares, and Safety Riding under one roof. Backed by a knowledgeable sales team and expert service technicians, the brand ensures every customer enjoys a smooth and dependable ownership journey. Rooted in trust and powered by performance, City Honda continues to be a preferred destination for two-wheeler enthusiasts.",
//     learnMoreLink: "https://cityhonda.in/",
//     locations: {
//       Bangalore: {
//         sales: [
//           {
//             address: "M/S. City Honda, #6, St. John's Road, \nUlsoor, Bengaluru - 560 042.",
//             phone: ["+91 8025139199, +91 9480812350"],
//             email: "sales.ho@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7771161651913!2d77.6159692!3d12.9860895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168c36ee3133%3A0xe180f725b7e36d72!2sCity%20Honda%20Sales%20St.%20Johns%20Road%20India%20Garage%20Agencies!5e0!3m2!1sen!2sin!4v1711542825613!5m2!1sen!2sin"
//           },
//           {
//             address: "#202,7th Main, HRBR Layout, Kalyan \nNagar, Bengaluru - 560 043.",
//             phone: "+91 8025422810,+91 8025422811 \n+91 9845941305",
//             email: "sales.hrbr@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3094986550345!2d77.6431027!3d13.015952299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1728131c0e23%3A0xa06978a43d8ffa58!2sCity%20Honda%20Sales%20HRBR%20Layout!5e0!3m2!1sen!2sin!4v1747228274606!5m2!1sen!2sin"
//           },
//           {
//             address: "#143, Lalbagh Road, Near Subbaiah \nCircle, Opp, GST Seva Kendra, \nBengaluru - 560 027.",
//             phone: "+91 8043333330, +91 8884434200",
//             email: "sales.lbg@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.164150449718!2d77.5865653!3d12.9613459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156978155c3f%3A0xead9a19c3f1e2497!2sCity%20Honda%20Sales%20Lalbagh%20Road!5e0!3m2!1sen!2sin!4v1747228307684!5m2!1sen!2sin"
//           }
//         ],
//         "service and parts": [
//           {
//             address: "#113, 1sr Main Road, Lingarajapuram, \nBengaluru - 560 084.",
//             phone: ["+91 80 2549 6561, +91 94808 12384"],
//             email: "service.lrp@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.4260254411024!2d77.6207003!3d13.0085203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e7556e6ef3%3A0xf689f35e9637d316!2sCity%20Honda%20Service%20Lingarajapuram!5e0!3m2!1sen!2sin!4v1747228353651!5m2!1sen!2sin"
//           },
//           {
//             address: "Head Workshop, No.6, St. John's Road, \nUlsoor,  Bengaluru - 560 042.",
//             phone: ["+91 80 2513 9199, +91 94498 67080"],
//             email: "service.ho@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7771161651913!2d77.6160922!3d12.986102700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1750ec0c4ff3%3A0xf64250c532b819ee!2sCity%20Honda%20Service%20St%20Johns%20Road!5e0!3m2!1sen!2sin!4v1747228507673!5m2!1sen!2sin"
//           },
//           {
//             address: "No. 24, 25, 30 and 31, 40 Ft Road, PNS \nLayout, Subbannapalya, Kalyan Nagar, \nBengalur - 560 043.",
//             phone: ["+91 80 2542 2813, +91 76193 95014"],
//             email: "service.hrbr@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.91462263749514!2d77.6412537!3d13.0154752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1727eef1d2ed%3A0xe882785e66ab71e1!2sCity%20Honda%20Service%20HRBR%20Layout%20-Kalyan%20Nagar!5e0!3m2!1sen!2sin!4v1747228536688!5m2!1sen!2sin"
//           },
//           {
//             address: "#143, Lalbagh Road, Near Subbaiah \nCircle, Opp, GST Seva Kendra, \nBengaluru - 560 027.",
//             phone: ["+91 80 4333 3330, +91 94808 12380"],
//             email: "service.ibg@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.161242209912!2d77.58864729999999!3d12.961532099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d9607610e3%3A0x379b9710e881c087!2sCITY%20HONDA%20SERVICE%20LALBAGH%20ROAD!5e0!3m2!1sen!2sin!4v1747228564023!5m2!1sen!2sin"
//           },
//           {
//             address: "#40/2, Ramamurthynagar Main Road, \nRamamurthy Nagar, Bengaluru - 560 016.",
//             phone: "+91 80 4094 4950, +91 94808 12390" ,
//             email: "service.rmn@cityhonda.in",
//             map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.357387289643!2d77.66433099999999!3d13.012898499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112887e697bf%3A0x46b5e5388f798533!2sCity%20Honda%20Service%20Ramamurthy%20Nagar!5e0!3m2!1sen!2sin!4v1747228592460!5m2!1sen!2sin"
//           }
//         ],
//         "spares warehouse": [
//           {
//             address: "#113, 1st Main Road, Lingarajpuram, \nBengaluru - 560 084.",
//             phone: "+91 80 2549 6561, +91 94483 97794",
//             email: ["warehouse@cityhonda.in"],
//             map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.4260254411024!2d77.6207003!3d13.0085203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e7556e6ef3%3A0xf689f35e9637d316!2sCity%20Honda%20Service%20Lingarajapuram!5e0!3m2!1sen!2sin!4v1747278984074!5m2!1sen!2sin"
//           },
//         ]
//       },
//     }
//   },
];