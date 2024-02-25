"use client"
import React, { useState } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Link from "next/link";
import "./login.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState<{ [key: string]: string }>({});
  const [isvisible, setIsvisible] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/verify_user", formdata);
      console.log("User verified successfully");
      router.push("/pages/dashboard");
    } catch (error) {
      console.log("Error verifying user: ", error);
    }
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const toggleEye = () => {
    isvisible ? setIsvisible(false) : setIsvisible(true);
  };
  return (
    <div className=" py-16 fadeIn">
      <div
        className="flex max-w-4xl mx-auto h-[450px] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            'url("https://imgtr.ee/images/2024/02/25/512b14c537f537e85d6417f7d35f3270.jpeg")',
        }}
      >
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center items-center flex-col gap-12">
          <p className="text-purple-500 text-3xl font-semibold">Login</p>
          <form action="" className="relative flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="shadow-lg rounded-full p-4 w-[400px] focus:outline-none"
                id="email"
                onChange={handleChange}
              />
              <div className="absolute top-2 right-0 p-4">
                <LuUserCircle2 />
              </div>
            </div>
            <div className="relative">
              <input
                type={isvisible?"text":"password"}
                placeholder="Password"
                className="shadow-lg rounded-full p-4 w-[400px] focus:outline-none"
                id="password"
                onChange={handleChange}
              />
              <div className="absolute top-2 right-0 p-4" onClick={toggleEye}>
                {isvisible ? <IoMdEye /> : <IoMdEyeOff />}
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-1">
              <button
                className="text-white text-lg  p-2 bg-gradient-to-r from-purple-300 to-purple-600 shadow-xl rounded-full font-semibold px-20 hover:opacity-80"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            <div className="flex justify-center items-center gap-1">
              <p className="text-sm">Don't have an account?</p>
              <Link href={"/pages/register"}>
                <span className="text-md text-purple-600 font-semibold cursor-pointer hover:text-purple-800">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
