import React from "react";

import "./styles/index.scss";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./i18n";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
