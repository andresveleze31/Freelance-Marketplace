import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import { projects } from "../data";
import ServiceCard from "../components/ServiceCard";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("createdAt");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/api/gigs?${search}&min=${
            minRef.current.value ? minRef.current.value : 0
          }&sort=${sort ? sort : "createdAt"}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  useEffect(() => {
    refetch();
  }, [sort]);

  const reSort = (type) => {
    setSort(type);
  };

  const apply = (e) => {
    e.preventDefault();
    refetch();
  };

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
          <form onSubmit={apply} className="flex gap-[2rem] " action="">
            <div className="flex gap-[2rem] items-center ">
              <label className="font-bold" htmlFor="">
                Budged
              </label>
              <input
                ref={minRef}
                className="p-[1rem] border border-gray-400 rounded-xl "
                type="number"
                placeholder="min"
              />
              <input
                ref={maxRef}
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
              onChange={(e) => {
                reSort(e.target.value);
              }}
              className="p-[1rem]  rounded-xl "
              id="miDropdown"
              name="miDropdown"
            >
              <option value="createdAt">Newest</option>
              <option value="sales">Best Selling</option>
            </select>
          </div>
        </div>

        <div className="grid mb-[5rem] grid-cols-4 gap-[3rem] mt-[4rem]  ">
          {isLoading
            ? "Loading..."
            : error
            ? "Something went wrong"
            : data.map((project) => {
                return <ServiceCard key={project._id} item={project} />;
              })}
        </div>
      </main>
    </>
  );
}

export default Gigs;
