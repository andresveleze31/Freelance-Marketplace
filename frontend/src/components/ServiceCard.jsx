import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function ServiceCard({ item }) {
  console.log(item.userId);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    newRequest.get(`/api/users/${item.userId}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
      setError(false);
    });
  }, []);

  return (
    <div className="rounded-3xl border">
      <div>
        <img
          className="rounded-t-3xl object-cover"
          src={item.cover}
          alt="Service IMG"
        />
      </div>
      <div className="py-[1rem] px-[2rem] ">
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="flex">
            <img
              className="w-[4rem] rounded-full h-[4rem] object-cover "
              src={data.img || "/img/no_profile.png"}
              alt="Person Img"
            />
            <div className="pl-[1rem] ">
              <p className="text-[1.4rem] font-medium ">{data.username} </p>
              <p className="text-[1.4rem] font-medium text-lightGray ">
                {item.cat}{" "}
              </p>
            </div>
          </div>
        )}
        <Link
          to={`/gig/${item._id}`}
          className="line-clamp-2 mt-[1rem] hover:text-primary transition-all duration-300"
        >
          {item.desc}
        </Link>

        <div className="flex gap-[0.5rem] my-[2rem] ">
          {[1, 2, 3, 4, 5].map((num) => {
            if (num <= item.totalStars) {
              return <FaStar size={15} color="#fec810" />;
            } else {
              return <FaStar size={15} color="#d4d4d4" />;
            }
          })}
        </div>

        <div className=" border-t py-[1rem] ">
          <div className="flex justify-between">
            <p>Starting at</p>
            <p>
              ${item.price}
              {".00"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
