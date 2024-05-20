import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/RacePage.css";
import "./styles/Homepage.css";

import Homepage from "./pages/Homepage";
import RacePage from "./pages/RacePage";
import ClassesPage from "./pages/ClassesPage";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/racepage" element={<RacePage />} />
        <Route path="/classespage" element={<ClassesPage />} />
      </Routes>
    </div>
  );
}

export default App;

