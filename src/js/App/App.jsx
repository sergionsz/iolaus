import React, { Component } from 'react';
import Menu from '../Components/Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className='white-text'>Iolaus</h1>
        <Menu />
      </div>
    );
  }
}

export default App;
