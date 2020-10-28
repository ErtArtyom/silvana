import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Seminars() {
  return (
    <div>
      <ul className="semlist">
        <li>
          <Link to="/sem1">Crystal Reports</Link>
        </li>
        <p>- Här kan du läsa mer om Crystal Reports.</p>
        <li>
          <Link to="/sem2">KA-Dagen</Link>
        </li>
        <p>
          - Här kan du läsa mer om hur KA-Dagen går till.
          <br />
        </p>
        <li>
          <Link to="/sem3">Våga Tala</Link>
        </li>
        <p>- Här kan du läsa mer om....</p>
        <li>
          <Link to="/" style={{ fontSize: "25px" }}>
            HOME
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Seminars;
