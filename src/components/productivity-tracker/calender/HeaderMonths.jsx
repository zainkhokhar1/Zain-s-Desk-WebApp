import { useEffect, useRef, useState } from "react";
import SingleDateBlock from "./SingleDateBlock.jsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import getDaysInCurrentMonth from "../../../utils/getDaysInCurrentMonth.js";
import ScrollContainer from "react-indiana-drag-scroll";
import getTodayDate from "../../../utils/getTodayDate.js";

const HeaderMonths = ({ isSelected, setIsSelected }) => {
  const scrollRef = useRef(null);
  const [days, setDays] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  // Today gives us the date selected
  const [today, setToday] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect to set the current position based on the current index
  useEffect(() => {
    if (currentIndex !== 0) {
      setCurrentPosition(currentIndex * 134);
    }
    scrollContainer();
  }, [currentIndex]);

  const scrollContainer = () => {
    if (scrollRef.current !== null && currentIndex !== null) {
      const element = scrollRef.current.getElement();
      const containerWidth = element.clientWidth;
      const blockWidth = 134; // Approx width of a single block (you've assumed this already)

      const scrollLeft =
        blockWidth * currentIndex - containerWidth / 2 + blockWidth / 2;

      element.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      setCurrentPosition(scrollLeft);
      setToday(days[currentIndex].date);
    }
  };

  useEffect(() => {
    if (today !== "") {
      days.map((day, index) => {
        if (day.date === today) {
          setCurrentIndex(index);
        }
      });
    }
  }, [days]);

  useEffect(() => {
    let returnedDays = getDaysInCurrentMonth();
    setDays(returnedDays);

    // set today
    setToday(getTodayDate());
  }, []);

  if (days.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-2xl font-bold">Loading...</span>
      </div>
    );
  }

  // function to scroll the conatainer based on the click
  const handleScroll = (direction) => {
    // scroll to left side
    if (direction === -1 && currentIndex > 0) {
      if (scrollRef.current !== null) {
        const element = scrollRef.current.getElement();
        element.scrollTo({
          left: currentPosition - 134,
          behavior: "smooth",
        });
        setCurrentIndex(currentIndex - 1);
      }
    }
    // scroll to right side
    if (direction === 1) {
      if (scrollRef.current !== null && currentIndex < days.length - 1) {
        const element = scrollRef.current.getElement();
        element.scrollTo({
          left: currentPosition + 134,
          behavior: "smooth",
        });
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="flex items-center gap-1 relative">
      {/* Left arrow container */}
      <div
        onClick={() => {
          handleScroll(-1);
        }}
        className={`flex items-center justify-center group size-8 p-2 bg-white text-black rounded-md shadow shadow-white/10 hover:bg-white/95 duration-300 absolute left-1 ${
          currentIndex == 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <BsChevronLeft className="text-2xl group-hover:opacity-100 opacity-70" />
      </div>

      {/* Scrollable container for the days */}
      <ScrollContainer
        className="mt-2 overflow-x-auto scrollbar-hide w-[91%] mx-auto"
        ref={scrollRef}
      >
        <div className="flex gap-2 pb-0">
          {days.map((day, index) => (
            <SingleDateBlock
              key={index}
              index={index}
              day={day.dayName}
              date={day.date}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          ))}
        </div>
      </ScrollContainer>

      {/* Right arrow container */}
      <div
        onClick={() => {
          handleScroll(1);
        }}
        className={`flex items-center justify-center group size-8 p-2 bg-white text-black rounded-md shadow shadow-white/10 ${
          (currentIndex >= days.length - 1)
            ? "cursor-not-allowed"
            : "cursor-pointer"
        } hover:bg-white/95 duration-300 absolute right-0`}
      >
        <BsChevronRight className="text-2xl group-hover:opacity-100 opacity-70" />
      </div>
    </div>
  );
};

export default HeaderMonths;
