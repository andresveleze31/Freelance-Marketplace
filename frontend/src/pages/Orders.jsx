import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";

function Orders() {

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="contenedor">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Orders</h2>
        <Link
          className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 "
          to={"/add"}
        >
          Add New Order
        </Link>
      </div>

      <main className="mb-[5rem] ">
        <table className="w-full ">
          <tr className="text-left border  border-customBlack">
            <th className=" py-[1rem] px-[2rem] ">Image</th>
            <th className=" py-[1rem] px-[2rem]">Title</th>
            <th className=" py-[1rem] px-[2rem]">Price</th>
            <th className=" py-[1rem] px-[2rem]">{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th className=" py-[1rem] px-[2rem]">Contact</th>
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
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem]">
              <IoMail color="#3681e4" size={25} />
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
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem]">
              <IoMail color="#3681e4" size={25} />
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
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem]">
              <IoMail color="#3681e4" size={25} />
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
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem]">
              <IoMail color="#3681e4" size={25} />
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
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem]">
              <IoMail color="#3681e4" size={25} />
            </td>
          </tr>
        </table>
      </main>
    </div>
  );
}

export default Orders;
