import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 4, 2));

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <DayPicker
      mode="range"
      selected={selectedDate}
      onDayClick={handleDayClick}
    />
  );
}
