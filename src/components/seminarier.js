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
        <p>
          - här kan du läsa om Nusmir tryck på Presentationsteknik för [mer
          info]
        </p>
        <li>
          <Link to="/sem2">KA-Dagen</Link>
        </li>
        <p>
          - här kan läsa omfggdsfgdafbgdfbfdb tgqertg gra ggar rg rgergr <br />
          gdrdrhrgherhg h herhrehre htrhthr thr
          <br />
        </p>
        <li>
          <Link to="/sem3">Våga Tala</Link>
        </li>
        <p>- här kan du läsa om fgkdsf fdgjfd gfd gdfdfm</p>
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
