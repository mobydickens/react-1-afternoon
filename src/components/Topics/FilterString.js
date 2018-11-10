import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {
      super()
      this.state = {
        unFilteredArray: ["These violent delights have violent ends", "We do not sow", "For the cant!", "This world...", "This is how the world ends"],
        userInput: "",
        filteredArray: []
      }
    }

    updateUserInput = (value) => {
      this.setState({
        userInput: value
      })
    }

    filterArray = (str) => {
      let modifiedStr = str.toLowerCase(); 
      let filtered = this.state.unFilteredArray.filter(arrStr => {
        let lowerArrStr = arrStr.toLowerCase();
        if(lowerArrStr.includes(modifiedStr)) {
          return true;
        };
      });
      this.setState({
        filteredArray: filtered,
        userInput: ""
      })
    }

    render() {
      return(
         <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray) }</span>
            <input type="text" className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) } value={ this.state.userInput}/>
            <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter! </button>
            <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredArray) }</span>
         </div>
      )
    }
  }

export default FilterString;