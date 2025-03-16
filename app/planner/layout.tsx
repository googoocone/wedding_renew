"use client";

import Menu from "@/components/planner/navigation/menu";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const navMenu = [
  { name: "홈", icon: '/planner/navigation/home.png', path: "/planner" },
  {name : "로드맵", icon: '/planner/navigation/roadmap.png', path: "/planner/roadmap"},
  {name : "가이드북", icon: '/planner/navigation/guidebook.png', path: "/planner/guidebook"},
  {name : "스케쥴러", icon: '/planner/navigation/scheduler.png', path: "/planner/scheduler"},
  {name : "웨딩홀", icon: '/planner/navigation/wedding-hall.png', path: "/planner/wedding-hall"},
  {name : "스튜디오", icon: '/planner/navigation/studio.png', path: "/planner/studio"},
  {name :"드레스" , icon: '/planner/navigation/wedding-dress.png', path: "/planner/dress"},
  {name : "메이크업", icon: '/planner/navigation/makeup.png', path: "/planner/makeup"},
  {name : "반지/예물", icon: '/planner/navigation/ring.png', path: "/planner/ring"},
  {name : "가전/가구", icon: '/planner/navigation/furniture.png', path: "/planner/furniture"},
];

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="w-full mt-[80px] flex items-center justify-start relative">
      {/* 모바일 메뉴 버튼 */}
      <button 
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`lg:hidden fixed left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-r-lg shadow-md z-50 ${isNavOpen ? 'hidden' : 'block'}`}
      >
        <IoMenu size={24} />
      </button>

      {/* 네비게이션 */}
      <div className={`fixed left-0 top-0 w-[290px] h-screen bg-[#f2f4f6] text-[16px] shadow-md flex flex-col px-5 items-center justify-start gap-1 transition-transform duration-300 ease-in-out z-40
        ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative`}>
        <div className="w-full h-[70px]"></div>
        <button className="w-full sm:hidden flex items-center justify-end" onClick={handleCloseNav}>X</button>
        <Menu name="홈" icon="/planner/navigation/home.png" path="/planner" onMenuClick={handleCloseNav}></Menu>
        <div className="w-full my-3 pl-2 text-left text-[#969696] font-semibold">웨딩 준비</div>
        <Menu name="로드맵" icon="/planner/navigation/roadmap.png" path="/planner/roadmap" onMenuClick={handleCloseNav}></Menu>
        <Menu name="가이드북" icon="/planner/navigation/guidebook.png" path="/planner/guidebook" onMenuClick={handleCloseNav}></Menu>
        <div className="w-full my-3 pl-2  text-left text-[#969696] font-semibold">웨딩 플레너</div>
        <Menu name="스케쥴러" icon="/planner/navigation/scheduler.png" path="/planner/scheduler" onMenuClick={handleCloseNav}></Menu>
        <Menu name="웨딩홀" icon="/planner/navigation/wedding-hall.png" path="/planner/wedding-hall" onMenuClick={handleCloseNav}></Menu>
        <Menu name="스튜디오" icon="/planner/navigation/studio.png" path="/planner/studio" onMenuClick={handleCloseNav}></Menu>
        <Menu name="드레스" icon="/planner/navigation/wedding-dress.png" path="/planner/dress" onMenuClick={handleCloseNav}></Menu>
        <Menu name="메이크업" icon="/planner/navigation/makeup.png" path="/planner/makeup" onMenuClick={handleCloseNav}></Menu>
        <Menu name="가전/가구" icon="/planner/navigation/furniture.png" path="/planner/furniture" onMenuClick={handleCloseNav}></Menu>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="w-full h-[100vh] ">{children}</div>

      {/* 오버레이 */}
      {isNavOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={handleCloseNav}
        ></div>
      )}
    </div>
  );
}

