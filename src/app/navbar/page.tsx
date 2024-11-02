"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-opacity-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-lg z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo and Site Title */}
          <a className="flex items-center text-white">
            <Image
              alt="logo"
              width={40}
              height={80}
              src="/pictures/logo.png"
              className="logo-image"
            />
          <span 
  className="ml-2 text-lg font-semibold" 
  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
>
  Maria’s Royal Attire
</span>


          </a>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {/* Simple Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Navbar Links */}
          <nav className="hidden md:flex md:space-x-4 text-base text-white">
            <Link href="/" className="hover:text-gray-200 font-semibold">
              Home
            </Link>
            <Link href="/accessories" className="hover:text-gray-200 font-semibold">
              Festive Favourites
            </Link>
            <Link href="/contact" className="hover:text-gray-200 font-semibold">
              Contact
            </Link>
            <Link href="/signup" className="hover:text-gray-200 font-semibold">
              Sign Up
            </Link>
          </nav>

          {/* Log In Button for Desktop */}
          <button className="hidden md:inline-flex items-center bg-white bg-opacity-20 hover:bg-opacity-40 text-white py-2 px-4 rounded transition duration-300">
            Log In
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4">
            <nav className="flex flex-col space-y-4 text-white text-center">
              <Link href="/" className="hover:text-gray-200 font-semibold" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/accessories" className="hover:text-gray-200 font-semibold" onClick={toggleMenu}>
                Festive Favourites
              </Link>
              <Link href="/contact" className="hover:text-gray-200 font-semibold" onClick={toggleMenu}>
                Contact
              </Link>
              <Link href="/signup" className="hover:text-gray-200 font-semibold" onClick={toggleMenu}>
                Sign Up
              </Link>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white py-2 px-4 rounded transition duration-300" onClick={toggleMenu}>
                Log In
              </button>
            </nav>
          </div>
        )}
      </header>
      <style jsx>{`
        .logo-image {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
