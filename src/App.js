import React, { Component } from "react";
import "./App.css";
import AddNinja from "./components/AddNinja";
import Ninja from "./components/Ninjas";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: "Ryu", age: "25", belt: "green" },
        { name: "Ken", age: "29", belt: "black" },
        { name: "E-Honda", age: "43", belt: "pink" },
      ],
    };
  }

  addNinjaToList = (ninja) => {
    ninja.key = Math.floor(Math.random() * 10000);
    this.setState({
      ninjas: [
        //use a spread to pass all of the old ninja objects, then pass the new object into state
        ...this.state.ninjas,
        { name: ninja.name, age: ninja.age, belt: ninja.belt },
      ],
    });
  };

  newToDo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, completed: false },
      ],
    });
  };

  render() {
    return (
      <div>
        <div>Welcome</div>
        <AddNinja addNinjaToList={this.addNinjaToList} />
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}
