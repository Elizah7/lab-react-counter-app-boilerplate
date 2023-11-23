import React, { Component } from "react";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decreaseCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>Counter App</h1>
        <p>Counter: {counter}</p>
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}

export default CounterApp;
