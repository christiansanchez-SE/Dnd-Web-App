import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRaces } from "../components/Api";
import RaceCard from "../components/RaceCard";

function RacePage() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const savedRaces = localStorage.getItem("races");
    if (savedRaces) setRaces(JSON.parse(savedRaces));
    getAllRaces().then((races) => {
      setRaces(races);
      localStorage.setItem("races", JSON.stringify(races));
    });
  }, []);

  return (
    <div className="race_page">
      
      <div className="race_title">Race Page</div>

      <div className="race_cards">
        {races.map((race) => (
          <RaceCard key={race.index} race={race} />
        ))}
      </div>

      <div className="return">
        <Link to="/" className="button">Go back</Link>
      </div>

    </div>
  );
}

export default RacePage;
