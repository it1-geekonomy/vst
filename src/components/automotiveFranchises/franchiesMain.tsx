"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
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

// import car4 from "@/app/public/faranchies/carpic/4car.png";
// import car5 from "@/app/public/faranchies/carpic/5car.png";
// import car6 from "@/app/public/faranchies/carpic/6car.png";
// import car7 from "@/app/public/faranchies/carpic/7car.png";
// import bike from "@/app/public/faranchies/carpic/bike.png";
// import hondabike from "@/app/public/faranchies/carpic/Honda-bike.png";
// import volkswagen from "@/app/public/faranchies/carpic/volkswagen-car.png";
// import byd from "@/app/public/faranchies/carpic/byd-car.png";
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

interface SlideData {
  id: number;
  backgroundImage: StaticImageData;
  brand: "mercedes" | "jaguar" | "landrover" | "porsche" | "maserati" | "honda" | "kia" | "tata" | "volkswagen" | "BYD";
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
      sales: Array<{
        address: string;
        phone: string;
        email: string;
        map: string;
      }>;
      service?: Array<{
        address: string;
        phone: string;
        email: string;
        map: string;
      }>;
    };
  };
}

const slides: SlideData[] = [
  {
    id: 1,
    backgroundImage: porsche,
    brand: "porsche",
    bgColor: {
      from: "#780E26",
      to: "rgba(120, 14, 38, 0.4)",
    },
    LogoComponent: PorscheIcon,
    header: "VST Supercars - Porsche",
    description:
      "Porsche Centre Bengaluru, under VST Supercars, has been bringing world-class performance and luxury to Karnataka since 2022. Located in the city's Central Business District, the showroom presents the complete Porsche lineup in a premium urban setting, while a dedicated 3S facility in Whitefield offers expert service, advanced diagnostics, and a certified body repair centre.With a strong presence across key locations, Porsche Centre Bengaluru ensures easy access and an exceptional ownership experience. As part of VST Group's continued expansion in the luxury automotive space, it reflects the group's enduring legacy and passion for excellence.",
    learnMoreLink: "https://www.porsche.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Supercars Private Limited #22, Sankey Road, Opp, BDA Office Bengaluru  560051. ",
            phone: "+91 63641 02911",
            email: "info@porsche-bengaluru.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "#2E3, Dyavasandra 1st Phase, Whitefield Road, Mahadevapura Post, Bengaluru 560 048",
            phone: "6361 02911",
            email: "info@porsche-bengaluru.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
        ]
      },
      
    }
  },

  {
    id: 2,
    backgroundImage: benzs,
    brand: "mercedes",
    bgColor: {
      from: "#B897FF",
      to: "#5A6292"
    },
    LogoComponent: MercedesIcon,
    header: "VST Titanium - Mercedes Benz ",
    description: "VST Titanium began bringing the legacy of Mercedes-Benz to Chennai and North Tamil Nadu in 2015,with the Mount Road showroom - an iconic heritage property over 105 years old, standing as a landmark of timeless elegance. This historic setting perfectly mirrors the brand's legacy of luxury and engineering excellence. Expanding its footprint, VST Titanium opened a second showroom on OMR, offering a contemporary and dynamic environment to experience the full range of Mercedes-Benz vehicles. A state-of-the-art service centre nearby, staffed by MB-trained technicians and equipped with advanced diagnostic tools, ensures expert maintenance, certified body repairs, and round-the-clock support. Dedicated to delivering distinction at every touchpoint, VST Titanium continues to raise the bar inluxury automotive ownership.",

    learnMoreLink: "https://www.mercedes-benz.com",
    
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
    description: "VST Grandeur has been representing Jaguar Land Rover in Tamil Nadu since 2011, offering the perfect blend of British luxury and rugged capability. With showrooms and service facilities in Chennai and Coimbatore, customers enjoy a seamless experience from purchase to after-sales care, crafted with precision and delivered with pride. One location operates as a comprehensive 3S facility, integrating Sales, Service, and Spare Parts, while the other focuses solely on sales. Whether it's highend SUVs or elegant sedans, VST Grandeur ensures a premium ownership experience, supported byexpert after-sales care and personalised service.",

    learnMoreLink: "https://www.landrover.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
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
    header:"VST Avventura - Maserati",

    description: "With its South India debut in 2024 through VST Avventura, VST Maserati has quickly emerged as a symbol of refined power and bespoke service. Bringing Italian craftsmanship and cutting-edge performance to the region, the brand redefines luxury through its flagship showroom in Bangalore's Central Business District (CBD), complemented by a dedicated service facility in Whitefield. Showcasing the complete Maserati range—from high-performance sedans to iconic SUVs—VST Maserati offers customers a truly immersive experience marked by elegance and precision. Wit expansion plans underway across South India, it is poised to enhance accessibility while delivering personalised service rooted in a legacy of excellence. The addition of Maserati to the VST Group's premium portfolio reinforces its commitment to curating the world's finest automobile experiences. Your Maserati journey begins here.",

    learnMoreLink: "https://www.maserati.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
        ]
      },
      "Tamil Nadu": {
        sales: [
          {
            address: "#199, Anna Salai, Chennai-600 002",
            phone: "+91 44-6649 8080",
            email: "info.citysales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Anna+Salai,+Chennai&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CAnna+Salai,+Chennai"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "#148, K, Old Mahabalipuram Road, Okkiyam, Thoraipakkam, Chennai-600 096",
            phone: "+91 44-6649 8181",
            email: "info.chennaisales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Old+Mahabalipuram+Road,+Chennai&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7COld+Mahabalipuram+Road,+Chennai"
          },
          // more services if needed
        ]
      }
    }
  },
  {
    id: 5,
    backgroundImage: kia,
    brand: "maserati",
    bgColor: {
      from: "#FDC756",
      to: "rgba(253, 199, 86, 0.4)",
    },
    LogoComponent: KiaIcon,
    header: "VST Central - KIA",
    description: "VST Central has been driving KIA's journey in South India since 2019, bringing innovative and dependable vehicles to customers across Bangalore and North Tamil Nadu. With showrooms and service centres in Bangalore, Chennai, Salem, Vellore, and Hosur, it ensures easy access to worldclass automotive experiences. Built on a foundation of reliability and customer-first service, VST Central continues to grow, making every journey smoother with exceptional care and support at every step.",

    learnMoreLink: "https://www.kia.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
        ]
      },
      "Tamil Nadu": {
        sales: [
          {
            address: "#199, Anna Salai, Chennai-600 002",
            phone: "+91 44-6649 8080",
            email: "info.citysales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Anna+Salai,+Chennai&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CAnna+Salai,+Chennai"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "#148, K, Old Mahabalipuram Road, Okkiyam, Thoraipakkam, Chennai-600 096",
            phone: "+91 44-6649 8181",
            email: "info.chennaisales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Old+Mahabalipuram+Road,+Chennai&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7COld+Mahabalipuram+Road,+Chennai"
          },
          // more services if needed
        ]
      }
    }
  },
  {
    id: 6,
    backgroundImage: tata,
    brand: "maserati",
    bgColor: {
      from: "#D6744E",
      to: "rgba(214, 116, 78, 0.4)",
    },
    LogoComponent: TataIcon,
    header: "VST Motors -TATA",
    description: "VST Motors, one of the group's oldest and most successful franchise partnerships, has represented Tata Motors in Tamil Nadu since 1954, becoming an integral part of the region's automotive landscape. The journey began in 1942 when V.S. Thiruvengadasamy Mudaliar acquired the family's first showroom on Mount Road, Chennai, now a landmark that marked the group's expansion into Tamil Nadu.  With a strong presence across key locations including Chennai, Cuddalore, Salem, Hosur, Trichy, and Vellore, VST Motors is committed to delivering reliable vehicles and exceptional after-sales service. Driven by a legacy of quality, trust, and customer focus, VST Motors continues to build lasting relationships with its customers, reinforcing its reputation as a dependable and customer-centric brand across the state.",

    learnMoreLink: "https://www.tatamotors.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
        ]
      },
      "Tamil Nadu": {
        sales: [
          {
            address: "#199, Anna Salai, Chennai-600 002",
            phone: "+91 44-6649 8080",
            email: "info.citysales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Anna+Salai,+Chennai&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CAnna+Salai,+Chennai"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "#148, K, Old Mahabalipuram Road, Okkiyam, Thoraipakkam, Chennai-600 096",
            phone: "+91 44-6649 8181",
            email: "info.chennaisales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Old+Mahabalipuram+Road,+Chennai&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7COld+Mahabalipuram+Road,+Chennai"
          },
          // more services if needed
        ]
      }
    }
  },
  {
    id: 7,
    backgroundImage: mahindra,
    brand: "maserati",
    bgColor: {
      from: "#05F1F2",
      to: "rgba(5, 241, 242, 0.4)",
    },
    LogoComponent: MahindraIcon,
    header: "India Garage - Mahindra",
    description: "India Garage, a well-established franchise partner of Mahindra & Mahindra, has been a trusted name in Karnataka since 1949, proudly serving both urban and rural communities. With showrooms and workshops in key locations including Bengaluru, Mysuru, and across southern Karnataka, India Garage offers an extensive range of robust SUVs and commercial vehicles, backed by a dependable service network and a customer-first approach. Driven by a commitment to excellence, reliability, and performance, India Garage remains the preferred destination for Mahindra customers across the region, continuing to build lasting trust and satisfaction.",
    learnMoreLink: "https://www.mahindra.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
        ]
      },
      "Tamil Nadu": {
        sales: [
          {
            address: "#199, Anna Salai, ssssssChennai-600 002",
            phone: "+91 44-6649 8080",
            email: "info.citysales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Anna+Salai,+Chennai&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CAnna+Salai,+Chennai"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "#148, K, Old Mahabalipuram Road, Okkiyam, Thoraipakkam, Chennai-600 096",
            phone: "+91 44-6649 8181",
            email: "info.chennaisales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Old+Mahabalipuram+Road,+Chennai&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7COld+Mahabalipuram+Road,+Chennai"
          },
          // more services if needed
        ]
      }
    }
  },
  {
    id: 8,

    backgroundImage: ducati,
    brand: "maserati",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: DucatiIcon,
    header: "VST & Sons - Ducati",
    description: "In 2015, VST Ducati introduced Karnataka and Tamil Nadu to the world of Ducati, offering more than just motorcycles, but an unmatched riding lifestyle. With showrooms in Bangalore and Chennai, the brand pairs Italian heritage with local expertise and care. Showcasing the complete Ducati range, along with premium riding gear, accessories, and merchandise. A dedicated sales team ensures customers find the perfect bike and safety gear for an unmatched riding experience. Our service centres, equipped with service bays and advanced diagnostic tools, are staffed by trained Ducati technicians using only genuine parts to maintain peak performance. At VST Ducati, buying a bike is just the beginning, we're committed to delivering exceptional care throughout your ownership journey.",

    learnMoreLink: "https://www.ducati.com",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          },
          // more services if needed
        ]
      },
      "Tamil Nadu": {
        sales: [
          {
            address: "#199, Anna Salai, Chennai-600 002",
            phone: "+91 44-6649 8080",
            email: "info.citysales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Anna+Salai,+Chennai&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CAnna+Salai,+Chennai"
          },
          // more sales if needed
        ],
        service: [
          {
            address: "#148, K, Old Mahabalipuram Road, Okkiyam, Thoraipakkam, Chennai-600 096",
            phone: "+91 44-6649 8181",
            email: "info.chennaisales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Old+Mahabalipuram+Road,+Chennai&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7COld+Mahabalipuram+Road,+Chennai"
          },
          // more services if needed
        ]
      }
    }
  },
  {
    id: 9,
    backgroundImage: honda,
    brand: "honda",
    bgColor: {
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: HondaLogo,
    header:"City Honda",

    description: "Since 2001, City Honda has been bringing the trusted performance of Honda two-wheelers to customers across Karnataka. As part of the VST Group, City Honda caters to a dynamic and growing community of riders, offering a seamless blend of reliability, efficiency, and service excellence. With two centrally located showrooms in Bangalore and workshops across the city and Chikmagalur, City Honda delivers a complete 4S experience - Sales, Service, Spares, and Safety Riding under one roof. Backed by a knowledgeable sales team and expert service technicians, the brand ensures every customer enjoys a smooth and dependable ownership journey. Rooted in trust and powered by performance, City Honda continues to be a preferred destination for two-wheeler enthusiasts.",


    learnMoreLink: "#",
    locations: {
      Bangalore: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          }
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta  Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          }
        ]
      },
      "Tamil Nadu": {
        sales: [
          {
            address: "#199, Anna Salai, Chennai-600 002",
            phone: "+91 44-6649 8080",
            email: "info.citysales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Anna+Salai,+Chennai&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CAnna+Salai,+Chennai"
          }
        ],
        service: [
          {
            address: "#148, K, Old Mahabalipuram Road, Okkiyam, Thoraipakkam, Chennai-600 096",
            phone: "+91 44-6649 8181",
            email: "info.chennaisales@titaniummotors.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Old+Mahabalipuram+Road,+Chennai&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7COld+Mahabalipuram+Road,+Chennai"
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

    learnMoreLink: "#",
    locations: {
      sales: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          }
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          }
        ]
      },
      service: {
        sales: [
          {
            address: "Karachi Business District, Karachi, Pakistan",
            phone: "+92 21-1234567",
            email: "sales.karachi@volkswagen.pk",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Karachi+Business+District,+Karachi&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CKarachi+Business+District,+Karachi"
          }
        ],
        service: [
          {
            address: "Industrial Area, Karachi, Pakistan",
            phone: "+92 21-7654321",
            email: "service.karachi@volkswagen.pk",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Industrial+Area,+Karachi&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CIndustrial+Area,+Karachi"
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
      from: "#E9354C",
      to: "rgba(233, 53, 76, 0.4)",
    },
    LogoComponent: BydLogo,
    header: "VST BYD",
    description: "In 2023, VST Group extended its automotive legacy by partnering with BYD, introducing a new era of electric mobility to Karnataka. With showrooms located on Cunningham Road and Outer Ring Road (OSUR), VST BYD offers access to BYD's cutting-edge electric vehicles, combining innovation with everyday practicality. As the first Chinese automotive brand in the VST portfolio, BYD represents a bold step toward the future of sustainable transportation. The VST Group brings its deep-rooted expertise in automotive retail and service to this new venture. With a strong focus on green mobility and future-ready technology, VST BYD is poised to redefine the electric vehicle experience in the region, backed by trusted guidance and dependable after-sales support.",
    learnMoreLink: "#",
    locations: {
      India: {
        sales: [
          {
            address: "VST Vistas, #1, Palace Cross Road, Bengaluru 560 020",
            phone: "+91 80-2334 4090, +91 96069 88123",
            email: "salesmanagerpcr.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=VST+Vistas,+Palace+Cross+Road,+Bengaluru&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CVST+Vistas,+Palace+Cross+Road,+Bengaluru"
          }
        ],
        service: [
          {
            address: "Survey #69/2, Mallasandra Village, Bagalagunte, Hesaraghatta Main Road, 8th Mile, T. Dasarahalli, Bengaluru 560 057",
            phone: "+91 96066 33425",
            email: "servicemanagerhsrg.blr@vstcentral-kia.in",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Hesaraghatta+Main+Road,+Bengaluru&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CHesaraghatta+Main+Road,+Bengaluru"
          }
        ]
      },
      Pakistan: {
        sales: [
          {
            address: "Lahore Business Hub, Lahore, Pakistan",
            phone: "+92 42-9876543",
            email: "sales.lahore@byd.pk",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Lahore+Business+Hub,+Lahore&zoom=15&size=300x120&markers=color:red%7Clabel:S%7CLahore+Business+Hub,+Lahore"
          }
        ],
        service: [
          {
            address: "Lahore Industrial Zone, Lahore, Pakistan",
            phone: "+92 42-1234567",
            email: "service.lahore@byd.pk",
            map: "https://maps.googleapis.com/maps/api/staticmap?center=Lahore+Industrial+Zone,+Lahore&zoom=15&size=300x120&markers=color:blue%7Clabel:S%7CLahore+Industrial+Zone,+Lahore"
          }
        ]
      }
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
    <div className="relative w-full min-h-screen  lg:mt-[0rem] mt-[1rem]">
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
        <div className="relative w-full h-auto sm:h-[85vh] lg:h-screen flex flex-col lg:flex-row sm:mb-[1] lg:mb-[10rem] mb-[4rem]">
          {/* Left section with background and car */}
          <div className="relative w-full lg:w-[55%] h-[40vh] sm:h-[45vh] lg:h-full xl:h-[100vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 w-[50%] lg:w-[92%] h-[90%] rounded-br-[120px] overflow-hidden"
              >
                <Image
                  src={slides[currentSlide].backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover "
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
                />
              </motion.div>

              {/* Static blue accent bars - hidden on mobile */}
              <div
                className="hidden lg:block absolute top-0 right-0 w-[1rem] sm:w-[1.5rem] h-[40%] rounded-br-full rounded-bl-none rounded-t-none"
                style={{ backgroundColor: "#2676A6" }}
              />
              <div
                className="hidden lg:block absolute top-0 right-[4rem] sm:right-[40px] w-[1rem] sm:w-[1.5rem] h-[50%] rounded-br-full rounded-bl-none rounded-t-none"
                style={{ backgroundColor: "#3C92C6" }}
              />
            </AnimatePresence>
          </div>

          {/* Right section */}
          <div className="relative w-full lg:w-[45%] px-1 sm:px-1 lg:px-1 flex flex-col justify-between py-2 sm:py-4 lg:py-20">
            {/* Title */}
            <div className="flex-1 flex items-center justify-center sm:mb-[rem] mb-[3rem]">
              <h2 className="text-white font-rocWide font-light text-clamp-67  text-start">
                Our
                <br />
                Automative
                <br />
                Franchises
              </h2>
            </div>

            {/* Navigation and logos */}
            <div className="flex flex-col items-center lg:items-start justify-start gap-1 sm:gap-2 lg:gap-8 h-auto lg:h-[16rem] translate-y-[-20%] w-full">
              {/* Up arrow */}
              <button
                onClick={prevSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[5.5rem] mb-0 sm:mb-1 lg:mb-0"
              >
                <svg
                  className="w-5 sm:w-6 lg:w-12 h-5 sm:h-6 lg:h-12"
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
              <div className="w-full flex justify-center lg:justify-start overflow-hidden py-0 sm:py-1 lg:py-[2rem] lg:pl-[3rem] relative">
                <motion.div
                  className="flex items-center gap-3 sm:gap-5 lg:gap-16"
                  animate={{
                    x: `-${scrollPosition * ((screenWidth ?? 1200) < 640 ? 212 : (screenWidth ?? 1200) < 1024 ? 220 : 264)
                      }px`,
                    translateX: (screenWidth ?? 1200) < 640 ? "9.43%" : (screenWidth ?? 1200) < 1024 ? "9.4%" : "-0.1%",
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
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[5.5rem] mt-0 sm:mt-1 lg:mt-0"
              >
                <svg
                  className="w-5 sm:w-6 lg:w-12 h-5 sm:h-6 lg:h-12"
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
        <div className="w-full flex flex-col lg:flex-row py-10 px-4 sm:px-6 lg:px-24 items-start gap-8">
          {/* Left: Description */}
          <div className="w-full lg:w-3/5 flex flex-col items-start">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-normal mb-4 sm:mb-6 lg:mb-8 text-left">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`header-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-normal mb-4 sm:mb-6 lg:mb-8"
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
                className="text-white text-sm sm:text-base lg:text-[24px] text-left 
              font-normal leading-[160%] sm:leading-[177%] tracking-[0%] max-w-6xl
              font-['FONTSPRING_DEMO_-_Roc_Grotesk']"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            <a href={slides[currentSlide].learnMoreLink} className="mt-6 sm:mt-8 lg:mt-10 inline-block w-auto" target="_blank" rel="noopener noreferrer">
              <h3 className="border-2 border-[#DFAC4F] rounded-xl sm:rounded-2xl px-8 sm:px-12 md:px-20 lg:px-40 xl:px-60 py-3 sm:py-4 lg:py-5 text-[#DFAC4F] text-xl sm:text-2xl lg:text-3xl font-light hover:bg-[#DFAC4F]/10 transition-colors">
                Learn More
              </h3>
            </a>
          </div>

          {/* Right: Switchable Location Tabs */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4 mt-8 lg:mt-0">
            {slides[currentSlide]?.locations && (
              <>
                {/* Only show tabs if there are multiple locations */}
                {Object.keys(slides[currentSlide].locations).length > 1 && (
                  <div className="flex gap-4 mb-2 w-full">
                    {Object.keys(slides[currentSlide].locations).map((loc) => (
                      <button
                        key={`${currentSlide}-${loc}`}
                        onClick={() => setActiveLocation(loc)}
                        className={`flex-1 px-4 py-2 rounded-t-lg font-semibold text-lg border-b-2 transition-colors
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
                  className="border-l border-r border-white p-6 flex flex-col gap-6 min-w-0 max-h-[700px] overflow-y-auto"
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
                                <div className="text-white font-bold text-xl mb-2">
                                  Sales {location.sales.length > 1 ? `#${idx + 1}` : ''}:
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-medium">
                                  {sale.address}<br />
                                  <span className="inline-block mt-2">📞 {sale.phone}</span><br />
                                  <span className="inline-block">✉️ {sale.email}</span>
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
                        {location.service && location.service.length > 0 && location.service.map((service, idx) => (
                          <div key={`${currentSlide}-${locationKey}-service-${idx}`} className="hide-scrollbar mb-6">
                            <div className="text-white font-bold text-xl mb-2">
                              Service {Array.isArray(location.service) && location.service.length > 1 ? `#${idx + 1}` : ''}:
                            </div>
                            <div className="text-white text-lg leading-relaxed mb-4 font-medium">
                              {service.address}<br />
                              <span className="inline-block mt-2">📞 {service.phone}</span><br />
                              <span className="inline-block">✉️ {service.email}</span>
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
                      </>
                    );
                  })()}
                </div>
              </>
            )}
          </div>
        </div>

        <BusinessSectors />

        {/* Logo section */}
        <div className="w-full flex justify-center py-8 sm:py-12 lg:py-20">
          <Logo />
        </div>
      </motion.div>
    </div>
  );
};

export default FranchiseSlider;
