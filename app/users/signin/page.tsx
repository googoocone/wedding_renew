"use client";

import { useSession, signIn } from "next-auth/react";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function SignInPage() {
  const { status } = useSession();

  return (
    <div className="max-w-xl mt-40 mx-auto pt-10 pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">
          로그인 또는 회원가입
        </h1>
        <hr className="w-[300px] mx-auto sm:w-full border-b-gray-300"></hr>
        <div className="text-center text-mdl md:text-2xl font-semibold">
          <span className="text-[#F6969A]">My Wedding Diary</span>에 오신것을
          환영합니다.
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-2">
        SNS 계정을 이용해서 로그인 또는 회원가입을 해주세요.
      </div>
      <div className="flex flex-col gap-5 mt-16">
        <button
          type="button"
          onClick={handleClickKakao}
          className="relative w-[300px] mx-auto  sm:w-full gap-4 border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
        >
          <RiKakaoTalkFill className="absolute text-2xl left-6 text-yellow-950 my-auto inset-y-0"></RiKakaoTalkFill>
          카카오 로그인 하기
        </button>
      </div>
    </div>
  );
}

const handleClickKakao = () => {
  try {
    signIn("kakao", { callbackUrl: "/" });
  } catch (e) {
    console.log(e);
  }
};
