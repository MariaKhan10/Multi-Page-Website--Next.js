import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-opacity-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-lg z-10">
        <div className="container mx-auto flex flex-wrap py-4 px-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              alt="logo"
              width={40}
              height={80}
              src={require("../../../public/pictures/logo.png")}
              className="logo-image"
            />
            <span className="ml-3 text-base">Maria’s Royal Attire</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-200 font-semibold">
              Home
            </Link>
            <Link href="/accessories" className="text-white hover:text-gray-200 font-semibold">
              Festive Favourites
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 font-semibold">
              Contact
            </Link>
            <Link href="/signup" className="text-white hover:text-gray-200 font-semibold">
              Sign Up
            </Link>
          </nav>
          <button className="inline-flex items-center bg-white bg-opacity-20 hover:bg-opacity-40 text-white py-2 px-4 rounded transition duration-300">
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
}

export default Navbar;

