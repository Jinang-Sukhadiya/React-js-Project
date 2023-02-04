import React, { Component } from 'react';

class AdditionForm extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      result: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  };

  render() {
    return (
      <>
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
        {/* <button name="btn1" value = "Button" onClick={this.handleSubmit.bind{this}}> Click Me </button> */}
        <button type='submit'>Add</button>
        <br />
        <h3>Result: {this.state.result}</h3>
      </form>
      </>
    );
  }
}

export default AdditionForm;
