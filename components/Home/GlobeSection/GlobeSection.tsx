"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Globe from "./GlobeComponents/Globe";
// import { ArrowRight, Sparkles } from "lucide-react";

const GlobeSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden pt-16 pb-16">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ef41de]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#510136]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          {/* Left Content */}
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="text-[28px] md:text-[32px] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Your Trusted Partner For Game Development:
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Virtual Dive Studios – An immersive experiences company that
              offers development services across diverse platforms.
            </p>
            <ul className="text-white font-light list-disc list-inside text-[15px] md:text-[18px] mt-2 leading-[1.6em]">
              <li>100+ Mobile Games.</li>
              <li>15+ PC and Console Games.</li>
              <li>20+ VR Games and Real Estate Experiences.</li>
              <li>15+ AR Health and Real Estate Experiences.</li>
              <li>3+ Cloud Games.</li>
              <li>100+ Pre-vetted Game Developers</li>
            </ul>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Our dedication to innovation, exceptional quality, and customer
              satisfaction has established us as a trusted and reliable partner
              in the industry. We constantly strive to push the boundaries of
              technology and creativity, ensuring every project surpasses our
              clients expectations.
            </p>
          </div>

          {/* Right Content - 3D Globe */}
          <div className="lg:col-span-6 py-2.5 px-4 h-[40vh] md:h-full relative cursor-grab active:cursor-grabbing flex flex-col justify-center items-end">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
              />
              <ambientLight intensity={0.5} />
              <pointLight
                position={[10, 10, 10]}
                intensity={1}
                color="#ef41de"
              />

              <Suspense fallback={null}>
                {/* Restored larger radius for desktop visibility */}
                <Globe count={6000} radius={3.82} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
