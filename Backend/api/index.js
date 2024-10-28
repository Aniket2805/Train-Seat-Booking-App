require("dotenv").config();
const express = require("express");
const connectDB = require("../config/db");
const seatRoutes = require("../routes/seatRoute");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  return res.json("Hello World!");
});

// CORS options to allow requests from frontend running on port 5500
const corsOptions = {
  origin: process.env.ORIGIN, // Allow only requests from this origin
  methods: "GET,POST", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/", seatRoutes);

// Initialize seats when the server starts
const { initializeSeats } = require("../controllers/seatController");
initializeSeats();

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
