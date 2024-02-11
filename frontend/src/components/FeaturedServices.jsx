import React from "react";
import { projects } from "../data";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

function FeaturedServices() {
  return (
    <div className="contenedor mt-[8rem] ">
      <h2 className="text-center font-bold pb-[4rem] ">
        Top Featured Services
      </h2>

      <div className="grid grid-cols-4 gap-[3rem] ">
        {projects.map((project) => {
          return <ServiceCard item={project} />;
        })}
      </div>

      <div className="mt-[5rem] flex justify-center ">
        <Link className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
          All Services
        </Link>
      </div>
    </div>
  );
}

export default FeaturedServices;
