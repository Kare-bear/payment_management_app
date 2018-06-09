import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewBillComponent from './Component/NewBillComponent/NewBillComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">My Payments</h1>
        </header>
        <NewBillComponent/>
      </div>
    );
  }
}

export default App;
