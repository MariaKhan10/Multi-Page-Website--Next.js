import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <section className="body-font bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 text-white py-40">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold leading-tight">
              Designer Evening Dresses.
              <br className="hidden lg:inline-block" />
              Superior Collection of Designer Pieces
            </h1>
            <p className="mb-10 leading-relaxed text-lg max-w-xl">
              Dazzle like the stars when you step out to your event wearing your
              pick from our vast catalog of designer evening gowns. With
              occasion wear suitable for any black or white tie event, we are
              confident you will find the perfect evening dress for you.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
                Shop Now
              </button>
              <button className="ml-4 inline-flex items-center text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
            <Image
              className="object-cover object-center rounded-lg mx-auto w-[300px] h-[400px] shadow-2xl border-4 border-yellow-500"
              alt="hero"
              width={500}
              height={500}
              style={{
                filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
              }}
              src={"/pictures/image1.png"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
