import React from "react";
import Banner from "../components/Banner";
import { projects } from "../data";
import ServiceCard from "../components/ServiceCard";

function Gigs() {
  return (
    <>
      <Banner name={"Amazing Services"} />
      <main className="contenedor">
        <p className="text-lightGray">PROHIRE - GRAPHICS & DESIGN</p>
        <h2 className="font-bold">AI Artist</h2>
        <p className="text-lightGray">
          Explore the boundaries of art and technology with AI Artist
        </p>

        <div className="flex justify-between items-center my-[2rem] ">
          <form className="flex gap-[2rem] " action="">
            <div className="flex gap-[2rem] items-center ">
              <label className="font-bold" htmlFor="">
                Budged
              </label>
              <input
                className="p-[1rem] border border-gray-400 rounded-xl "
                type="number"
                placeholder="min"
              />
              <input
                className="p-[1rem] border border-gray-400 rounded-xl "
                type="number"
                placeholder="max"
              />
            </div>
            <input
              className="py-[1rem] px-[2rem] rounded-xl bg-primary text-white hover:bg-customBlack transition-all duration-300 cursor-pointer"
              type="submit"
              value={"Apply"}
            />
          </form>

          <div className="flex gap-[2rem]  items-center">
            <label className="font-bold" for="miDropdown">
              Selecciona una opción:
            </label>
            <select
              className="p-[1rem]  rounded-xl "
              id="miDropdown"
              name="miDropdown"
            >
              <option value="newest">Newest</option>
              <option value="bestselling">Best Selling</option>
            </select>
          </div>
        </div>

        <div className="grid mb-[5rem] grid-cols-4 gap-[3rem] mt-[4rem]  ">
          {projects.map((project) => {
            return <ServiceCard item={project} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Gigs;
