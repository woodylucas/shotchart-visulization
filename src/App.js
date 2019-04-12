import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchPlayers, fetchPlayer } from './redux/actions'
import ShotChart from "./components/ShotChart"
import SearchBar from "./components/SearchBar"

const mapStateToProps = state => {
  return {
    player: state.player,
    players: state.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayer: () => dispatch(fetchPlayer()),
    fetchPlayers: () => dispatch(fetchPlayers())
  }
}
class App extends Component {

  componentDidMount = () => {
    // this.props.fetchPlayer()
    this.props.fetchPlayers()
  }

  render() {
    return (
      <div className="App" >
        <h1>React & D3 dashboard</h1>
        <h2>Basketball court</h2>
        <SearchBar />
        <ShotChart />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(App);
