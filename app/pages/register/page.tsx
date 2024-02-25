import React from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import Link from "next/link";
import './register.css'
const page = () => {
  return (
    <div className="py-16 fadeIn">
      <div
        className="flex max-w-4xl mx-auto h-[450px]  bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            'url("https://imgtr.ee/images/2024/02/25/512b14c537f537e85d6417f7d35f3270.jpeg")',
        }}
      >
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center items-center flex-col gap-12">
          <p className="text-purple-500 text-3xl font-semibold">Register</p>
          <form action="" className="relative flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="shadow-lg rounded-full p-4 w-[400px] focus:outline-none"
              />
              <div className="absolute top-2 right-0 p-4">
                <LuUserCircle2 />
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Password"
                className="shadow-lg rounded-full p-4 w-[400px] focus:outline-none"
              />
              <div className="absolute top-2 right-0 p-4">
                <IoLockClosedOutline />
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Confirm Password"
                className="shadow-lg rounded-full p-4 w-[400px] focus:outline-none"
              />
              <div className="absolute top-2 right-0 p-4">
                <IoLockClosedOutline />
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-1">
            <Link href={'/pages/dashboard'}>
            <button className="text-white text-lg  p-2 bg-gradient-to-r from-purple-300 to-purple-600 shadow-xl rounded-full font-semibold px-20 hover:opacity-80">
              Sign Up
            </button>
            </Link>
            <div className="flex justify-center items-center gap-1">
              <p className="text-sm">Have an account?</p>
              <Link href={'/pages/register'}>
              <span className="text-md text-purple-600 font-semibold cursor-pointer hover:text-purple-800">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
