const express = require("express");
const connectDB = require("../config/db");
const seatRoutes = require("../routes/seatRoute");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", seatRoutes);

// Initialize seats when the server starts
const { initializeSeats } = require("../controllers/seatController");
initializeSeats();

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
