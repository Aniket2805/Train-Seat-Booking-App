// components/Seat.js
import React from "react"; // Importing React
import { MdEventSeat } from "react-icons/md"; // Importing seat icon
import { Tooltip } from "react-tooltip"; // Importing Tooltip component for displaying seat information

// Seat component takes a 'seat' object as a prop
const Seat = ({ seat }) => {
  return (
    // Container for each seat with dynamic tooltip and styles
    <div
      key={seat.seatNumber} // Unique key for each seat based on seatNumber
      data-tooltip-id="my-tooltip" // Tooltip ID used to bind tooltip to this div
      data-tooltip-content={
        // Tooltip content showing seat number and availability
        "Seat No. " +
        seat.seatNumber +
        " is " +
        (seat.isBooked ? "booked" : "available")
      }
      className={`seat flex flex-col justify-center cursor-pointer items-center border-2 sm:text-xl rounded-md w-10 h-10 sm:w-12 sm:h-12 ${
        seat.isBooked ? "bg-red-500" : "border-green-700" // Dynamic class based on seat availability
      }`}
    >
      {/* Rendering seat icon with dynamic color */}
      <MdEventSeat style={{ color: seat.isBooked ? "white" : "green" }} />
    </div>
  );
};

// Exporting the Seat component for use in SeatGrid
export default Seat;
