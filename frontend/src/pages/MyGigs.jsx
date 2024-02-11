import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function MyGigs() {
  return (
    <>
      <div className="contenedor">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Gigs</h2>
          <Link
            className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 "
            to={"/add"}
          >
            Add New Gig
          </Link>
        </div>

        <main className="mb-[5rem] ">
          <table className="w-full ">
            <tr className="text-left border  border-customBlack">
              <th className=" py-[1rem] px-[2rem] ">Image</th>
              <th className=" py-[1rem] px-[2rem]">Title</th>
              <th className=" py-[1rem] px-[2rem]">Price</th>
              <th className=" py-[1rem] px-[2rem]">Sales</th>
              <th className=" py-[1rem] px-[2rem]">Action</th>
            </tr>
            <tr className="border border-customBlack">
              <td className=" py-[1rem] px-[2rem] ">
                <img
                  className="w-[10rem] object-cover "
                  src="../../public/img/gig-1.jpg"
                  alt="Gig IMG"
                />
              </td>
              <td className=" py-[1rem] px-[2rem]">Gig 1</td>
              <td className=" py-[1rem] px-[2rem]">88</td>
              <td className=" py-[1rem] px-[2rem]">123</td>
              <td className=" py-[1rem] px-[2rem]">
                <MdDelete color="red" size={25} />
              </td>
            </tr>
            <tr className="border border-customBlack">
              <td className=" py-[1rem] px-[2rem] ">
                <img
                  className="w-[10rem] object-cover "
                  src="../../public/img/gig-1.jpg"
                  alt="Gig IMG"
                />
              </td>
              <td className=" py-[1rem] px-[2rem]">Gig 1</td>
              <td className=" py-[1rem] px-[2rem]">88</td>
              <td className=" py-[1rem] px-[2rem]">123</td>
              <td className=" py-[1rem] px-[2rem]">
                <MdDelete color="red" size={25} />
              </td>
            </tr>
            <tr className="border border-customBlack">
              <td className=" py-[1rem] px-[2rem] ">
                <img
                  className="w-[10rem] object-cover "
                  src="../../public/img/gig-1.jpg"
                  alt="Gig IMG"
                />
              </td>
              <td className=" py-[1rem] px-[2rem]">Gig 1</td>
              <td className=" py-[1rem] px-[2rem]">88</td>
              <td className=" py-[1rem] px-[2rem]">123</td>
              <td className=" py-[1rem] px-[2rem]">
                <MdDelete color="red" size={25} />
              </td>
            </tr>
            <tr className="border border-customBlack">
              <td className=" py-[1rem] px-[2rem] ">
                <img
                  className="w-[10rem] object-cover "
                  src="../../public/img/gig-1.jpg"
                  alt="Gig IMG"
                />
              </td>
              <td className=" py-[1rem] px-[2rem]">Gig 1</td>
              <td className=" py-[1rem] px-[2rem]">88</td>
              <td className=" py-[1rem] px-[2rem]">123</td>
              <td className=" py-[1rem] px-[2rem]">
                <MdDelete color="red" size={25} />
              </td>
            </tr>
            <tr className="border border-customBlack">
              <td className=" py-[1rem] px-[2rem] ">
                <img
                  className="w-[10rem] object-cover "
                  src="../../public/img/gig-1.jpg"
                  alt="Gig IMG"
                />
              </td>
              <td className=" py-[1rem] px-[2rem]">Gig 1</td>
              <td className=" py-[1rem] px-[2rem]">88</td>
              <td className=" py-[1rem] px-[2rem]">123</td>
              <td className=" py-[1rem] px-[2rem]">
                <MdDelete color="red" size={25} />
              </td>
            </tr>
          </table>
        </main>
      </div>
    </>
  );
}

export default MyGigs;
