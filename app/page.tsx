import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mt-[80px] flex flex-col items-center justify-start">
      <div className="w-full h-[40px] md:h-[80px] bg-gray-200 text-black/70 flex items-center justify-center text-sm md:text-xl">
        💕
        <span className="font-semibold mx-2">
          예신 신랑 신부가 할인 받은{" "}
        </span>{" "}
        웨딩홀 견적서를 볼 수 있어요!
      </div>
      <div className=" bg-[url('/images/bg-blur.svg')] bg-[length:1000px_1000px] bg-no-repeat bg-center flex flex-col h-[800px] gap-10  items-center justify-center w-full px-[40px] md:px-[80px] mx-auto">
        <div className="text-4xl text-center font-semibold text-black/70 mb-10">
          결혼 준비에 필요한 <br />
          모든것들이 다 있어요.
        </div>
        <div className="w-[400px] max-w-[450px] flex flex-col items-center justify-center gap-4">
          <div className="py-7 w-full flex items-center justify-center text-xl cursor-pointer rounded-2xl font-semibold bg-white hover:bg-[#FC9696] ">
            ❤️ 웨딩홀 투어
          </div>
          <div className="py-7 w-full flex items-center justify-center text-xl cursor-pointer rounded-2xl font-semibold  bg-white hover:bg-[#FC9696]">
            💕 할인받은 웨딩홀 견적서
          </div>
          <div className="py-7 w-full flex items-center justify-center text-xl cursor-pointer rounded-2xl font-semibold  bg-white hover:bg-[#FC9696]">
            📕 웨딩 스케쥴러
          </div>
          <div className="py-7 w-full flex items-center justify-center text-xl cursor-pointer rounded-2xl font-semibold  bg-white hover:bg-[#FC9696]">
            🎀 웨딩 로드맵{" "}
          </div>
          <div className="py-7 w-full flex items-center justify-center text-xl cursor-pointer rounded-2xl font-semibold  bg-white hover:bg-[#FC9696]">
            🎀 모바일 청첩장
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] mt-10 flex flex-col items-center justify-center gap-10 bg-transparent">
        <div className="text-2xl font-semibold text-center text-black/60">
          지금 바로 확인할 수 있는 웨딩홀 견적
        </div>
        <div className="w-full md:w-[1200px] h-[150px] mx-auto">
          <Slider />
        </div>
      </div>
      <div className="w-full h-[650px] flex items-center justify-center bg-[#F7F8F8] ">
        <div className="w-[400px] h-[500px]">
          <Image
            src={"/images/home-mobile-1.png"}
            width={400}
            height={470}
            alt="웨딩홀 상세 견적서 모바일"
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="w-[550px] flex flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold mb-5">예비 신랑 신부님들의</h2>
          <h2 className="text-5xl font-semibold mb-12">
            <span className="text-red-300">시간과 노력</span>을 아껴드려요
          </h2>

          <h3 className="text-xl">
            <span className="font-semibold">
              대관료, 식대, 주차, 보증인원, 상세옵션과 패키지
            </span>
            까지
          </h3>
          <h3 className="text-xl">이제는 집에서 편하게 검색만 하세요.</h3>
        </div>
      </div>
      <div className="w-[1200px] h-[650px] flex items-center justify-center bg-[#white] ">
        <div className="w-[580px] flex flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold mb-5">예비 신랑 신부님들의</h2>
          <h2 className="text-5xl font-semibold mb-12">
            <span className="text-red-300">결혼식 비용</span>을 아껴드릴게요
          </h2>

          <h3 className="text-xl">
            웨딩홀 투어를 가기 전,{" "}
            <span className="font-semibold">할인 견적서</span>들을 확인해야
          </h3>
          <h3 className="text-xl">내 지갑을 지킬 수 있어요!</h3>
        </div>
        <div className="w-[400px] h-[500px]">
          <Image
            src={"/images/home-mobile-1.png"}
            width={400}
            height={470}
            alt="웨딩홀 상세 견적서 모바일"
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </div>
      <div></div>
    </div>
  );
}
