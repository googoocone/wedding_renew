"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DiscountQuoteRegister from "./components/DiscountQuoteRegister";
import ManagementMember from "./components/ManagementMemeber";
import WeddingHallRegister from "./components/WeddingHallRegister";

import cn from "classnames";

export default function AdminPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectMenu, setSelectMenu] = useState("");

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        router.replace("/admin/login");
        return;
      }

      try {
        // ✅ API 호출로 토큰 검증
        const res = await fetch("/api/admin/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("❌ 관리자 인증 실패: 로그인 페이지로 이동");
          localStorage.removeItem("adminToken"); // ✅ 토큰 삭제
          router.replace("/admin/login");
        } else {
          console.log("✅ 관리자 인증 성공");
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("❌ 서버 오류 발생:", error);
        router.replace("/admin/login");
      }
    };

    checkAdmin();
  }, [router]);

  const renderComponent = () => {
    if (selectMenu === "registerWeddingHall") {
      return <WeddingHallRegister></WeddingHallRegister>;
    } else if (selectMenu === "registerDiscountQuote") {
      return <DiscountQuoteRegister></DiscountQuoteRegister>;
    } else {
      return <ManagementMember></ManagementMember>;
    }
  };

  if (!isAdmin) return <div>로딩 중...</div>;

  return (
    <div className="w-full mt-20 flex flex-col items-center justify-center ">
      <h1>관리자 대시보드</h1>
      <p>관리자만 볼 수 있는 페이지입니다.</p>
      <div className="w-full mt-4 flex items-center justify-center gap-8">
        <button
          onClick={() => setSelectMenu("registerWeddingHall")}
          className={cn(
            "px-2 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-slate-300",
            {
              "bg-slate-500 text-white": selectMenu === "registerWeddingHall",
            }
          )}
        >
          웨딩홀 등록
        </button>
        <button
          onClick={() => setSelectMenu("registerDiscountQuote")}
          className={cn(
            "px-2 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-slate-300",
            {
              "bg-slate-500 text-white": selectMenu === "registerDiscountQuote",
            }
          )}
        >
          할인 견적 등록
        </button>
        <button
          onClick={() => setSelectMenu("managementMember")}
          className={cn(
            "px-2 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-slate-300",
            {
              "bg-slate-500 text-white": selectMenu === "managementMember",
            }
          )}
        >
          회원 관리
        </button>
      </div>
      <div className="w-full mt-8">{renderComponent()}</div>
    </div>
  );
}
