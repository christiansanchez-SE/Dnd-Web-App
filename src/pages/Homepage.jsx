import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage_title">Dungeons & Dragons</div>
      <div className="race_page_link">
        <Link to="/RacePage" className="button">
          Race Page
        </Link>
      </div>

      <div className="class_page_link">
      <Link to="/ClassesPage" className="button">
          Class Page
        </Link>
      </div>

    </div>
  );
}

export default Homepage;