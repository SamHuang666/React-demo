import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Greeting";
import Greeting from "./Greeting";
import { COPYFILE_FICLONE_FORCE } from "constants";
import { parseDuration, padLeft } from "./utilities/index.js";
import SignupForm from "./SignupForm";
class App extends Component {
  constructor() {
    super();
    this.state = { duration: 0, isRunnig: false };
  }

  handleStart = () => {
    this.setState({ duration: 0 });
    this.timerID = setInterval(() => {
      const newDuration = this.state.duration + 1000;
      this.setState({ duration: newDuration });
    }, 1000);
  };
  handleStop = () => {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  };
  ShowTime(event) {
    alert("Current time is:" + new Date().toLocaleTimeString());
  }
  render() {
    const { seconds, minutes } = parseDuration(this.state.duration);
    return (
      <div>
        <h2>
          {padLeft(minutes)}:{padLeft(seconds)}
        </h2>
        <button onClick={this.handleStart} disabled={this.state.isRunnig}>
          Start
        </button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.ShowTime}>Click me</button>
        <Greeting name="Sam" />
        <SignupForm />
      </div>
    );
  }
}

export default App;
