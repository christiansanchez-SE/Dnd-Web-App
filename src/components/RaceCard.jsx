import React from "react";

function RaceCard({ race }) {
  const languageNames = race.languages.map((language) => language.name).join(", ");
  const allTraits = race.traits.map((trait) => trait.name).join(", ");
  const subRaces = race.subraces.length > 0 ? race.subraces.map((subrace) => subrace.name).join(", ") : "None";
  const abilityBonuses = race.starting_proficiencies.map((proficiency) => proficiency.name).join(", ") || "None";

  return (
    <div className="character-card">
      <div className="raceName">
        <h1>{race.name}</h1>
      </div>
      <div className="subRace">
        <strong>Subraces: </strong>{subRaces}
      </div>
      <div className="align">
        <p>
          <strong>Alignment:</strong> {race.alignment}
        </p>
      </div>
      <div className="ageDes">
        <p>
          <strong>Lifespan: </strong>{race.age}
        </p>
      </div>
      <div className="languages">
        <p><strong>Languages: </strong>{languageNames}</p>
        <ul>
          <li>Language Description: {race.language_desc}</li>
        </ul>
      </div>
      <div className="traits">
        <ul>
          <li><strong>Traits: </strong>{allTraits || "None"}</li>
        </ul>
      </div>
      <div className="starting_proficiencies">
        <ul>
          <li><strong>Ability Bonuses: </strong>{abilityBonuses}</li>
        </ul>
      </div>
      <div className="speed">
        <strong>Speed: </strong>{race.speed}
      </div>
    </div>
  );
}

export default RaceCard;
