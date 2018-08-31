import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kanban from './Kanban'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <Kanban></Kanban>
        </div>
      </div>
    );
  }
}

export default App;
