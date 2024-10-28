const express = require("express");
const {
  getSeats,
  bookSeats,
  resetSeats,
} = require("../controllers/seatController");
const router = express.Router();

// Route to fetch all seats
router.get("/seats", getSeats);

// Route to book seats
router.post("/book", bookSeats);

// Route to Reset seats
router.post("/reset", resetSeats);

module.exports = router;
