// components/Loading.js
import React from "react"; // Importing React

// Loading component to display a visual loading indicator
const Loading = () => {
  return (
    // A div that represents a loading circle with animation
    <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
  );
};

export default Loading; // Exporting the Loading component
