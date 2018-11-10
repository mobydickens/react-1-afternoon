import React, { Component } from 'react';

class Palindrome extends Component {

  constructor() {
    super()
    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  handleChange = (value) => {
    this.setState({
        userInput: value
    })
  }

  palindrome = (value) => {
    let forwards = value.toLowerCase().split('');
    let forwardjoin = forwards.join('');
    let reversed = forwards.reverse().join('');
    if(forwardjoin == reversed) {
      this.setState({
        palindrome: value + " is a palindrome!",
        userInput: ""
      })
    } else {
      this.setState({
        palindrome: value + " not a palindrome!",
        userInput: ""
      })
    }
  }

  render() {
    return(
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input type="text" className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } value={ this.state.userInput } />
        <button className="confirmationButton" onClick={ () => this.palindrome(this.state.userInput) }> Is it a Palindrome? </button>
        <span className="resultsBox palindromegRB">{ JSON.stringify(this.state.palindrome) }</span>
      </div>
    )
  }
}

export default Palindrome;
