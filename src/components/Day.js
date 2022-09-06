import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";


export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);


 
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
         
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
         
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
         
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
