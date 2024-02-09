import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="px-[2rem] ">
      <div className="hero rounded-3xl">
        <div className="contenedor grid grid-cols-[3fr,2fr] gap-[5rem] py-[6rem] items-center px-[2rem] ">
          <div>
            <h1 className="font-bold">
              Your Gateway to Elite Freelancers - Prohire
            </h1>
            <p className="text-lightGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              maiores laborum debitis vero ratione minima provident quisquam
              officia vitae nostrum, possimus, est explicabo eveniet corrupti
              atque. Dolorem blanditiis enim quis!
            </p>

            <div className="flex mt-[4rem] justify-between w-full p-[1rem] rounded-2xl bg-white ">
              <form
                className="w-full grid grid-cols-[3fr,1fr] gap-[2rem] "
                action=""
              >
                <input
                  className="pl-[2rem] focus:outline-none "
                  type="text"
                  placeholder="e. g. Shopify Store Theme"
                />
                <input
                  className="bg-primary text-white p-[1.5rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 "
                  value={"Search"}
                  type="submit"
                />
              </form>
            </div>

            <p className="mt-[2rem] ">
              Popular Searches:{" "}
              <a
                className="text-lightGray hover:text-primary transition-all duration-300"
                href="#"
              >
                Web Design,
              </a>{" "}
              <a
                className="text-lightGray hover:text-primary transition-all duration-300"
                href="#"
              >
                App Design,
              </a>{" "}
              <a
                className="text-lightGray hover:text-primary transition-all duration-300"
                href="#"
              >
                Marketing,
              </a>{" "}
              <a
                className="text-lightGray hover:text-primary transition-all duration-300"
                href="#"
              >
                Graphic
              </a>{" "}
            </p>
          </div>
          <img src="../../public/img/hero-one.png" alt="Hero" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
