import React, { useState } from "react";
// Datepicker
import DatePicker from "react-datepicker";
// Datepicker Css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// Icons
import { SlCalender } from "react-icons/sl";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      {/* Icons */}
      <div className="absolute z-10 pr-8">
        <div>
          <SlCalender className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
