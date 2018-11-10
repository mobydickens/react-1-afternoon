import React, { Component } from 'react';

class Sum extends Component {

  constructor() {
    super()
    this.state = {
      number1: "",
      number2: "",
      sum: null
    }
  }

  updateNum1 = (value) => {
    this.setState({
      number1: value
    })
  }

  updateNum2 = (value) => {
    this.setState({
      number2: value
    })
  }

  sum = (num1, num2) => {
    let num1num = Number(num1);
    let num2num = Number(num2);
    this.setState({
      sum: num1num + num2num,
      number1: "",
      number2: ""
    })
  }

  render() {
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="text" className="inputLine" onChange={ (e) => this.updateNum1(e.target.value) } value={ this.state.number1 }/>
        <input type="text" className="inputLine" onChange={ (e) => this.updateNum2(e.target.value) } value={ this.state.number2 }/>
        <button className="confirmationButton" onClick={ () => this.sum(this.state.number1, this.state.number2) }> Add! </button>
        <span className="resultsBox">{ this.state.sum }</span>
      </div>
    )
  }
}

export default Sum;