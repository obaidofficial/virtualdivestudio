import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import { Header } from "@/components/Home/Header/MegaMenu/Header";

// import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtual Dive Studio",
  description: "AI, Real Estate & Game Development Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
