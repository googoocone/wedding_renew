import { schedule } from "@/constants";
import dayjs from "dayjs";
import { useState } from "react";
import Calendar from "./Calendar";
import Todo from "./Todo";

export default function PlannerDashBoard({ data, changeMonth }: any) {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().format("MM"));

  return (
    <>
      <div className="w-full sm:max-w-[1150px] bg-white p-2 sm:p-4">
        <div className="w-full flex flex-col sm:flex-row items-start justify-center">
          <Calendar data={schedule} onMonthChange={setSelectedMonth}></Calendar>
          <Todo data={schedule} selectedMonth={selectedMonth}></Todo>
        </div>
      </div>
    </>
  );
}
