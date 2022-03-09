import React, { Component } from "react";
import "./App.css";
import Ninja from "./components/Ninjas";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninja: [
        { name: "Ryu", age: "25", belt: "green" },
        { name: "Ken", age: "29", belt: "black" },
        { name: "E-Honda", age: "43", belt: "pink" },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>Welcome</div>
        <Ninja info={this.state.ninja} />
      </div>
    );
  }
}
