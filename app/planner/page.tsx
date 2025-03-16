"use client";
import PlannerDashBoard from "@/components/planner/dashboard/PlannerDashBoard";
import { schedule } from "@/constants";
import { useState } from "react";

export default function Planner() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-[1250px]  pb-20 flex  items-center justify-center">
      {/* 메인 컨텐츠 */}
      <div className="w-full  flex flex-col items-center  justify-center gap-5">
        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-full text-[24px] font-semibold">노남주님</div>
          <div className="w-full text-[24px] font-semibold">안녕하세요!😊</div>
        </div>
        <div className="w-full h-[120px] bg-[#ffe3dd] rounded-lg"></div>
        <div className="w-full h-[540px] bg-gray-200 rounded-lg"></div>
        <div className="w-full h-[430px] bg-[#ffe3dd] rounded-lg"></div>
        <div className="w-full h-[140px] bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
