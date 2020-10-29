import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Index from "./components";
import sem1 from "./components/sem1";
import Seminars from "./components/seminarier";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route exact path="/seminars" component={Seminars} />
        <Route exact path="/seminars/sem/:id" component={sem1} />
      </div>
    );
  }
}
