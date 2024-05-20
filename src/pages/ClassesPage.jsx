import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllClasses } from "../components/ApiClasses";
import ClassesCard from "../components/ClassesCard";

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const savedClasses = localStorage.getItem("classes");
    if (savedClasses) setClasses(JSON.parse(savedClasses));
    getAllClasses().then((classes) => {
      setClasses(classes);
      localStorage.setItem("classes", JSON.stringify(classes));
    });
  }, []);

  return (
    <div className="race_page">
      <div className="race_title">Class Page</div>
      
      <div className="race_cards">
        {classes.map((classItem) => (
          <ClassesCard key={classItem.index} classItem={classItem} />
        ))}
      </div>
      
      <div className="return">
        <Link to="/" className="button">Go back</Link>
      </div>
    </div>
  );
}

export default ClassesPage;
