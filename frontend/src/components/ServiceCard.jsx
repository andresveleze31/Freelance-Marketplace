import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function ServiceCard({ item }) {
  return (
    <div className="rounded-3xl border">
      <div>
        <img
          className="rounded-t-3xl object-cover"
          src={item.img}
          alt="Service IMG"
        />
      </div>
      <div className="py-[1rem] px-[2rem] ">
        <div className="flex">
          <img
            className="w-[4rem] rounded-full h-[4rem] object-cover "
            src={item.pp}
            alt="Person Img"
          />
          <div className="pl-[1rem] ">
            <p className="text-[1.4rem] font-medium ">{item.username} </p>
            <p className="text-[1.4rem] font-medium text-lightGray ">
              New Seller{" "}
            </p>
          </div>
        </div>
        <Link className="line-clamp-2 mt-[1rem] hover:text-primary transition-all duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam
          officiis natus ducimus culpa enim reiciendis ratione cumque.
          Voluptatem dolor aliquam esse consequatur assumenda architecto amet
          sit illo qui totam?
        </Link>

        <div className="flex gap-[0.5rem] my-[2rem] ">
          {[1, 2, 3, 4, 5].map((num) => {
            if (num <= item.rating) {
              return <FaStar size={15} color="#fec810" />;
            } else {
              return <FaStar size={15} color="#d4d4d4" />;
            }
          })}
        </div>

        <div className=" border-t py-[1rem] ">
            <div className="flex justify-between">
                <p>Starting at</p>
                <p>${item.price}{".00"} </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
