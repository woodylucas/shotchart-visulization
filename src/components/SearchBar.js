import React from 'react'
import { connect } from 'react-redux'
import { fetchPlayers, fetchPlayer } from '../redux/actions'

class SearchBar extends React.Component {

  state = {
    value: ""
  }


  // componentDidMount =() => {
  //   this.props.fetchPlayers()
  // }

  searchHandler = (event) => {
    this.setState({value: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    // debugger
    const foundPlayer = this.props.players.filter(player => player.display_name.toLowerCase().includes(this.state.value));
    this.props.fetchPlayer(foundPlayer[0].nba_id)
  }


  render() {
    console.log('all player:',this.props.players);
    return(
      <div>
        <form className="search" onSubmit={ this.submitHandler }>
          <input
            placeholder="Search for...."
            value={ this.state.value }
            onChange={this.searchHandler}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.player,
    players: state.players
   }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers()),
    fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
