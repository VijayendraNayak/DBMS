import React from "react";
import { IoMdLogIn } from "react-icons/io";
import styles from "./page.module.css"; // Import a CSS module for keyframes
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className={`flex flex-1 pl-4 ${styles.fallAnimation}`}>
        <div className="flex justify-center flex-col gap-12">
          <div className="flex flex-col gap-4 ">
            <p className="uppercase text-7xl font-bold flex flex-col">
              <span className="text-black-400">Inventory</span>
              <span className="text-purple-600">management</span>
            </p>
            <p className="text-sm font-semibold">
              Efficiently tracking and managing goods to optimize stock levels
              and streamline operations.
            </p>
          </div>
          <Link href="/pages/login">
            <div className="text-2xl gap-3 flex items-center justify-center text-white font-semibold p-4 bg-gradient-to-r from-purple-300 to-purple-600 rounded-full w-[300px] hover:opacity-80">
              Login <IoMdLogIn />
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`pl-16 flex-1 flex justify-center items-center ${styles.imageAnimation}`}
      >
        <img
          src="https://imgtr.ee/images/2024/02/25/136584ef5cac02eff126594e3a577d0a.png"
          alt="Animated Inventory"
        ></img>
      </div>
    </div>
  );
};

export default Page;
