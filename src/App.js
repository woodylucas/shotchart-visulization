import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchPlayers, fetchPlayer } from './redux/actions'
import ShotChart from "./components/ShotChart"
import SearchBar from "./components/SearchBar"
import ButtonAppBar from "./components/ButtonAppBar"


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
        <ButtonAppBar />
        <h1>Detailed visualization</h1>
        <h1>NBA shot selection</h1>
        <SearchBar />
        <ShotChart />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(App);
