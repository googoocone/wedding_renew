import { PrismaClient } from "@prisma/client";
import { paramsProps } from "@/interface";
import PhotoSection from "@/components/halltour/halldetail/PhotoSection";
import HeaderSection from "@/components/halltour/halldetail/HeaderSection";
import BasicInfoSection from "@/components/halltour/halldetail/BasicInfoSection";
import IncludedSection from "@/components/halltour/halldetail/IncludedSection";
import OptionSection from "@/components/halltour/halldetail/OptionSection";
import HallInfoSection from "@/components/halltour/halldetail/HallInfoSection";
import Calculator from "@/components/halltour/halldetail/Calculator";

import { weddingHallList } from "@/constants";

const prisma = new PrismaClient();

export default async function HallDetail({ params }: paramsProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // id가 string일 수 있으므로, 비교를 위해 toString()을 사용합니다.
  const weddingHall = weddingHallList.find((hall) => hall.id.toString() === id);

  if (!weddingHall) {
    return <div>존재하지 않는 Wedding Hall 입니다.</div>;
  }

  return (
    <div className="mx-auto py-10 w-[1200px]">
      <PhotoSection data={weddingHall}></PhotoSection>
      <div className="w-full flex items-start justify-between">
        <div className="w-[750px] flex flex-col items-center justify-between">
          <HeaderSection data={weddingHall}></HeaderSection>
          <BasicInfoSection data={weddingHall}></BasicInfoSection>
          <IncludedSection data={weddingHall}></IncludedSection>
          <OptionSection data={weddingHall}></OptionSection>
          <HallInfoSection data={weddingHall}></HallInfoSection>
        </div>
        <Calculator></Calculator>
      </div>
    </div>
  );
}
