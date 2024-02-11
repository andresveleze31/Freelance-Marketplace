import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import { GrBusinessService } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { MdDatasetLinked } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

function FeaturedExplore() {
  return (
    <div className="px-[8rem] mt-[10rem] ">
      <div className="hero rounded-3xl  py-[10rem]">
        <div className="contenedor">
          <h2 className="font-bold text-center">Explore the Marketplace</h2>

          <div className="grid grid-cols-3 gap-[3rem] pt-[2rem] ">
            <div className="bg-white rounded-3xl p-[3rem] flex gap-[4rem] items-center ">
              <IoMdAnalytics size={50} color="#FF5f00" />
              <h4 className="font-medium">Profit Planning</h4>
            </div>
            <div className="bg-white rounded-3xl p-[3rem] flex gap-[4rem] items-center ">
              <GrBusinessService size={50} color="#FF5f00" />
              <h4 className="font-medium">Business Analysis</h4>
            </div>
            <div className="bg-white rounded-3xl p-[3rem] flex gap-[4rem] items-center ">
              <TbReportSearch size={50} color="#FF5f00" />
              <h4 className="font-medium">Reports Analysis</h4>
            </div>
            <div className="bg-white rounded-3xl p-[3rem] flex gap-[4rem] items-center ">
              <PiProjectorScreenChartBold size={50} color="#FF5f00" />
              <h4 className="font-medium">Project Reporting</h4>
            </div>
            <div className="bg-white rounded-3xl p-[3rem] flex gap-[4rem] items-center ">
              <MdDatasetLinked size={50} color="#FF5f00" />
              <h4 className="font-medium">Data Tracking</h4>
            </div>
            <div className="bg-white rounded-3xl p-[3rem] flex gap-[4rem] items-center ">
              <RiCustomerService2Line size={50} color="#FF5f00" />
              <h4 className="font-medium">Customer Support</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedExplore;
