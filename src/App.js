import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchPlayers, fetchPlayer } from './redux/actions'
import ShotChart from "./components/ShotChart"
import SearchBar from "./components/SearchBar"

const mapStateToProps = state => {
  return {
    player: state.player
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayer: () => dispatch(fetchPlayer())
  }
}
class App extends Component {

  componentDidMount = () => {
    this.props.fetchPlayer()
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


export default connect(mapStateToProps, { fetchPlayer } )(App);
