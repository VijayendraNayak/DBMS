"use client";

import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isClosed, setIsClosed] = useState(false);
  const pathname = usePathname();

  const handleToggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-auto pl-2 pt-2 ${
        isClosed ? "w-16" : "flex"
      } flex-col bg-gradient-to-r from-purple-400 to-purple-600 text-white  transition-all duration-500`}
    >
      <div className={`flex flex-col gap-10 h-full `}>
        <div
          className={`font-bold text-xl flex items-center cursor-pointer p-2 rounded-2xl`}
          onClick={handleToggleSidebar}
        >
          <div className={`${isClosed ? "flex" : "hidden"}`}>
            <MdOutlineAlignHorizontalLeft />
          </div>{" "}
          <div>{!isClosed && "Inventory Management"}</div>
        </div>
        <div className="flex flex-col gap-4 ">
          <Link href="/pages/dashboard">
            <div
              className={`flex items-center font-semibold py-2 px-2 text-lg gap-2 cursor-pointer hover:font-extrabold ${
                isClosed && "justify-center"
              } ${pathname === "/pages/dashboard" ? "bg-white text-purple-600 rounded-l-full " : ""}`}
              
            >
              <IoHomeOutline /> {!isClosed && "Dashboard"}
            </div>
          </Link>
          <Link href="/pages/user">
            <div
              className={`flex items-center font-semibold py-2 px-2 text-lg gap-2 cursor-pointer hover:font-extrabold ${
                isClosed && "justify-center"
              } ${pathname === "/pages/user" ? "bg-white text-purple-600 rounded-l-full" : ""}`}
            >
              <FaUsers /> {!isClosed && "User"}
            </div>
          </Link>
          <Link href="/pages/brand">
            <div
              className={`flex items-center font-semibold py-2 px-2 text-lg gap-2 cursor-pointer hover:font-extrabold ${
                isClosed && "justify-center"
              } ${pathname === "/pages/brand" ? "bg-white text-purple-600 rounded-l-full" : ""}`}
            >
              <BiBuildings /> {!isClosed && "Brand"}
            </div>
          </Link>
          <Link href="/pages/product">
            <div
              className={`flex items-center font-semibold py-2 px-2 text-lg gap-2 cursor-pointer hover:font-extrabold ${
                isClosed && "justify-center"
              } ${pathname === "/pages/product" ? "bg-white text-purple-600 rounded-l-full" : ""}`}
            >
              <FaCartShopping /> {!isClosed && "Products"}
            </div>
          </Link>
          {/* Spacer to push the "Close" button to the bottom */}
          <div className="flex-grow"></div>
          <div
            className={`flex items-center font-semibold text-lg gap-2 fixed bottom-0 left-0 p-4 cursor-pointer hover:font-extrabold  ${
              isClosed && "hidden"
            }`}
            onClick={handleToggleSidebar}
          >
            <IoClose /> {!isClosed && "Close"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
