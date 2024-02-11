import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="px-[8rem]">
      <div className="bg-customBlack py-[7.5rem] rounded-3xl">
        <div className="contenedor">
          <div className="grid grid-cols-4 gap-[3rem] justify-center ">
            <div>
              <img src="../../public/img/logo-white.png" alt="Logo White" />
              <p className="text-lightWhite mt-[2rem] leading-[3rem]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est
                sapiente earum? Aut adipisci ipsam cumque voluptatibus hic in
                nostrum! Eveniet.
              </p>
              <div className="flex gap-[2rem] mt-[3rem] ">
                <div className="rounded-full p-[1rem] bg-lightWhite group hover:bg-primary  opacity-20 hover:opacity-100 cursor-pointer transition-all duration-300">
                  <FaFacebookSquare size={15} color="#0d1034" />
                </div>
                <div className="rounded-full p-[1rem] bg-lightWhite group hover:bg-primary opacity-20 hover:opacity-100 cursor-pointer transition-all duration-300">
                  <FaTwitter size={15} color="#0d1034" />
                </div>
                <div className="rounded-full p-[1rem] bg-lightWhite  group hover:bg-primary opacity-20 hover:opacity-100 cursor-pointer transition-all duration-300">
                  <FaGoogle size={15} color="#0d1034" />
                </div>
                <div className="rounded-full p-[1rem] bg-lightWhite  group hover:bg-primary opacity-20 hover:opacity-100 cursor-pointer transition-all duration-300">
                  <IoLogoLinkedin size={15} color="#0d1034" />
                </div>
              </div>
            </div>

            <div className="pl-[4rem] ">
              <h4 className="text-white font-bold">Contact Us</h4>

              <nav className="flex flex-col gap-[1rem] mt-[2rem] ">
                <Link className="text-lightWhite hover:text-primary transition-all duration-300">
                  Conditions
                </Link>
                <Link className="text-lightWhite hover:text-primary transition-all duration-300">
                  Terms of Use
                </Link>
                <Link className="text-lightWhite hover:text-primary transition-all duration-300">
                  Our Services
                </Link>
                <Link className="text-lightWhite hover:text-primary transition-all duration-300">
                  New Guests List
                </Link>
                <Link className="text-lightWhite hover:text-primary transition-all duration-300">
                  The Team List
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-white font-bold">Services</h4>

              <div className="flex gap-[1rem] items-center mt-[2rem] ">
                <div className="flex p-[1rem] bg-primary rounded-2xl justify-center items-center">
                  <IoLocationSharp size={25} color="#FFFFFF" />
                </div>
                <div>
                  <p className="text-lightWhite">2416 Mapleview Drive Tampa,</p>
                  <p className="text-lightWhite">FL 33634, Toronto</p>
                </div>
              </div>
              <div className="flex gap-[1rem] items-center mt-[4rem] ">
                <div className="flex p-[1rem] bg-primary rounded-2xl justify-center items-center">
                  <FaPhoneAlt size={25} color="#FFFFFF" />
                </div>
                <div>
                  <p className="text-lightWhite">0029129102320</p>
                  <p className="text-lightWhite">0029129102320</p>
                </div>
              </div>
              <div className="flex gap-[1rem] items-center mt-[4rem] ">
                <div className="flex p-[1rem] bg-primary rounded-2xl justify-center items-center">
                  <IoMdMail size={25} color="#FFFFFF" />
                </div>
                <div>
                  <p className="text-lightWhite">contact@website.com</p>
                  <p className="text-lightWhite">hello@website.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold">Instagram</h4>

              <div className="grid grid-cols-3 gap-[1rem] items-center mt-[2rem] ">
                <img
                  className="rounded-xl object-cover w-[40rem] "
                  src="../../public/img/ig-1.jpg"
                  alt="Ig Img"
                />
                <img
                  className="rounded-xl object-cover w-[40rem] "
                  src="../../public/img/ig-2.jpg"
                  alt="Ig Img"
                />
                <img
                  className="rounded-xl object-cover w-[40rem] "
                  src="../../public/img/ig-3.jpg"
                  alt="Ig Img"
                />
                <img
                  className="rounded-xl object-cover w-[40rem] "
                  src="../../public/img/ig-4.jpg"
                  alt="Ig Img"
                />
                <img
                  className="rounded-xl object-cover w-[40rem] "
                  src="../../public/img/ig-5.jpg"
                  alt="Ig Img"
                />
                <img
                  className="rounded-xl object-cover w-[40rem] "
                  src="../../public/img/ig-6.jpg"
                  alt="Ig Img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor my-[3rem] flex items-center justify-between">
        <p className="text-lightGray">
          © AndresVelezDev 2023 | All Rights Reserved
        </p>
        <div>
          <nav className="flex gap-[2rem]">
            <Link className="text-lightGray hover:text-primary transition-all duration-300">
              Privacy
            </Link>
            <Link className="text-lightGray hover:text-primary transition-all duration-300">
              Terms
            </Link>
            <Link className="text-lightGray hover:text-primary transition-all duration-300">
              Sitemap
            </Link>
            <Link className="text-lightGray hover:text-primary transition-all duration-300">
              Help
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
