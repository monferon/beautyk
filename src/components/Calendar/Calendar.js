import React from "react";
import s from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={s.calendar}>
      <div className={s.calendarHeader}>
        <button className={s.left}> LEFT</button>
        <p className={s.central}> 11.12.2020</p>
        <button className={s.right}>RIGHT</button>
      </div>
      <div>FORM</div>
    </div>
  );
};

export default Calendar;
