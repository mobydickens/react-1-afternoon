import React, { Component } from 'react';


class EvenAndOdd extends Component {

    constructor() {
        super()
    
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: []
        }
}

    handleChange = (value) => {
        this.setState({
            userInput: value
        })
    }

    evensAndOdds = (value) => {
        let even = [];
        let odd = [];
        let values = value.split(",")
        for(let i=0; i<values.length; i++) {
            if(values[i] % 2 === 0) {
                even.push(values[i]);
            } else {
                odd.push(values[i]);
            }
            
        }
        this.setState({
            evenArray: even,
            oddArray: odd,
            userInput: ""
        })
    }

    render() {
      return(
          <div className="puzzleBox evenAndOddPB">
              <h4>Evens and Odds</h4>
              <input type="text" className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } value={ this.state.userInput }/>
              <button className="confirmationButton" onClick={ () => this.evensAndOdds(this.state.userInput) }> Split Array! </button>
              <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
              <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
          </div>
      )
    }
  }

export default EvenAndOdd;

// Given a string of numbers separated by commas, split the numbers into two different arrays. 
// 
// The first being an array of all the even numbers and the second being an array of all the odd numbers.
// One parent `div` element, one `h4` element, one `input` element, one `button` element, and two `span` elements. 