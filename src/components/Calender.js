import React from "react";
import InfiniteCalendar from "react-infinite-calendar";

// Render the Calendar
const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

export default function Calendar() {
  return (
    <InfiniteCalendar
      width="100%"
      height={600}
      selected={today}
      disabledDays={[0, 6]}
      minDate={lastWeek}
    />
  );
}
