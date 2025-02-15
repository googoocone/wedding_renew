"use client";

import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isMenu, setIsMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { status, data } = useSession();
  const [clickProfile, setClickProfile] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  const navList = [
    { name: "홈", url: "/" },
    { name: "웨딩홀 투어", url: "/halltour" },
    { name: "플래너", url: "/planner" },
    { name: "모바일 청첩장", url: "/invitation" },
    { name: "프리미엄", url: "/premium" },
  ];

  // 콘솔에 상태 값 확인
  const handleProfile = () => {
    setClickProfile((prev) => !prev);
  };

  return (
    <>
      {/* 데스크탑 네비게이션 */}

      <div
        className={`w-full bg-white px-[80px] fixed top-0 z-50 ${
          hasScrolled ? "border-b border-gray-100" : ""
        }`}
      >
        <div className="hidden max-w-[1400px] h-[80px] sm:flex items-center justify-between mx-auto px-[40px] lg:px-[80px] bg-white z-50">
          <div className="w-[200px] h-full flex items-center font-bold text-xl">
            <Link href={"/"}>
              <Image src={"/logo2.svg"} width={100} height={50} alt="logo" />
            </Link>
          </div>

          <div className="hidden min-[1100px]:flex w-[500px] h-full  items-center justify-center">
            <ul className="flex space-x-8 text-lg font-medium">
              {navList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="hover:text-gray-600 transition text-[16px] font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[200px] h-full flex items-center justify-end">
            <ul className="flex space-x-4 text-lg font-medium">
              {status === "authenticated" ? (
                // 로그인 상태면 "hi"로 표시
                <div
                  onClick={handleProfile}
                  className="relative cursor-pointer w-full h-full flex items-center justify-center gap-4"
                >
                  <img
                    src={data?.user?.image as string}
                    alt="user profile"
                    className="w-8 h-8 rounded-full"
                  ></img>
                  <span className="text-sm">
                    {data.user.name}님 환영합니다!
                  </span>
                  {clickProfile && (
                    <div className="absolute top-10 flex flex-col text-sm  cursor-pointer bg-white w-[200px] h-[100px] border border-gray-300">
                      <Link href={"/users/myInfo"}>
                        <div className="w-full h-[50px] flex items-center justify-center   hover:bg-gray-100">
                          내정보
                        </div>
                      </Link>

                      <div
                        onClick={() => signOut()}
                        className="w-full h-[50px] flex items-center justify-center hover:bg-gray-100"
                      >
                        로그아웃
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // 인증되지 않은 상태면 "로그인" 버튼 표시
                <li className="px-2 py-1 rounded-md bg-[#fff2ec] text-[#e84500] font-semibold">
                  <a
                    href={"/users/signin"}
                    className="hover:text-gray-600 transition text-sm flex items-center justify-center"
                  >
                    로그인
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* 모바일 네비게이션 - 상단에 고정 */}
      <div className="sm:hidden fixed top-0 bg-white left-0 w-full z-50">
        {/* 상단 헤더 영역: 로고 + 햄버거 버튼 */}
        <div
          className={`w-full h-[55px] flex items-center justify-between px-5 py-2 bg-white ${
            hasScrolled ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="font-bold text-xl relative h-[30px] w-[80px]">
            <Link href={"/"}>
              <Image src={"/logo2.svg"} fill alt="logo" />
            </Link>
          </div>
          <button
            onClick={() => setIsMenu(!isMenu)}
            className="text-gray-800 focus:outline-none"
          >
            {!isMenu ? <Menu size={32} /> : <X size={32} />}
          </button>
        </div>

        {/* 드롭다운 메뉴 영역 */}
        {isMenu && (
          <div
            className={`w-full flex flex-col justify-between h-screen pb-[100px]`}
          >
            <ul className="flex flex-col space-y-6 p-5">
              {navList.map((item, index) => (
                <a
                  href={item.url}
                  className="text-lg font-medium hover:text-gray-600 transition"
                >
                  <li key={index}>{item.name}</li>
                </a>
              ))}
            </ul>
            <ul className="flex flex-col space-y-4 p-5">
              {status === "authenticated" ? (
                <>
                  <li>
                    <a
                      href={"/users/signin"}
                      className="block px-4 py-2 text-center text-[#e84500] bg-[#fff2ec] rounded-md font-semibold hover:text-gray-600 transition"
                    >
                      내정보
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/users/signin"}
                      className="block px-4 py-2 text-center text-[#e84500] bg-[#fff2ec] rounded-md font-semibold hover:text-gray-600 transition"
                    >
                      로그아웃
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a
                    href={"/users/signin"}
                    className="block px-4 py-2 text-center text-[#e84500] bg-[#fff2ec] rounded-md font-semibold hover:text-gray-600 transition"
                  >
                    로그인
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
