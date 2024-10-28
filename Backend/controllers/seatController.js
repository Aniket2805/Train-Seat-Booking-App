const Seat = require("../models/Seat"); // Import the Seat model

// Fetch all seats from the database
const getSeats = async (req, res) => {
  // Fetch all seats from the database using the Seat model
  const seats = await Seat.find().sort({ seatNumber: 1 });;

  // Respond with the fetched seats in JSON format
  res.json(seats);
};

// Handle seat booking request
const bookSeats = async (req, res) => {
  // Parse the number of seats requested for booking from the request body
  const numberOfSeats = parseInt(req.body.numberOfSeats, 10);

  // If the requested number of seats exceeds 7, respond with an error
  if (numberOfSeats > 7) {
    return res
      .status(400)
      .json({ message: "Cannot book more than 7 seats at a time" });
  }

  // If the requested number of seats is less than 1, respond with an error
  if (numberOfSeats < 1) {
    return res.status(400).json({ message: "Please book at least 1 seat" });
  }

  // Fetch all available (not booked) seats from the database and sort by seat number
  let availableSeats = await Seat.find({ isBooked: false }).sort({
    seatNumber: 1,
  });

  // If there are not enough available seats to fulfill the booking request, respond with an error
  if (availableSeats.length < numberOfSeats) {
    return res.status(400).json({ message: "Not enough seats available" });
  }

  // Group available seats by row (10 rows of 7 seats each, last row with 3 seats)
  const rows = [];
  for (let i = 0; i < 11; i++) {
    const start = i * 7 + 1; // Start of the row (seat number)
    const end = i === 10 ? start + 2 : start + 6; // End of the row (last row has 3 seats)

    // Filter available seats that belong to the current row
    rows.push(
      availableSeats.filter(
        (seat) => seat.seatNumber >= start && seat.seatNumber <= end
      )
    );
  }

  let bookedSeats = [];

  // Try to book seats in the same row if enough seats are available
  for (let row of rows) {
    // Filter the available seats in the row
    const availableInRow = row.filter((seat) => !seat.isBooked);

    // If enough seats are available in the row, book them
    if (availableInRow.length >= numberOfSeats) {
      bookedSeats = availableInRow
        .slice(0, numberOfSeats)
        .map((seat) => seat.seatNumber);

      // Mark seats as booked and save to the database
      for (let seat of availableInRow.slice(0, numberOfSeats)) {
        seat.isBooked = true;
        await seat.save();
      }

      // Return the booked seats
      return res.status(200).json({ bookedSeats });
    }
  }

  // If seats cannot be booked in one row, book nearby available seats
  for (let i = 0; i < numberOfSeats; i++) {
    bookedSeats.push(availableSeats[i].seatNumber); // Add the seat number to the booked seats
    availableSeats[i].isBooked = true; // Mark the seat as booked
    await availableSeats[i].save(); // Save the updated seat to the database
  }

  // Return the booked seats
  return res.status(200).json({ bookedSeats });
};


// Reset all seats
const resetSeats = async (req, res) => {
  try {
    await Seat.updateMany({}, { isBooked: false });
    res.status(200).json({ message: "All seats have been reset to available." });
  } catch (error) {
    res.status(500).json({ message: "Failed to reset seats.", error });
  }
};

// Export the functions to be used in routes or elsewhere
module.exports = {
  getSeats,
  bookSeats,
  resetSeats,
};
