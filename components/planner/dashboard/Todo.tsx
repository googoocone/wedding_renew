import dayjs from "dayjs";
import { useState } from "react";
import { AiOutlineClockCircle, AiOutlinePlusCircle } from "react-icons/ai";

interface TodoItem {
  date: string;
  title: string;
  time: string;
  description: string;
  color: string;
}

export default function Todo({
  data,
  selectedMonth,
}: {
  data: TodoItem[];
  selectedMonth: string;
}) {
  const [selectedItem, setSelectedItem] = useState<TodoItem | null>(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  const handleClick = (item: TodoItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div
      className="w-full sm:w-2/5  border-l-[1px] p-4 flex flex-col gap-4  "
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        @keyframes popup {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div className="w-full h-[20px] sm:h-[40px]  text-xl font-semibold mb-4 flex items-center justify-start pl-2">
        To Do List
      </div>
      <div className="w-full h-[500px] flex flex-col items-center justify-start overflow-y-auto gap-4">
        {data.map((item, index) => {
          if (dayjs(item.date).format("MM") === selectedMonth) {
            return (
              <div key={index} className="w-full h-[80px]">
                <div
                  className="w-full h-[80px] flex cursor-pointer hover:bg-gray-50"
                  onClick={() => handleClick(item)}
                  key={index}
                >
                  <div
                    className="w-1 h-[80%]  mr-3"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="w-full flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500 mb-1">
                        {item.date}
                      </div>
                      <div className="flex text-sm w-16 items-center gap-1">
                        <AiOutlineClockCircle className="w-3 h-3" />
                        <div className="text-md text-gray-500">{item.time}</div>
                      </div>
                    </div>
                    <div className="flex my-1 justify-between items-center">
                      <div className="text-xl font-bold text-gray-800 truncate max-w-[28ch]">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-2 w-full border-dotted border-b border-gray-300"></div>
              </div>
            );
          }
        })}
      </div>
      <div
        onClick={() => setIsAddEventOpen(true)}
        className="w-full h-[50px] rounded-xl flex items-center justify-center text-2xl bg-[#fff2ec] text-[#e84500] cursor-pointer hover:text-3xl transition-all duration-300"
      >
        <AiOutlinePlusCircle></AiOutlinePlusCircle>
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center shadow-lg">
          <div
            className="bg-white p-4 rounded-xl shadow-lg sm:w-[400px] relative w-[90%]"
            style={{ animation: "popup 0.3s ease-out" }}
          >
            <h2 className="text-xl font-bold mt-2 mb-1">
              {selectedItem.title}
            </h2>
            <div className="w-full h-4 flex items-center justify-start gap-4 text-md text-gray-500 mt-3 mb-4">
              {selectedItem.date}
              {"  "}
              {
                ["일", "월", "화", "수", "목", "금", "토"][
                  new Date(selectedItem.date).getDay()
                ]
              }
              요일
              <div className="flex items-center gap-1">
                <AiOutlineClockCircle></AiOutlineClockCircle>
                {selectedItem.time}
              </div>
            </div>

            <p className="text-sm text-gray-800 mb-4 text-justify">
              {selectedItem.description}
            </p>
            <div className="flex justify-end ">
              <button
                onClick={handleClose}
                className=" text-white text-sm px-2 py-1 rounded-md bg-[#ffc8bd] hover:bg-[#ff8a8a]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
      {isAddEventOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center shadow-lg">
          <div
            className="bg-white p-4 rounded-xl shadow-lg sm:w-[400px] h-[500px] relative w-[90%]"
            style={{ animation: "popup 0.3s ease-out" }}
          >
            <input
              className="text-xl font-bold mt-2 mb-1 w-full h-[50px] focus:outline-none"
              placeholder="일정 제목"
              autoFocus
            ></input>
            <input
              type="date"
              className="w-full h-4 flex items-center justify-start gap-4 text-md text-gray-500 mt-3 mb-4"
            />
            <input
              type="time"
              className="w-full h-4 flex items-center justify-start gap-4 text-md text-gray-500 mt-3 mb-4"
            />

            <textarea
              placeholder="내용을 입력해 주세요"
              className="text-sm p-2 text-gray-800 mb-4 text-justify w-full h-[290px] border border-gray-200 focus:outline-none placeholder:text-top"
            />
            <div className="flex justify-end gap-3 ">
              <button
                onClick={() => setIsAddEventOpen(false)}
                className=" text-white text-sm px-2 py-1 rounded-md bg-[#ffc8bd] hover:bg-[#ff8a8a]"
              >
                저장
              </button>
              <button
                onClick={() => setIsAddEventOpen(false)}
                className=" text-white text-sm px-2 py-1 rounded-md bg-[#ffc8bd] hover:bg-[#ff8a8a]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
