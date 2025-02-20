"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "로그인 실패. 관리자만 접근 가능합니다.");
      }

      console.log("✅ 로그인 성공:", data);

      // ✅ adminToken 저장 후 /admin으로 이동
      localStorage.setItem("adminToken", data.token);
      router.push("/admin");
    } catch (err: any) {
      console.error("❌ 로그인 에러:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="w-full h-full mt-40 flex flex-col items-center justify-center gap-4">
      <h1>관리자 로그인</h1>
      <form
        onSubmit={handleLogin}
        className="border border-gray-100 flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border px-2 py-1"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border px-2 py-1"
        />
        <button type="submit" className="border px-2 py-1 bg-red-200">
          로그인
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
