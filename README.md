Here’s the complete README code in one block for your Train Seat Booking application:

```markdown
# Train Seat Booking App

This is a Train Seat Booking application built with React for the frontend and Node.js with Express and MongoDB for the backend. The app allows users to view available seats, book seats, and manage seat bookings efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- View available seats in a grid format.
- Book up to 7 seats at a time.
- Real-time updates of seat availability.
- User-friendly interface with loading indicators.

## Technologies Used

- **Frontend:**
  - React
  - Axios
  - Tailwind CSS
  - React Icons

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - CORS
  - Body-Parser

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/train-seat-booking-app.git
   cd train-seat-booking-app
   ```

2. Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

3. Navigate to the client directory and install dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the server directory and add your MongoDB connection string:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the backend server:
   ```bash
   cd server
   node index.js
   ```

6. Start the frontend React application:
   ```bash
   cd client
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the application.
2. View the available seats and enter the number of seats you wish to book.
3. Click the "Book Seats" button to complete the booking.

## API Endpoints

### 1. Get all seats
- **Endpoint:** `GET /seats`
- **Description:** Fetches all seat data from the database.
- **Response:** An array of seat objects.

### 2. Book seats
- **Endpoint:** `POST /book`
- **Description:** Books a specified number of seats.
- **Request Body:**
  ```json
  {
    "numberOfSeats": 2
  }
  ```
- **Response:** An object containing the booked seat numbers.

## Database Structure

### Seats Collection

| Field       | Type      | Description                               |
|-------------|-----------|-------------------------------------------|
| seatNumber  | Number    | Unique identifier for the seat (1 to 80)|
| isBooked    | Boolean   | Status of the seat (true if booked)     |

### Example Document
```json
{
  "seatNumber": 1,
  "isBooked": false
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to modify any sections to better suit your project’s specifics or your personal preferences! If you need further assistance, just let me know.
