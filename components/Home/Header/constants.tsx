import React from "react";
import { MainNavItem } from "./types";
import { BiSolidFile, BiSolidFolder, BiSolidPencil } from "react-icons/bi";

export const NAVIGATION_DATA: MainNavItem[] = [
  {
    label: "Services",
    href: "",
    megaMenu: {
      layout: "grid",
      columns: [
        {
          title: "Game Development",
          items: [
            {
              label: "Full Cycle Game",
              description: "",
              href: "#shop",
            },
            {
              label: "AR/VR Game",
              description: "",
              href: "#saas",
            },
            {
              label: "Mobile Game",
              description: "",
              href: "#stream",
            },
            {
              label: "Metaverse Game",
              description: "",
              href: "#ai",
            },
            {
              label: "NFT Game",
              description: "",
              href: "#ai",
            },
            {
              label: "2D/3D Game Art Creation",
              description: "",
              href: "#ai",
            },
            {
              label: "Game Porting",
              description: "",
              href: "#ai",
            },
          ],
        },
        {
          title: "Real Estate",
          items: [
            {
              label: "Virtual Staging",
              description: "",
              href: "#shop",
            },
            {
              label: "AR Experience",
              description: "",
              href: "#saas",
            },
            {
              label: "VR Experience",
              description: "",
              href: "#stream",
            },
            {
              label: "Archivz",
              description: "",
              href: "#ai",
            },
            {
              label: "Digital Twins",
              description: "",
              href: "#ai",
            },
            {
              label: "Floor Plans",
              description: "",
              href: "#ai",
            },
            {
              label: "Image Enhancement",
              description: "",
              href: "#ai",
            },
            {
              label: "Video Editing",
              description: "",
              href: "#ai",
            },
            {
              label: "Virtual Renovation",
              description: "",
              href: "#ai",
            },
          ],
        },
        {
          title: "Game Engines",
          items: [
            {
              label: "Unity Game",
              description: "",
              href: "/platforms/unity-game-development",
            },
            {
              label: "Unreal Game",
              description: "",
              href: "/platforms/unreal-engine-game-development",
            },
            {
              label: "UEFN",
              description: "",
              href: "/services/uefn-development",
            },
          ],
        },
        {
          title: "Metaverse Development",
          items: [
            {
              label: "Ecommerce Platform",
              description: "",
              href: "#fin",
            },
            {
              label: "Real Estate Platform",
              description: "",
              href: "#health",
            },
          ],
        },
        {
          title: "AR/VR Development",
          items: [
            {
              label: "VR Development",
              description: "",
              href: "#fin",
            },
            {
              label: "AR Development",
              description: "",
              href: "#health",
            },
          ],
        },
        {
          title: "Design & Art",
          items: [
            {
              label: "Concept Art",
              description: "",
              href: "#fin",
            },
            {
              label: "UI/UX Development",
              description: "",
              href: "#health",
            },
          ],
        },
        {
          title: "Blockchain Development",
          items: [
            {
              label: "Custom Blockchain",
              description: "",
              href: "#fin",
            },
            {
              label: "P2E Blockchain Game",
              description: "",
              href: "#health",
            },
          ],
        },
      ],
      featured: {
        title: "Contact Us",
        description:
          "We are always happy to answer questions, provide further details, and collaborate with new partners.",
        image: "/images/contact/contact-image.webp",
        numbercta: "+1(407) 606-7197",
        numberhref: "tel:+14076067197",
        mailcta: "info@virtualdivestudio.com",
        mailhref: "mailto:info@virtualdivestudio.com",
      },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      layout: "grid",
      columns: [
        {
          title: "",
          items: [
            { label: "Gaming Solutions", href: "/industries/gaming-solutions" },
            { label: "Sports App Design & Development", href: "#ssl" },
            { label: "Healthcare & Wellness Solutions", href: "#multi" },
          ],
        },
        {
          title: "",
          items: [
            {
              label: "AR Travel App Development Services",
              href: "#std",
            },
            {
              label: "Social Networking & AR VR Entertainments Solutions",
              href: "#prem",
            },
            { label: "E Commerce Design Solutions", href: "#std" },
          ],
        },
        {
          title: "",
          items: [
            { label: "AR VR Blockchain Development Services", href: "#std" },
            { label: "Educational Game Development Services", href: "#prem" },
            { label: "Real Estate Solutions", href: "#prem" },
          ],
        },
      ],
    },
  },
  {
    label: "Insight",
    href: "#",
    megaMenu: {
      layout: "icons",
      columns: [
        {
          title: "",
          items: [
            {
              label: "Portfolio",
              description: "Dive into the future with Virtual Dive Studios",
              href: "/portfolio",
              icon: <BiSolidFolder width={60} height={60} />,
            },
          ],
        },
        {
          title: "",
          items: [
            {
              label: "Case Studies",
              description:
                "Our expertise in blockchain, digital twin technology",
              href: "case-study",
              icon: <BiSolidFile width={60} height={60} />,
            },
          ],
        },
        {
          title: "",
          items: [
            {
              label: "Blog",
              description: "Explore our latest insights and stories",
              href: "/blog",
              icon: <BiSolidPencil width={60} height={60} />,
            },
          ],
        },
      ],
    },
  },
  {
    label: "Platform",
    href: "/platforms",
  },
  {
    label: "Hiring",
    href: "/hiring",
  },
  {
    label: "About",
    href: "/about",
  },
];
