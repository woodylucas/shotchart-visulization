import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchPlayers, fetchPlayer } from './redux/actions'
import ShotChart from "./components/ShotChart"


const mapStateToProps = state => {
  return {
    players: state.player
  }
}

class App extends Component {

  componentDidMount = () => {
    this.props.fetchPlayer()
  }
  render() {
    const { player } = this.props

    return (
      <div className="App" >
        <h1>React & D3 dashboard</h1>
        <h2>Basketball court</h2>
        <ShotChart />
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchPlayer })(App);
