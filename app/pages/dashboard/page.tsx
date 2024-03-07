"use client";
import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/header"));
const BarCharts = dynamic(() => import("../../components/BarCharts"));
const LineCharts = dynamic(() => import("../../components/LineCharts"));
const PieCharts = dynamic(() => import("../../components/PieCharts"));

const Page = () => {
  return (
    <div className="bg-white relative">
      <Header />
      <div className="pl-20 flex gap-5">
        <div className="flex-1 flex-col">
          <div>
            <BarCharts />
          </div>
          <div>
            <LineCharts />
          </div>
        </div>
        <div className="flex-3">
          <PieCharts />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
