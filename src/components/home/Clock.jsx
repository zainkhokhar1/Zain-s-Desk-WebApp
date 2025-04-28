
import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTimeUnit = (unit) => {
        return unit < 10 ? `0${unit}` : unit;
    };

    // Convert 24-hour format to 12-hour format
    const hours24 = time.getHours();
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    
    const hours = formatTimeUnit(hours12);
    const minutes = formatTimeUnit(time.getMinutes());
    const seconds = formatTimeUnit(time.getSeconds());

    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="bg-[#1C1C1E] size-10 rounded-xl flex items-center justify-center border-[1px] border-[#2C2C2C]">
                <span className="text-[#FEFEFE] text-2xl font-semibold">{value}</span>
            </div>
            {/* <span className="text-[#F0F0F0] mt-2 text-sm opacity-50">{label}</span> */}
        </div>
    );

    return (
        <div className="flex items-center gap-2 relative -ml-20">
            <TimeBox value={hours} label="Hours" />
            <TimeBox value={minutes} label="Minutes" />
            <TimeBox value={seconds} label="Seconds" />
            <div className="flex flex-col items-center justify-center ml-1">
                <span className="text-[#FEFEFE] text-lg font-medium">{ampm}</span>
            </div>
        </div>
    );
}

export default Clock
