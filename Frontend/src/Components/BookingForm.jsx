// components/BookingForm.js
import React from "react"; // Importing React
import { FaTrainSubway } from "react-icons/fa6"; // Importing a subway train icon
// The BookingForm component is responsible for rendering the form used to book seats
const BookingForm = ({
  setNumberOfSeats,
  handleBooking,
  handleResetSeats,
  numberOfSeats,
}) => {
  return (
    // Form container styled with flexbox, centering the content vertically and horizontally
    <div className="booking-form flex flex-col items-center">
      {/* Heading of the application with Train icons */}
      <h1 className="text-lg sm:text-3xl font-bold uppercase text-blue-900 mb-8 flex items-center">
        <FaTrainSubway className="mr-3" />
        Train Seat Booking App
        <FaTrainSubway className="ml-3" />
      </h1>

      {/* Input for the number of seats and booking button */}
      <div className="flex justify-center items-center">
        {/* Input field for number of seats */}
        <input
          type="number"
          required
          value={numberOfSeats} // Value of the input field is the numberOfSeats state
          className="w-[140px] border-2 border-blue-900 rounded-md px-2 py-1 text-center mr-2"
          onChange={(e) => setNumberOfSeats(e.target.value)} // Updates numberOfSeats state on change
        />

        {/* Button for submitting the seat booking request */}
        <button
          type="submit"
          onClick={handleBooking} // Triggers the booking function on click
          className="border-2 px-5 sm:px-8 py-1 rounded-xl transition duration-300 border-blue-900 font-semibold text-white bg-blue-900 shadow-md hover:shadow-lg shadow-blue-800 hover:shadow-blue-800"
        >
          Book Seats
        </button>
      </div>
      <div>
        {/* Button to reset all seats */}
        <button
          onClick={handleResetSeats} // Triggers the booking function on click
          className="border-2 bg-red-600 px-5 mt-4 sm:px-8 py-1 rounded-xl transition duration-300 border-red-600 font-semibold text-white shadow-md hover:shadow-lg shadow-red-600 hover:shadow-red-600"
        >
          Reset Seats
        </button>
      </div>
    </div>
  );
};

export default BookingForm; // Exporting the BookingForm component
