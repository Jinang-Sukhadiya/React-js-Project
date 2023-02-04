import React, { Component } from 'react';

class LeapYearChecker extends Component {
  state = {
    year: '',
    isLeapYear: false
  };

  handleChange = event => {
    this.setState({ year: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const year = this.state.year;
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      this.setState({ isLeapYear: true });
    } else {
      this.setState({ isLeapYear: false });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter year:
          <input type="text" value={this.state.year} onChange={this.handleChange} />
        </label>
        <button type="submit">Check</button>
        {this.state.isLeapYear ? (
          <p>The year {this.state.year} is a leap year.</p>
        ) : (
          <p>The year {this.state.year} is not a leap year.</p>
        )}
      </form>
    );
  }
}

export default LeapYearChecker;
