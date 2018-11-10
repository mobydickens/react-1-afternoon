import React, { Component } from 'react';

class FilterObject extends Component {

  constructor() {
    super()
    this.state = {
      unfilteredArray: [
        {
          firstName: "Joffrey",
          isBaratheon: false,
          age: 17
        },
        {
          firstName: "Robert",
          killedBy: "Boar",
          favoriteDrink: "Wine"
        },
        {
          firstName: "Sansa",
          hasDirewolf: false,
          age: 17
        },
        {
          firstName: "Arya",
          lastName: "Stark",
          swordName: "Needle"
        }
      ],
      userInput: [],
      filteredArray: []

    }
  }  

  updateUserInput = (value) => {
    this.setState({
      userInput: value
    })
  }

  filterArray = (array) => {
    //filter out WHOLE OBJECTS that do NOT have the given PROPERTY (User Input)
    let filtered = array.filter(obj => {
      for(let prop in obj) {
        console.log('should return prop', obj[prop])
        if(prop == this.state.userInput) {
          return true;
        };
      }
    })
    console.log("should be filtered obj", filtered);
    this.setState({
      filteredArray: filtered,
      userInput: ""
    })
  }

  render() {
    return(
        <div className="puzzleBox filterObjectPB">
          <h4>Filter Object</h4>
          <span className="puzzleText">{ JSON.stringify(this.state.unfilteredArray) }</span>
          <input type="text" className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) } value={ this.state.userInput }/>
          <button className="confirmationButton" onClick={ () => this.filterArray(this.state.unfilteredArray) }> Filter! </button>
          <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
        </div>
    )
  }
}

export default FilterObject;

/* Using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects that do have the given property */