import React from "react";

function FeaturedSolutions() {
  return (
    <div className="contenedor grid grid-cols-2 items-center py-[15rem] gap-[5rem]  ">
      <div className="relative h-[55rem] ">
        <div className="absolute rounded-xl bg-white shadow-lg top-0 left-0 p-[1rem] ">
          <img src="../../public/img/about-one.png" alt="About One" />
        </div>
        <div className="absolute rounded-xl bg-white shadow-lg bottom-0 right-0 p-[1rem] ">
          <img src="../../public/img/about-two.png" alt="About One" />
        </div>
        <div className="absolute rounded-full bg-white shadow-lg bottom-[12rem] left-[-4rem] p-[1rem] ">
          <img
            className="rounded-full"
            src="../../public/img/shape-1.png"
            alt="About One"
          />
        </div>
      </div>

      <div>
        <h2 className="font-bold">
          We Provide Best Solution For Your Business
        </h2>
        <p className="text-lightGray leading-[3rem] ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <div className="mt-[2.5rem] ">
          <ul className="list-disc pl-[2rem] ">
            <li className="font-bold">Quality Control System</li>
            <p className="text-lightGray leading-[3rem]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
            </p>
          </ul>
          <ul className="list-disc pl-[2rem] mt-[2rem] ">
            <li className="font-bold">Highly Professional Staff</li>
            <p className="text-lightGray leading-[3rem]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSolutions;
