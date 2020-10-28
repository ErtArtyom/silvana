import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Index from "./components";
import sem1 from "./components/sem1";
import sem2 from "./components/sem2";
import sem3 from "./components/sem3";
import Seminars from "./components/seminarier";

export default class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Index} />
        <Route exact path="/seminars" component={Seminars} />
        <Route exact path="/sem1" component={sem1} />
        <Route exact path="/sem2" component={sem2} />
        <Route exact path="/sem3" component={sem3} />
      </>
    );
  }
}
