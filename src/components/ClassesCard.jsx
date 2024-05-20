import React from "react";

function ClassesCard({ classItem }) {
  const proficiency_choices = classItem.proficiencies.map((proficiency) => proficiency.name).join(", ");
  return (
    <div className="character-card">
      <h1>{classItem.name}</h1>
      <div><strong>Proficiency Choices: </strong>{proficiency_choices}</div>
    </div>
  );
}

export default ClassesCard;
