// components/SeatGrid.js
import React from "react";
import Seat from "./Seat"; // Importing the Seat component to render individual seats

// SeatGrid component takes in 'seats' as a prop
const SeatGrid = ({ seats }) => {
  return (
    // A CSS grid with 7 columns, each seat is rendered inside the grid
    <div className="grid grid-cols-7 gap-3 sm:gap-6">
      {/* Mapping through each seat in the seats array */}
      {seats.map((seat) => (
        // Rendering individual Seat components and passing seat data as a prop
        <Seat key={seat.seatNumber} seat={seat} />
      ))}
    </div>
  );
};

// Export the SeatGrid component for use in other files
export default SeatGrid;
