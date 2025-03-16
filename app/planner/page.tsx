"use client";
import PlannerDashBoard from "@/components/planner/dashboard/PlannerDashBoard";
import { schedule } from "@/constants";
import { useState } from "react";

export default function Planner() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-full mt-20 flex items-center justify-center">

      {/* 메인 컨텐츠 */}
      <div>HOME</div>
    </div>
  );
}
