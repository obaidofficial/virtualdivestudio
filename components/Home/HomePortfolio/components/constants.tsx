import { Portfolio, Category } from "./types";

export const PORTFOLIOS: Portfolio[] = [
  // Gaming Portfolio
  {
    id: "g1",
    title: "Demolition Derby",
    description:
      "Dive into the relentless world of banger racing, where your skill and courage are tested in the fiery...",
    image:
      "https://virtualdivestudio.com/_next/image?url=https%3A%2F%2Fdevtechub.com%2Fbevd%2F-DemolitionDerbyCarGames-20250118T132239891Z.webp&w=640&q=75&dpl=dpl_5otcDsgsxXurW25MRuoMjVFLfXtZ",
    category: "Gaming",
    tags: ["Shopify Plus", "E-commerce", "UX Design"],
    link: "#",
  },
  {
    id: "g2",
    title: "4x4 Mountain Climb",
    description:
      "Embark on the ultimate off-road adventure with 4x4 Mountain Climb Car Game! This thrilling hill climb...",
    image:
      "https://virtualdivestudio.com/_next/image?url=https%3A%2F%2Fdevtechub.com%2Fbevd%2F-mountainClimbCarGames-20250118T132500168Z.webp&w=640&q=75&dpl=dpl_5otcDsgsxXurW25MRuoMjVFLfXtZ",
    category: "Gaming",
    tags: ["Liquid", "Automation", "Retail"],
    link: "#",
  },
  {
    id: "g3",
    title: "Bus Simulator Offroad",
    description:
      "Welcome to the thrilling world of Bus Simulator Offroad Bus Game—your ultimate destination for an...",
    image:
      "https://virtualdivestudio.com/_next/image?url=https%3A%2F%2Fdevtechub.com%2Fbevd%2F-BusSimulatorOffroadBusGame-20250118T132644780Z.webp&w=640&q=75&dpl=dpl_5otcDsgsxXurW25MRuoMjVFLfXtZ",
    category: "Gaming",
    tags: ["Theme Dev", "UI Design", "Shopify"],
    link: "#",
  },

  // Gmae Development Portfolio
  {
    id: "gd1",
    title: "Herculi",
    description:
      "Through strategic planning, methodical analysis, and iterative development, this game successfully navigated the challenges...",
    image:
      "https://virtualdivestudio.com/_next/image?url=https%3A%2F%2Fdevtechub.com%2Fbevd%2F-3DRunner-20241227T130532739Z.webp&w=640&q=75&dpl=dpl_5otcDsgsxXurW25MRuoMjVFLfXtZ",
    category: "Gmae Development",
    tags: ["Headless", "React", "Rest API"],
    link: "#",
  },
  {
    id: "gd2",
    title: "Burnout Ship",
    description:
      "Indeed, game apps that offer a personalized gaming experience have 40% more potential to increase user interaction...",
    image:
      "https://virtualdivestudio.com/_next/image?url=https%3A%2F%2Fdevtechub.com%2Fbevd%2F-SpaceshipBattleGround-20241228T130329150Z.webp&w=640&q=75&dpl=dpl_5otcDsgsxXurW25MRuoMjVFLfXtZ",
    category: "Gmae Development",
    tags: ["Elementor", "Performance", "B2B"],
    link: "#",
  },
  {
    id: "gd3",
    title: "The Flip",
    description:
      "Grass Fields is a performance based game environment. We kept the vertex count as low as possible and made sure...",
    image:
      "https://virtualdivestudio.com/_next/image?url=https%3A%2F%2Fdevtechub.com%2Fbevd%2F-grassfields-20241228T135315039Z.webp&w=640&q=75&dpl=dpl_5otcDsgsxXurW25MRuoMjVFLfXtZ",
    category: "Gmae Development",
    tags: ["FSE", "Gutenberg", "Portfolio"],
    link: "#",
  },
];

// Correctly importing and using Category type from types.ts
export const CATEGORIES: Category[] = ["Gaming", "Gmae Development"];
