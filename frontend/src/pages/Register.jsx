import React, { useState } from "react";
import Banner from "../components/Banner";
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  console.log(user);

  async function handleSubmit(e) {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/api/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSeller(e) {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  }

  return (
    <>
      <Banner name={"Register"} />

      <div className="contenedor mb-[10rem] ">
        <form className="grid grid-cols-2 gap-[5rem] " onSubmit={handleSubmit}>
          <div className="left">
            <h2 className="font-bold">Create a new account</h2>
            <label className="font-bold block mb-[1rem] " htmlFor="">
              Username
            </label>
            <input
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              name="username"
              type="text"
              placeholder="johndoe"
              onChange={handleChange}
            />
            <label className="font-bold block mb-[1rem] " htmlFor="">
              Email
            </label>
            <input
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <label className="font-bold block mb-[1rem] " htmlFor="">
              Password
            </label>
            <input
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              name="password"
              type="password"
              onChange={handleChange}
            />
            <label className="font-bold block mb-[1rem] " htmlFor="">
              Profile Picture
            </label>
            <input
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="font-bold block mb-[1rem] " htmlFor="">
              Country
            </label>
            <input
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              name="country"
              type="text"
              placeholder="Usa"
              onChange={handleChange}
            />
            <button
              className="bg-primary h-[5rem] text-white py-[1rem] w-full mt-[2rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 "
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="right">
            <h2 className="font-bold">I want to become a seller</h2>
            <div className="flex items-center gap-[3rem] mb-[1rem] ">
              <label className="font-bold block m-0  " htmlFor="">
                Activate the seller account
              </label>
              <input type="checkbox" onChange={handleSeller} />
            </div>
            <label className="font-bold block mb-[1rem]" htmlFor="">
              Phone Number
            </label>
            <input
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              name="phone"
              type="text"
              placeholder="+1 234 567 89"
              onChange={handleChange}
            />
            <label className="font-bold block mb-[1rem]" htmlFor="">
              Description
            </label>
            <textarea
              className="border w-full p-[1rem] mb-[1rem] rounded-xl  border-gray-300 border-[2px] "
              placeholder="A short description of yourself"
              name="desc"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
