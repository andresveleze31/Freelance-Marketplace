import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";

function Navbar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await newRequest.post("/api/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
          <Link
            to={"/login"}
            className="font-medium hover:text-primary transition-all duration-300"
            href=""
          >
            Sign in
          </Link>
          {!currentUser?.isSeller && (
            <a
              className="font-medium hover:text-primary transition-all duration-300"
              href=""
            >
              Become a Seller
            </a>
          )}
          {!currentUser && (
            <Link
              to={"/register"}
              className="font-medium hover:text-primary transition-all duration-300"
              href=""
            >
              Join
            </Link>
          )}
          {currentUser && (
            <div
              onClick={() => setOpen(!open)}
              className="flex gap-[2rem] items-center relative "
            >
              <img
                className="w-[5rem] cursor-pointer object-cover h-[5rem] rounded-full "
                src={currentUser.img || "../../public/img/no_profile.png"}
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
                    onClick={handleLogout}
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
