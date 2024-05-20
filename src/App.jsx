import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import RacePage from "./pages/RacePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/racepage" element={<RacePage />} />
      </Routes>
    </div>
  );
}

export default App;

