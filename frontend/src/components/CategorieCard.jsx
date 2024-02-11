import React from "react";
import { Link } from "react-router-dom";

function CategorieCard({ item }) {
  return (
    <div className="flex flex-col  items-center w-[25rem] overflow-hidden h-[30rem] group  ">
      <Link to={"/gigs?cat=design"}>
        <div className=" h-[25rem] w-[25rem] relative overflow-hidden ">
          <div className="relative overflow-hidden">
            <img
              className="h-[25rem] group-hover:scale-110 transition-all duration-300  rounded-2xl w-[25rem] object-cover  "
              src={item.img}
              alt=""
            />
            <p className="absolute bottom-[4rem] left-5 font-bold text-white z-50">
              {item.desc}
            </p>
            <p className="absolute bottom-[1.5rem] left-5  text-white z-50">
              {item.title}
            </p>
          </div>
          <div className="absolute rounded-2xl overflow-hidden  inset-0 bg-gradient-to-b from-transparent to-[#000533]"></div>
        </div>
      </Link>
    </div>
  );
}

export default CategorieCard;
