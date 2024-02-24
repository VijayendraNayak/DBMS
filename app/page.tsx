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
            <a className="text-2xl gap-3 flex items-center justify-center text-white font-semibold p-4 bg-gradient-to-r from-black to-purple-500 rounded-full w-[300px] hover:opacity-80">
              Login <IoMdLogIn />
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center items-center ${styles.imageAnimation}`}
      >
        <img
          src="https://imgs.search.brave.com/SuXH4PZLkIBTmN7PqOxLLPDF9zuNhAkAGllgOSxSOK4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MTAwNzE4NS92aWRl/by9zaG9wcGluZy1z/dG9yZS1idWlsZGlu/Zy1saW5lLWNvbmNl/cHQtYW5pbWF0aW9u/LmpwZz9zPTY0MHg2/NDAmaz0yMCZjPXE0/OWM2TGZCZHhxR3h5/eXAwQnhsdDBTUDJo/cnpDemFObG84X1Fs/OGx4SHc9"
          alt="Animated Inventory"
        ></img>
      </div>
    </div>
  );
};

export default Page;
