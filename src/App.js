import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from  "d3"
import d3Tip from "d3-tip"
import d3Hexbin from "d3-hexbin"
import shotchart from "d3-shotchart"

class App extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/players')
    .then(resp => resp.json())
    .then(players => this.setState( { players } ))
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div id='shot-chart'>
        </div>

      </div>
    );
  }
}

export default App;
