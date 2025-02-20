"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

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

  if (!isAdmin) return <div>로딩 중...</div>;

  return (
    <div className="w-full mt-40">
      <h1>관리자 대시보드</h1>
      <p>관리자만 볼 수 있는 페이지입니다.</p>
    </div>
  );
}
