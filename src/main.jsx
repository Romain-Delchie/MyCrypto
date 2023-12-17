import React from "react";
import ReactDOM from "react-dom/client";
import { CryptoProvider } from "./context/CryptoContext";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CryptoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CryptoProvider>
  </React.StrictMode>
);
