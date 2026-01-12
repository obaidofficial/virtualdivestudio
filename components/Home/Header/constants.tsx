import React from "react";
import { MainNavItem } from "./types";

export const NAVIGATION_DATA: MainNavItem[] = [
  {
    label: "Services",
    href: "",
    megaMenu: {
      layout: "grid",
      columns: [
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
          title: "Game Engines",
          items: [
            {
              label: "Unity Game",
              description: "",
              href: "#fin",
            },
            {
              label: "Unreal Game",
              description: "",
              href: "#health",
            },
            {
              label: "UEFN",
              description: "",
              href: "#health",
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
      ],
      featured: {
        title: "New: Intelligent Routing",
        description:
          "Optimize traffic flow automatically based on real-time network conditions across the globe.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        cta: "Read the whitepaper",
        href: "#accelerator",
      },
    },
  },
  {
    label: "Products",
    href: "#products",
    megaMenu: {
      layout: "icons",
      columns: [
        {
          title: "Core Platform",
          items: [
            {
              label: "Nexus Compute",
              description: "Global serverless runtime environment",
              href: "#edge",
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              label: "Blob Store",
              description: "Petabyte-scale object storage",
              href: "#storage",
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"
                  />
                </svg>
              ),
            },
          ],
        },
        {
          title: "Security & Ops",
          items: [
            {
              label: "WAF+",
              description: "Next-gen web application firewall",
              href: "#shield",
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              label: "Observability",
              description: "Full stack distributed tracing",
              href: "#sight",
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
          ],
        },
      ],
    },
  },
  {
    label: "Developers",
    href: "#devs",
    megaMenu: {
      layout: "split",
      columns: [
        {
          title: "Documentation",
          items: [
            { label: "API Reference", href: "#docs" },
            { label: "Quickstarts", href: "#cli" },
            { label: "SDK Libraries", href: "#sdks" },
            { label: "Sample Apps", href: "#examples" },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            { label: "Nexus CLI", href: "#cli-tool" },
            { label: "GitHub Action", href: "#gh" },
            { label: "VS Code Extension", href: "#vscode" },
            { label: "Community Discord", href: "#discord" },
          ],
        },
      ],
      featured: {
        title: "The Edge Console",
        description:
          "Try our new browser-based IDE for deploying serverless functions in seconds.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        cta: "Open Console",
        href: "#portal",
      },
    },
  },
  {
    label: "Enterprise",
    href: "#enterprise",
    megaMenu: {
      layout: "grid",
      columns: [
        {
          title: "Infrastructure",
          items: [
            { label: "Dedicated IP Addresses", href: "#ip" },
            { label: "Custom SSL Certs", href: "#ssl" },
            { label: "Multi-cloud Strategy", href: "#multi" },
            { label: "Global Traffic Manager", href: "#gtm" },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Standard Support", href: "#std" },
            { label: "Premium 24/7", href: "#prem" },
            { label: "Enterprise Concierge", href: "#concierge" },
            { label: "Success Engineering", href: "#success" },
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    href: "#resources",
    megaMenu: {
      layout: "featured",
      columns: [
        {
          title: "Learn",
          items: [
            { label: "Engineering Blog", href: "#blog" },
            { label: "Video Tutorials", href: "#tuts" },
            { label: "Customer Stories", href: "#cases" },
            { label: "Security Center", href: "#security" },
          ],
        },
      ],
      featured: {
        title: "Global Performance Index",
        description:
          "See how our network performs against competitors in real-time across 150 regions.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
        cta: "View Live Data",
        href: "#report",
      },
    },
  },
];
