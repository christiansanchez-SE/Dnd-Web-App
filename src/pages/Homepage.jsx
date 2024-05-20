import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h3>Homepage</h3>
      <div>
        <Link to="/racepage">
          <h3>RacePage</h3>
        </Link>
      </div>
      <div className="return">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default Homepage;
