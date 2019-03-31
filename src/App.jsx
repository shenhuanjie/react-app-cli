import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './conponents/Link';
import Title from './conponents/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <Link />
        </header>

      </div>
    );
  }
}

export default App;
