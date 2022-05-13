import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-4 text-gray-400 bg-black/10 br-w-full body-font backdrop-blur-md ">
      {/* :DESKTOP MENU */}
      <div className="container flex items-center justify-around px-5 mx-auto py-7">
        {/* Site logo and Name */}
        <Link to="/">
          <img
            src="public\assets\global\logoSQP.png"
            alt="OnEstTousEnsemble"
            className="px-10"
          />
        </Link>

        {/* Navbar */}
        <nav className="flex-wrap items-center justify-center hidden text-base tracking-wide md:ml-auto md:flex">
          <Link className="mr-8 hover:text-gray-200" to="/explorer">
            Explorer
          </Link>
          <Link className="mr-8 hover:text-gray-200" to="/activity">
            Activity
          </Link>
          <Link className="mr-8 hover:text-gray-200" to="/ecostats">
            Eco Stats
          </Link>
          <Link
            className="mr-8 border-2 border-green-200 rounded-full hover:text-gray-200 px-[2vh] py-[0.5vh]"
            to="/about"
          >
            About us
          </Link>
        </nav>
        {/* Avatar */}
        <div className="hidden ml-auto mr-4 cursor-pointer sm:inline-flex md:ml-0 md:mr-0">
          <button
            type="button"
            className="flex rounded-full px-5 py-2.5 bg-gradient-to-br from-green-400 to-blue-600 text-stone-100"
          >
            <img
              src="public\assets\global\wallet.png"
              alt="wallet"
              className="px-[0.5vh] py-[0.5vh]"
            />
            Connect your wallet
          </button>
        </div>
        {/* Burger icon standard */}
        <button
          type="button"
          className="rounded-md md:hidden active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-300 rounded-md bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-gray-900 md:hidden">
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
          >
            Explorer
          </a>
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
          >
            Activity
          </a>
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
          >
            Eco stats
          </a>
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
          >
            About us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
