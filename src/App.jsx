import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import RacePage from "./pages/RacePage";

function App() {
  return (
  <div className="app">
    <h1>App Page</h1>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/RacePage" element={<RacePage/>}/>
    </Routes>
  </div>
)
}

export default App;
