import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRaces } from "../components/Api";
import RaceCard from "../components/RaceCard";

function RacePage() {
  const [races, setRaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedRaces = localStorage.getItem("races");
    if (savedRaces) setRaces(JSON.parse(savedRaces));

    getAllRaces()
      .then((races) => {
        setRaces(races);
        localStorage.setItem("races", JSON.stringify(races));
      })
      .catch((err) => setError("Failed to fetch races"));
  }, []);

  return (
    <div>
      <h3>Race Page</h3>
      <div className="return">
        <Link to="/">Go back</Link>
      </div>
      {error && <p>{error}</p>}
      {races.map((race) => (
        <RaceCard key={race.index} race={race} />
      ))}
    </div>
  );
}

export default RacePage;
