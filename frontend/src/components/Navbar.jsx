import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="contenedor py-[2rem] ">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img src="../../public/img/logo.png" alt="Logo" />
        </Link>

        <nav className="flex gap-[4rem] items-center ">
          <a
            className="font-medium hover:text-primary transition-all duration-300"
            href=""
          >
            Business
          </a>
          <a
            className="font-medium hover:text-primary transition-all duration-300"
            href=""
          >
            Explore
          </a>
          <a
            className="font-medium hover:text-primary transition-all duration-300"
            href=""
          >
            English
          </a>
          <a
            className="font-medium hover:text-primary transition-all duration-300"
            href=""
          >
            Sign in
          </a>
          {!currentUser?.isSeller && (
            <a
              className="font-medium hover:text-primary transition-all duration-300"
              href=""
            >
              Become a Seller
            </a>
          )}
          {!currentUser && (
            <a
              className="font-medium hover:text-primary transition-all duration-300"
              href=""
            >
              Join
            </a>
          )}
          {currentUser && (
            <div
              onClick={() => setOpen(!open)}
              className="flex gap-[2rem] items-center relative "
            >
              <img
                className="w-[5rem] cursor-pointer object-cover h-[5rem] rounded-full "
                src="../../public/img/profile.jpg"
                alt="Image Profile"
              />
              <p className="cursor-pointer font-medium">
                {currentUser?.username}
              </p>
              {open && (
                <div className="absolute z-50 top-[6rem] right-0 p-[2rem] bg-white border border-[1px] rounded-xl flex flex-col text-lightGray w-[20rem] ">
                  {currentUser?.isSeller && (
                    <>
                      <Link
                        to={"/mygigs"}
                        className="font-medium hover:text-primary transition-all duration-300"
                        href=""
                      >
                        Gigs
                      </Link>
                      <Link
                        to={"/add"}
                        className="font-medium hover:text-primary transition-all duration-300"
                        href=""
                      >
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link
                    to={"/orders"}
                    className="font-medium hover:text-primary transition-all duration-300"
                    href=""
                  >
                    Orders
                  </Link>
                  <Link
                    to={"/messages"}
                    className="font-medium hover:text-primary transition-all duration-300"
                    href=""
                  >
                    Messages
                  </Link>
                  <Link
                    to={"/"}
                    className="font-medium hover:text-primary transition-all duration-300"
                    href=""
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
