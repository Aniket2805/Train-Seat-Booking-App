// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios"; // Used to make HTTP requests
import SeatGrid from "./components/SeatGrid"; // Component to display seats in a grid
import BookingForm from "./components/BookingForm"; // Component for seat booking form
import Loading from "./components/Loading"; // Component to display while data is being fetched
function App() {
  // State variables
  const URL = import.meta.env.VITE_REACT_API_URL;
  const [seats, setSeats] = useState([]); // Holds the seats data
  const [numberOfSeats, setNumberOfSeats] = useState(1); // Number of seats to book, default is 1
  const [bookedSeats, setBookedSeats] = useState([]); // Array of seats that have been successfully booked
  const [loading, setLoading] = useState(false); // Loading state to show spinner when data is being fetched

  // useEffect hook to fetch seat data when the component is first rendered
  useEffect(() => {
    fetchSeats(); // Fetch seat data when component mounts
  }, []);

  // Function to fetch seat data from the backend API
  const fetchSeats = async () => {
    setLoading(true); // Set loading to true before starting data fetch
    const response = await axios.get(URL + "/seats"); // Make a GET request to fetch seat data
    setSeats(response.data); // Update the seats state with fetched data
    setLoading(false); // Set loading to false once data has been fetched
  };

  // Function to handle booking seats
  const handleBooking = async () => {
    try {
      // Make a POST request to book the requested number of seats
      const response = await axios.post(URL + "/book", {
        numberOfSeats, // Pass number of seats to book in request body
      });
      setBookedSeats(response.data.bookedSeats); // Update state with successfully booked seats
      fetchSeats(); // Re-fetch the seat data to reflect the updated booking status
    } catch (error) {
      // Display error message in case booking fails
      alert(error.response.data.message);
    }
  };

  // Render loading spinner if seats data is being fetched
  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-10 py-10">
      {loading ? (
        <Loading /> // Show loading spinner when data is being loaded
      ) : (
        <div className="app">
          {/* Booking form to allow user to enter number of seats and book */}
          <BookingForm
            numberOfSeats={numberOfSeats} // Pass current number of seats to book as a prop
            setNumberOfSeats={setNumberOfSeats} // Pass function to update number of seats as a prop
            handleBooking={handleBooking} // Pass booking function as a prop
          />
          {/* Display success message if seats have been successfully booked */}
          {bookedSeats.length > 0 && (
            <div>
              <h2 className="text-green-800 font-semibold text-md sm:text-xl mb-4 text-center">
                {/* List out the seats that have been booked */}
                Congratulation 🎉🎉! You have successfully booked the following
                seats: {bookedSeats.join(", ")}
              </h2>
            </div>
          )}
          {/* Seat grid to display all available and booked seats */}
          <SeatGrid seats={seats} />{" "}
          {/* Pass seats data to SeatGrid component */}
        </div>
      )}
    </div>
  );
}

export default App;
