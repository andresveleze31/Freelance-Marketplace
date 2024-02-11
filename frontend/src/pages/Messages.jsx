import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";

function Messages() {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="contenedor">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Messages</h2>
      </div>

      <main className="mb-[5rem] ">
        <table className="w-full ">
          <tr className="text-left border  border-customBlack">
            <th className=" py-[1rem] px-[2rem] ">Buyer</th>
            <th className=" py-[1rem] px-[2rem]">Last Message</th>
            <th className=" py-[1rem] px-[2rem]">Date</th>
            <th className=" py-[1rem] px-[2rem]">Action</th>
          </tr>
          <tr className="border border-customBlack">
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem] ">
              <Link to={"/message/123"}>
                <p className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita eius suscipit ab ad quis obcaecati eaque blanditiis
                  error nam molestiae consequuntur exercitationem, maiores
                  reprehenderit cumque fuga. Consequuntur qui beatae quam!
                </p>
              </Link>
            </td>
            <td className=" py-[1rem] px-[2rem]">1 day ago</td>
            <td className=" py-[1rem] px-[2rem] ">
              <button className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="border border-customBlack">
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem] ">
              <Link to={"/message/123"}>
                <p className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita eius suscipit ab ad quis obcaecati eaque blanditiis
                  error nam molestiae consequuntur exercitationem, maiores
                  reprehenderit cumque fuga. Consequuntur qui beatae quam!
                </p>
              </Link>
            </td>
            <td className=" py-[1rem] px-[2rem]">1 day ago</td>
            <td className=" py-[1rem] px-[2rem] ">
              <button className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="border border-customBlack">
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem] ">
              <Link to={"/message/123"}>
                <p className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita eius suscipit ab ad quis obcaecati eaque blanditiis
                  error nam molestiae consequuntur exercitationem, maiores
                  reprehenderit cumque fuga. Consequuntur qui beatae quam!
                </p>
              </Link>
            </td>
            <td className=" py-[1rem] px-[2rem]">1 day ago</td>
            <td className=" py-[1rem] px-[2rem] ">
              <button className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="border border-customBlack">
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem] ">
              <Link to={"/message/123"}>
                <p className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita eius suscipit ab ad quis obcaecati eaque blanditiis
                  error nam molestiae consequuntur exercitationem, maiores
                  reprehenderit cumque fuga. Consequuntur qui beatae quam!
                </p>
              </Link>
            </td>
            <td className=" py-[1rem] px-[2rem]">1 day ago</td>
            <td className=" py-[1rem] px-[2rem] ">
              <button className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="border border-customBlack">
            <td className=" py-[1rem] px-[2rem]">John Doe</td>
            <td className=" py-[1rem] px-[2rem] ">
              <Link to={"/message/123"}>
                <p className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita eius suscipit ab ad quis obcaecati eaque blanditiis
                  error nam molestiae consequuntur exercitationem, maiores
                  reprehenderit cumque fuga. Consequuntur qui beatae quam!
                </p>
              </Link>
            </td>
            <td className=" py-[1rem] px-[2rem]">1 day ago</td>
            <td className=" py-[1rem] px-[2rem] ">
              <button className="bg-primary text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
                Mark as Read
              </button>
            </td>
          </tr>
        </table>
      </main>
    </div>
  );
}

export default Messages;
