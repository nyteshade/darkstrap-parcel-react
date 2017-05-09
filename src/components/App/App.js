import React, { Component } from 'react';
import Progress from '../Copland/Progress/Progress';
import logo from '../../imgs/logo.svg';
import '../../css/components/App/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{width:'320px', display:'inline-block'}}><Progress/></div>
      </div>
    );
  }
}

export default App;
