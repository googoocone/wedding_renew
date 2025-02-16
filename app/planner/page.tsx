"use client";
import PlannerDashBoard from "@/components/planner/dashboard/PlannerDashBoard";
import { schedule } from "@/constants";
import { useState } from "react";

export default function Planner() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="mt-[80px] pt-[10px] sm:pt-[40px] w-full relative bg-gray-50/50">
      {/* 모바일: 네비게이션 토글 버튼 */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="w-8 h-20 fixed z-20 top-60 left-0 bg-[#fff2ec] text-[#e84500] rounded-tr-lg rounded-br-lg flex flex-col items-center justify-center"
        >
          <span className="block leading-none">m</span>
          <span className="block leading-none">e</span>
          <span className="block leading-none">n</span>
          <span className="block leading-none">u</span>
        </button>
      </div>

      <div className="max-w-[1400px] w-full flex items-start justify-center mx-auto relative bg-white">
        {/* 데스크톱: 항상 보이는 네비게이션 */}
        <div className="hidden sm:block w-[250px] h-[750px] border-r border-r-gray-100 ">
          {/* 여기에 네비게이션 내용 */}
          <div></div>
        </div>

        {/* 플래너 화면 */}
        <div className="w-full sm:w-[1150px] h-[750px]  ">
          <PlannerDashBoard data={schedule}></PlannerDashBoard>
        </div>

        {/* 모바일: 오프캔버스 네비게이션 */}
        <div
          className={`sm:hidden fixed inset-0 z-50 transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* 오버레이 */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsNavOpen(false)}
          ></div>
          {/* 네비게이션 패널 */}
          <div className="relative h-full w-[300px] bg-white border border-gray-200 rounded-tr-lg rounded-br-lg">
            <button
              onClick={() => setIsNavOpen(false)}
              className="absolute top-2 right-2 text-2xl font-bold"
            >
              ×
            </button>
            {/* 여기에 네비게이션 내용 */}
          </div>
        </div>
      </div>
    </div>
  );
}
