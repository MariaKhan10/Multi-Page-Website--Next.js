"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-opacity-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-lg z-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:flex-row md:space-x-4">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <a className="flex items-center text-white">
              <Image
                alt="logo"
                width={40}
                height={80}
                src="/pictures/logo.png"
                className="logo-image"
              />
              <span className="ml-2 text-lg font-semibold">Maria’s Royal Attire</span>
            </a>
            <button className="md:hidden focus:outline-none">
              {/* Mobile menu toggle (Add Icon Here) */}
            </button>
          </div>
          
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
