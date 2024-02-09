import React, { useState } from "react";

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
        <img src="../../public/img/logo.png" alt="Logo" />

        <nav className="flex gap-[2rem] items-center ">
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
              <p className="cursor-pointer font-medium">{currentUser?.username}</p>
              {open && (
                <div className="absolute top-[6rem] right-0 p-[2rem] bg-white border border-[1px] rounded-xl flex flex-col text-lightGray w-[20rem] ">
                  {currentUser?.isSeller && (
                    <>
                      <a
                        className="font-medium hover:text-primary transition-all duration-300"
                        href=""
                      >
                        Gigs
                      </a>
                      <a
                        className="font-medium hover:text-primary transition-all duration-300"
                        href=""
                      >
                        Add New Gig
                      </a>
                    </>
                  )}
                  <a
                    className="font-medium hover:text-primary transition-all duration-300"
                    href=""
                  >
                    Orders
                  </a>
                  <a
                    className="font-medium hover:text-primary transition-all duration-300"
                    href=""
                  >
                    Messages
                  </a>
                  <a
                    className="font-medium hover:text-primary transition-all duration-300"
                    href=""
                  >
                    Logout
                  </a>
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
