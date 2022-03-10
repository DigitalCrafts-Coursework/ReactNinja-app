import React, { Component } from "react";

export default class AddNinja extends Component {
  constructor(props) {
    super(props);
    this.state = { ninja: { name: null, age: null, belt: null } };
  }

  handleChange = () => {
    this.setState({
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      belt: document.getElementById("belt").value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinjaToList(this.state);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={
            this.handleSubmit /*() => this.props.addNinjaToList(this.state)*/
          }
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={this.handleChange}
            // value={this.state.ninja}
          />
          <label htmlFor="age">Age</label>
          <input id="age" type="text" onChange={this.handleChange} />
          <label htmlFor="belt">Belt</label>
          <input id="belt" type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
