import React from "react";
import { Link } from "react-router-dom";

function Banner({ name, subtitle }) {
  return (
    <header className="px-[8rem] mb-[5rem]  ">
      <div className="banner rounded-3xl py-[16rem] relative">
        <div className="absolute inset-0 flex items-center rounded-3xl bg-[#000000a9]">
          <div className="contenedor">
            <h1 className="text-white font-bold">{name}</h1>
            <p className="text-white">
              <Link to={"/"}>Home</Link> - Services{" "}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
