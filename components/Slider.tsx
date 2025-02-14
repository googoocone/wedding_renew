"use client"; // 반드시 추가

import { Swiper, SwiperSlide } from "swiper/react"; // 올바른 Swiper 모듈 가져오기
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper의 CSS 파일 추가

import Image from "next/image";

export default function MySwiper() {
  return (
    <Swiper
      spaceBetween={50}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true}
      slidesPerView={4}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[100px] "
    >
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/levirmore.png"}
            fill
            alt="르비르모어강남"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/laonjena.png"}
            fill
            alt="라온제나강남"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/noblevalenti.png"}
            fill
            alt="노블발렌티"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/sonofelice.png"}
            fill
            alt="소노펠리체"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/villadeamor.png"}
            fill
            alt="빌라드아모르"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/amorhouse.gif"}
            fill
            alt="아모르하우스"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[240px] h-[80px]  flex items-center justify-center shrink-0">
        <div className="w-[240px] h-[80px]  overflow-hidden  relative">
          <Image
            src={"/images/marysapril.png"}
            fill
            alt="메리스에이프럴"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
