import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-tooltip/dist/react-tooltip.css";
import App from "./App.jsx";
import "./index.css";
import { Tooltip } from "react-tooltip";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Tooltip id="my-tooltip" />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  </StrictMode>
);
