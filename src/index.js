import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { HousingProvider } from "./hooks/useContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HousingProvider>
      <App />
    </HousingProvider>
  </React.StrictMode>
);
