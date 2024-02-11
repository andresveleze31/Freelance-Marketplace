import React from "react";
import { Link } from "react-router-dom";

function Message() {
  return (
    <div className=" contenedor">
      <h2 className="font-bold">Messages</h2>

      <p className="text-lightGray uppercase">
        <Link to={"/messages"}>MESSAGES</Link> - JOHN DOE
      </p>

      <div className="h-[50rem] mt-[2rem]  overflow-y-scroll border-b">
        <div className="flex gap-[2rem] my-[3rem]  ">
          <img
            className="rounded-full w-[5rem] object-cover h-[5rem] "
            src="../../public/img/profile.jpg"
            alt="Profile Pic"
          />
          <p className="bg-slate-200 rounded-r-3xl rounded-bl-3xl p-[2rem] max-w-[60rem] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            dignissimos id. Excepturi ipsam necessitatibus eum expedita libero
            ut nihil ullam aspernatur, quia odit accusamus, voluptatum maxime
            blanditiis error totam. Quo?
          </p>
        </div>

        <div className="flex gap-[2rem] my-[3rem] flex-row-reverse ">
          <img
            className="rounded-full w-[5rem] object-cover h-[5rem] "
            src="../../public/img/profile.jpg"
            alt="Profile Pic"
          />
          <p className="bg-primary rounded-l-3xl text-white rounded-br-3xl p-[2rem] max-w-[60rem] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            dignissimos id. Excepturi ipsam necessitatibus eum expedita libero
            ut nihil ullam aspernatur, quia odit accusamus, voluptatum maxime
            blanditiis error totam. Quo?
          </p>
        </div>
        <div className="flex gap-[2rem] my-[3rem]  ">
          <img
            className="rounded-full w-[5rem] object-cover h-[5rem] "
            src="../../public/img/profile.jpg"
            alt="Profile Pic"
          />
          <p className="bg-slate-200 rounded-r-3xl rounded-bl-3xl p-[2rem] max-w-[60rem] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            dignissimos id. Excepturi ipsam necessitatibus eum expedita libero
            ut nihil ullam aspernatur, quia odit accusamus, voluptatum maxime
            blanditiis error totam. Quo?
          </p>
        </div>

        <div className="flex gap-[2rem] my-[3rem] flex-row-reverse ">
          <img
            className="rounded-full w-[5rem] object-cover h-[5rem] "
            src="../../public/img/profile.jpg"
            alt="Profile Pic"
          />
          <p className="bg-primary rounded-l-3xl text-white rounded-br-3xl p-[2rem] max-w-[60rem] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            dignissimos id. Excepturi ipsam necessitatibus eum expedita libero
            ut nihil ullam aspernatur, quia odit accusamus, voluptatum maxime
            blanditiis error totam. Quo?
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-[5rem] my-[5rem] ">
        <textarea
          className="w-full p-[2rem] border rounded-3xl "
          placeholder="Write a Message"
          cols="30"
          rows="6"
        ></textarea>
        <button className="bg-primary h-[5rem] text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 ">
          Send
        </button>
      </div>
    </div>
  );
}

export default Message;
