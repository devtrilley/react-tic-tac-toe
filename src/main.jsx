import React from 'react';
import ReactDOM from "react-dom/client";
import Game from "./Game";
import "./App.scss"; // Keep styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
