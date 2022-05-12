import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-5 bg-black/10 sm:py-10">
      {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative flex flex-col items-center justify-center px-5 text-gray-400 mt-14 sm:mt-0">
          {/* ::Site image */}
          <img
            src="../../public/assets/images/greenade.png"
            alt="logo sqp"
            className="w-64 h-64 -mt-5 text-center opacity-50"
          />

          {/* ::Social & copyright */}
          <div className="flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex justify-center w-full mt-6 md:justify-start md:w-auto">
              {/* Facebook */}
              <a href="#link" className="text-gray-200">
                <span className="sr-only">Facebook</span>
                <Logo
                  myStyle="w-6 h-6"
                  name="logos-facebook"
                  id="logos-facebook"
                />
              </a>
              {/* Twitter */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Twitter</span>
                <Logo
                  myStyle="w-6 h-6"
                  name="logos-twitter"
                  id="logos-twitter"
                />
              </a>
              {/* Instagram */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Instagram</span>
                <Logo
                  myStyle="w-6 h-6"
                  name="logos-instagram"
                  id="logos-instagram"
                />
              </a>
              {/* Linkedin */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Linkedin</span>
                <Logo
                  myStyle="w-6 h-6"
                  name="logos-linkedin"
                  id="logos-linkedin"
                />
              </a>
            </span>
            {/* :::Copyright */}
            <a href="https://www.wildcodeschool.com">
              <span className="py-4 text-xs">
                &copy;2022, Hackathon 1 - Quentin, Gavin, Alexis, Geoffrey
              </span>
            </a>
          </div>
          {/* ::Mobile separator line */}
          <span
            className="absolute w-1/4 h-px transform -translate-x-1/2 bg-gray-400 sm:hidden -top-4 left-1/2"
            aria-hidden="true"
          />
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          {/* ::Navigation */}
          <div className="col-span-2 px-4 pb-0 md:col-span-1 md:py-3">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-300 font-bold tracking-wide">
              Navigation
            </h3>
            <nav className="flex justify-around font-medium list-none md:flex-col">
              <li>
                <a href="#link" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#link" className="hover:text-gray-200">
                  Explorer
                </a>
              </li>
              <li>
                <a href="#link" className="hover:text-gray-200">
                  Eco Stats
                </a>
              </li>
              <li>
                <a href="#link" className="hover:text-gray-200">
                  About
                </a>
              </li>
            </nav>
          </div>
          {/* ::Address */}
          <div className="flex flex-col items-center col-span-2 px-4 pb-0 md:col-span-1 md:py-3 sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-300 font-bold tracking-wide">
              Address
            </h3>
            <a
              href="https://www.google.fr/maps/place/Wild+Code+School/@43.4633631,-1.5136242,17z/data=!3m1!4b1!4m5!3m4!1s0xd51151b04400001:0x5e8e4026b1a5e55f!8m2!3d43.4633437!4d-1.5114351"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-lg font-medium text-center md:w-48 sm:text-left md:text-xl">
                666 Paradise Road, 64600 Wild Island ANGLET
              </p>
            </a>
          </div>
          {/* ::Email */}
          <div className="flex flex-col items-center col-span-2 px-4 pb-0 md:col-span-1 md:py-3 sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-300 font-bold tracking-wide">
              SQP Company
            </h3>
            <p className="inline-flex justify-center text-sm font-medium text-gray-400 sm:justify-start">
              <Logo
                myStyle="w-6 h-6 text-gray-200 mr-1"
                name="logos-mail"
                id="logos-mail"
              />
              <a href="#email">sauvequipeut@ecologie.fr</a>
            </p>
          </div>
          {/* ::Phone */}
          <div className="flex flex-col items-center col-span-2 px-4 pb-0 md:col-span-1 md:py-3 sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-300 font-bold tracking-wide">
              Phone contact
            </h3>
            <a href="tel:0652651722">
              <p className="inline-flex justify-center text-sm font-bold text-gray-400 sm:justify-start">
                <Logo
                  myStyle="w-6 h-6 text-gray-200"
                  fill="white"
                  name="logos-phone"
                  id="logos-phone"
                />
                <span>06 52 65 17 22</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
