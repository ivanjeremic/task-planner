import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const events = [
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2020, 5, 30, 10, 0, 0),
    end: new Date(2020, 6, 1, 2, 0, 0)
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2020, 6, 3, 15, 30, 0),
    end: new Date(2020, 6, 4, 19, 0, 0)
  }
];

const localizer = momentLocalizer(moment);

let Timeslots = () => (
  <Calendar
    events={events}
    step={15}
    timeslots={8}
    localizer={localizer}
    defaultView={Views.WEEK}
    defaultDate={new Date()}
  />
);

export default Timeslots;
