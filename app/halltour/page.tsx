"use client";
import {
  selectedFlowerAtom,
  selectedRegionAtom,
  selectedSubRegionAtom,
  selectedWeddingTypeAtom,
} from "@/atom";
import HallCard from "@/components/halltour/HallCard";
import HallFilter from "@/components/halltour/HallFilter";
import HallSwiper from "@/components/halltour/HallSwiper";
import HallViewed from "@/components/halltour/HallViewed";
import MobileHallFilter from "@/components/halltour/MobileHallFilter";
import { weddingHallList } from "@/constants";
import { useAtom } from "jotai";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";

const hotKeywords = ["르비르모어", "아모르하우스", "더채플엣논현", "w웨딩"];

export default function Halltour() {
  const [selectedRegion] = useAtom(selectedRegionAtom);
  const [selectedSubRegion] = useAtom(selectedSubRegionAtom);
  const [selectedWeddingType] = useAtom(selectedWeddingTypeAtom);
  const [selectedFlower] = useAtom(selectedFlowerAtom);

  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredWeddingHalls =
    appliedSearchTerm.trim() !== ""
      ? weddingHallList.filter((hall) =>
          hall.name.toLowerCase().includes(appliedSearchTerm.toLowerCase())
        )
      : weddingHallList.filter((hall) => {
          const regionMatch = hall.locationType[0] === selectedRegion;
          const subRegionMatch = selectedSubRegion
            ? hall.locationType.includes(selectedSubRegion)
            : true;
          let weddingTypeMatch = true;
          if (selectedWeddingType !== "전체") {
            weddingTypeMatch = hall.hallType
              .flatMap((item) => item.split(","))
              .map((item) => item.trim())
              .includes(selectedWeddingType);
          }
          const flowerMatch =
            selectedFlower === "전체" ||
            (hall.flower && hall.flower.includes(selectedFlower));

          return (
            regionMatch && subRegionMatch && weddingTypeMatch && flowerMatch
          );
        });

  const handleSearch = () => {
    setAppliedSearchTerm(searchTerm);
  };

  return (
    <div className="mt-[80px] w-full">
      {/* 검색창 부분 */}
      <div className="w-full sm:w-[1400px] max-w-full h-[90px] px-4 sm:px-[80px] mx-auto flex flex-col items-center justify-center bg-white">
        <div className="w-full sm:w-[500px] h-[40px] border rounded-full flex items-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="flex-1 h-full rounded-full focus:outline-none pl-4"
            placeholder="웨딩홀을 입력해주세요"
            type="text"
          />
          <AiOutlineSearch
            onClick={handleSearch}
            className="text-xl mr-4 cursor-pointer"
          />
        </div>
        <div className="w-full sm:w-[500px] h-[40px] flex items-center overflow-hidden">
          <div className="text-xs sm:text-sm text-black/80 font-semibold px-3">
            인기 검색어
          </div>
          {hotKeywords.map((item, index) => (
            <div key={index} className="text-xs sm:text-sm text-gray-500 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 슬라이드 부분 */}
      <HallSwiper />

      {/* 모바일 필터 버튼 */}
      <button
        onClick={() => setMobileFilterOpen(true)}
        className="sm:hidden ml-3 mt-3 px-3 py-1.5 bg-gray-200 rounded-full flex items-center justify-center gap-2"
      >
        <GiSettingsKnobs /> 필터
      </button>

      {/* 모바일 필터 모달 */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-4 rounded-lg relative">
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ×
            </button>
            <MobileHallFilter onClose={() => setMobileFilterOpen(false)} />
          </div>
        </div>
      )}

      {/* 컨텐츠 부분 */}
      <div className="w-[1400px] mt-3 max-w-full flex items-start justify-center mx-auto">
        {/* 데스크톱 필터는 좌측에 항상 보임 */}
        <div className="hidden lg:block">
          <HallFilter />
        </div>
        <div className="w-[750px] flex flex-wrap items-center justify-center gap-5">
          {filteredWeddingHalls.map((hall) => (
            <HallCard key={hall.id} data={hall} />
          ))}
        </div>
        <div className="hidden lg:block">
          <HallViewed />
        </div>
      </div>
    </div>
  );
}
