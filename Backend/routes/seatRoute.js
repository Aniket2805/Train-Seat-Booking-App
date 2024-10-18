const express = require("express");
const { getSeats, bookSeats } = require("../controllers/seatController");
const router = express.Router();

// Route to fetch all seats
router.get("/seats", getSeats);

// Route to book seats
router.post("/book", bookSeats);

module.exports = router;
