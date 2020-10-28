import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="nav-wraper">
            <div className="left-side">
              <div className="naw-link-wraper">
                <Link to="/seminars" style={{ color: "black" }}>
                  Se våra seminarium
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-text">
          <h1>Seminarier och föreläsningar</h1>
        </div>

        <div>
          <h3>Välkommen till Seminarium AB.</h3>
        </div>
        <div className="textbox">
          <p>Här kan du hitta senaste seminariuem som söks ut på marknad.</p>
        </div>
      </>
    );
  }
}
