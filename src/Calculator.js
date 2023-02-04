import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
    operation: 'add',
  };

  handleNum1Change = (event) => {
    this.setState({
      num1: event.target.value,
    });
  };

  handleNum2Change = (event) => {
    this.setState({
      num2: event.target.value,
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      operation: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { num1, num2, operation } = this.state;
    switch (operation) {
      case 'add':
        this.setState({ result: parseInt(num1) + parseInt(num2) });
        break;
      case 'subtract':
        this.setState({ result: parseInt(num1) - parseInt(num2) });
        break;
      case 'multiply':
        this.setState({ result: parseInt(num1) * parseInt(num2) });
        break;
      case 'divide':
        this.setState({ result: parseInt(num1) / parseInt(num2) });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First number:
          <input
            type="text"
            value={this.state.num1}
            onChange={this.handleNum1Change}
          />
        </label>
        <br />
        <label>
          Second number:
          <input
            type="text"
            value={this.state.num2}
            onChange={this.handleNum2Change}
          />
        </label>
        <br />
        <label>
          Operation:
          <select value={this.state.operation} onChange={this.handleSelectChange}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
        <br />
        <button type="submit">Calculate</button>
        <br />
        <h3>Result: {this.state.result}</h3>
      </form>
    );
  }
}

export default Calculator;
