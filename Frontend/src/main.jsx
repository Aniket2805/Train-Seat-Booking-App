import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-tooltip/dist/react-tooltip.css";
import App from "./App.jsx";
import "./index.css";
import { Tooltip } from "react-tooltip";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Tooltip id="my-tooltip" />
  </StrictMode>
);
