import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { playersGetFetch } from './redux/actions'
import * as d3 from  "d3"
import * as d3Tip from "d3-tip"
import * as d3Hexbin from "d3-hexbin"
import * as shotchart from "d3-shotchart"


const mapStateToProps = state => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playersGetFetch: () => dispatch(playersGetFetch())
  }
}
class App extends Component {

  componentDidMount = () => {
    this.props.playersGetFetch()
  }
  render() {
    const court = shotchart.court().width(600)
    console.log(this.court)
    console.log('shotchart:', shotchart.court())
    return (
      <div className="App" >
        <h1>React & D3 dashboard</h1>
        <h2>Basketball court</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
