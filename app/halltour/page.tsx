"use client";
import { useAtom } from "jotai";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HallSwiper from "@/components/halltour/HallSwiper";
import HallFilter from "@/components/halltour/HallFilter";
import HallViewed from "@/components/halltour/HallViewed";
import HallCard from "@/components/halltour/HallCard";
import { weddingHallList } from "@/constants";
import {
  selectedRegionAtom,
  selectedSubRegionAtom,
  selectedWeddingTypeAtom,
  selectedFlowerAtom,
} from "@/atom";

const hotKeywords = [
  "르비르모어",
  "아모르하우스",
  "더채플엣논현",
  "w웨딩",
  "목화예식장",
];

export default function Halltour() {
  const [selectedRegion] = useAtom(selectedRegionAtom);
  const [selectedSubRegion] = useAtom(selectedSubRegionAtom);
  const [selectedWeddingType] = useAtom(selectedWeddingTypeAtom);
  const [selectedFlower] = useAtom(selectedFlowerAtom);

  // 입력 중인 검색어와 실제 필터에 반영할 검색어를 분리합니다.
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");

  // 검색어가 있으면 필터와 상관없이 이름에 포함된 결과만 반환합니다.
  const filteredWeddingHalls =
    appliedSearchTerm.trim() !== ""
      ? weddingHallList.filter((hall) =>
          hall.name.toLowerCase().includes(appliedSearchTerm.toLowerCase())
        )
      : weddingHallList.filter((hall) => {
          // 1. 지역 필터: locationType의 첫 번째 값이 선택된 지역과 일치해야 함
          const regionMatch = hall.locationType[0] === selectedRegion;
          // 2. 상세지역 필터: 선택된 상세지역이 있다면 locationType 배열에 포함되어야 함
          const subRegionMatch = selectedSubRegion
            ? hall.locationType.includes(selectedSubRegion)
            : true;
          // 3. 예식 타입 필터: "전체"가 아니면 hall.hallType 문자열(쉼표 기준 분리)에서 선택한 타입 포함 여부 확인
          let weddingTypeMatch = true;
          if (selectedWeddingType !== "전체") {
            weddingTypeMatch = hall.hallType
              .flatMap((item) => item.split(","))
              .map((item) => item.trim())
              .includes(selectedWeddingType);
          }
          // 4. 생화장식 필터: "전체"가 아니면 hall.flower 배열에 선택한 값 포함 여부 확인
          const flowerMatch =
            selectedFlower === "전체" ||
            (hall.flower && hall.flower.includes(selectedFlower));

          return (
            regionMatch && subRegionMatch && weddingTypeMatch && flowerMatch
          );
        });

  // 엔터키 또는 아이콘 클릭 시 검색어 반영
  const handleSearch = () => {
    setAppliedSearchTerm(searchTerm);
  };

  return (
    <div className="mt-[80px] w-full">
      {/* 검색창 부분 */}
      <div className="w-[1400px] max-w-full h-[90px] px-[80px] mx-auto flex flex-col items-center justify-center bg-white">
        <div className="w-[500px] h-[40px] border rounded-full flex items-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
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
        <div className="w-[500px] h-[40px] flex items-center overflow-hidden">
          <div className="text-sm text-black/80 font-semibold px-3">
            인기 검색어
          </div>
          {hotKeywords.map((item, index) => (
            <div key={index} className="text-sm text-gray-500 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 슬라이드 부분 */}
      <HallSwiper />

      {/* 컨텐츠 부분 */}
      <div className="w-[1400px] mt-5 max-w-full flex items-start justify-center mx-auto">
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
