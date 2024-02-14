import React, { useState } from "react";
import Banner from "../components/Banner";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await newRequest.post("/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <>
      <Banner name={"Login"} />

      <div className="contenedor flex justify-center">
        <form onSubmit={handleSubmit} className="mt-[7rem] mb-[10rem] w-2/3 ">
          <div className="mb-[2rem] ">
            <label className="block mb-[1rem] font-bold " htmlFor="username">
              Username
            </label>
            <input
              className="p-[1rem] border rounded-xl border-gray-300 border-[2px] w-full "
              id="username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-[2rem] ">
            <label className="block mb-[1rem] font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="p-[1rem] border rounded-xl border-gray-300 border-[2px] w-full "
              id="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <input
            className="bg-primary h-[5rem] text-white py-[1rem] px-[3rem] rounded-2xl hover:bg-customBlack cursor-pointer transition-all duration-300 "
            type="submit"
            value={"Login"}
          />
          {error && error}
        </form>
      </div>
    </>
  );
}

export default Login;
