
import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isToday: day === new Date().getDate() && 
                 currentDate.getMonth() === new Date().getMonth() && 
                 currentDate.getFullYear() === new Date().getFullYear()
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false
      });
    }

    return days;
  };

  return (
    <div className="bg-[#1C1C1C] border flex flex-col border-white/5 col-span-2 rounded-xl min-h-71 p-3">
      {/* Calendar header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-white/10 rounded-full">
          <IoChevronBack className="text-white/70 text-2xl" />
        </button>
        <h2 className="text-white/90 text-2xl font-medium">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth} className="p-1 hover:bg-white/10 rounded-full">
          <IoChevronForward className="text-white/70 text-2xl" />
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-sm text-[#F1FCC2]">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-3">
        {generateCalendarDays().map((day, index) => (
          <div
            key={index}
            className={`
              text-center py-2 text-sm rounded-md cursor-pointer
              ${day.isCurrentMonth ? 'text-white/90' : 'text-white/30'}
              ${day.isToday ? 'bg-white !text-black' : 'hover:bg-white/10'}
            `}
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
