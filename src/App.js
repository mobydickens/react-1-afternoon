import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';

class App extends Component {

  constructor() {
    super()
  }

  render() {
    
    return(
      <div>
        <TopicBrowser />        
      </div>
    )
  }
}

export default App;
