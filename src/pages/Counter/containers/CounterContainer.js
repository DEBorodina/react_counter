import React, { Component } from "react";

import CounterView from "../components/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: "even",
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      const parityType = this.state.countValue % 2 === 0 ? "even" : "odd";
      this.setState({ parityType });
    }
  }

  HandleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
  };

  HandleDecrement = () => {
    this.setState({
      countValue: this.state.countValue !== 0 ? this.state.countValue - 1 : 0,
    });
  };

  HandleReset = () => {
    this.setState({ countValue: 0 });
  };

  render() {
    return (
      <CounterView
        counterValue={this.state.countValue}
        onDecrement={this.HandleDecrement}
        onIncrement={this.HandleIncrement}
        onReset={this.HandleReset}
        parityType={this.state.parityType}
      />
    );
  }
}

export default CounterContainer;
