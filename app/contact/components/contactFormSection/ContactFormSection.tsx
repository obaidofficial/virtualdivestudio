import React from "react";
import Link from "next/link";
import ContactForm from "../form/ContactForm";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const ContactFormSection = () => {
  return (
    <div className="pb-8 pt-8 lg:pb-16 lg:pt-16 bg-[#170012]">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-20 mx-auto pt-8">
          <div className="col-span-5 flex flex-col justify-center">
            <h2 className="text-[24px] mb-2 md:text-[28px] lg:text-[42px] leading-[1.2em] text-white">
              Get In Touch
            </h2>
            <p className="text-white font-light text-[16px] lg:text-[20px]">
              We are always happy to answer questions, provide further details,
              and collaborate with new partners. Fill out the fields below to
              get in contact with us!.
            </p>
            <ContactForm />
          </div>

          <div className="col-span-4">
            <div className="h-[330px] border-2 border-md border-[#ef41de] mb-8 rounded-lg bg-[url('/images/contact/contact-image.webp')] bg-cover bg-position-[50%_75%]"></div>
            <h2 className="text-[26px] mb-2 md:text-[28px] lg:text-[36px] leading-[1.2em] text-white">
              Contact Info
            </h2>

            <div className="grid grid-cols-1 gap-2 my-2">
              <div className="py-1 px-1 lg:py-3 lg:px-3">
                <h4 className="text-[22px] mb-4 md:text-[28px] lg:text-[26px] leading-[1.2em] text-white">
                  Head Office
                </h4>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                    <PhoneIcon
                      width={25}
                      height={25}
                      className="text-[#ef41de]"
                    />
                  </div>
                  <div className="col-span-10 lg:col-span-11 text-left flex items-center">
                    <p className="text-md text-white font-light text-[15px] lg:text-[20px]">
                      +1(407) 606-7197
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <EnvelopeIcon
                      width={25}
                      height={25}
                      className="text-[#ef41de]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-white font-light text-[15px] lg:text-[20px]">
                      info@virtualdivestudio.com
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                    <MapPinIcon
                      width={25}
                      height={25}
                      className="text-[#ef41de]"
                    />
                  </div>
                  <div className="col-span-10 lg:col-span-11 text-left flex items-center">
                    <p className="text-white font-light text-[15px] lg:text-[20px]">
                      5944 Coral Ridge Dr, Coral Springs, FL, 33076
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 my-2">
              <div className="py-3 pr-4 px-3">
                <h4 className="text-[24px] mb-4 md:text-[28px] lg:text-[26px] leading-[1.2em] text-[#252525] dark:text-white font-medium">
                  Stay Connected
                </h4>

                <div className="lg:col-span-1">
                  <ul className="flex gap-5">
                    <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                      <Link href="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                      <Link href="#">
                        <FiInstagram />
                      </Link>
                    </li>
                    <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                      <Link href="#">
                        <FaXTwitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
