import React from 'react'
import { connect } from 'react-redux'
import { fetchPlayers, fetchPlayer } from '../redux/actions'
import { AutoComplete, Input, Icon } from "antd";
import { PROFILE_PIC_URL_PREFIX, DEFAULT_PLAYER_INFO } from "../constants";
import ReactModal from 'react-modal';

console.log(DEFAULT_PLAYER_INFO)

const Option = AutoComplete.Option;

class SearchBar extends React.Component {

  state = {
    value: "",
    foundPlayer: [],
    isOpen: false
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  submitHandler = (event) => {
    const searchValue = this.state.value
    event.preventDefault()

    const foundPlayer = this.props.players.filter(player => {
      let searchQuery = searchValue[searchValue.length - 1] === " " ? searchValue.trim() : searchValue
      return player.display_name
      .toLowerCase()
      .includes(searchQuery
      .toLowerCase())
    });
      this.props.fetchPlayer(foundPlayer[0].nba_id)
      this.setState({ foundPlayer })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }


  render() {
    const { foundPlayer } = this.state
    const { isOpen } = this.state
    const playerStats = foundPlayer.map(player =>  player.display_name )
    const playerImage = foundPlayer.map(player =>  <img key={player.nba_id} src={ `${PROFILE_PIC_URL_PREFIX}/${player.nba_id}.png`} alt="playerPic" />)
    const customStyles = {
  content : {
    width: '50vw',
    height: '50vh',
    top: '20vh',
    left: '25vw',
    textAlign: 'center'
  }
};
    return(
      <div>
        <form className="search" onSubmit={ this.submitHandler }>
          <input
            placeholder="Search for...."
            value={ this.state.value }
            onChange={this.changeHandler}
          />
        </form>
        <div className="player-image">
          { playerImage }
        </div>
        <a href="#" onClick={ this.toggleModal }>Player Info</a>
        <ReactModal
          isOpen={ isOpen }
          onRequestClose={ this.toggleModal }
          style={ customStyles }
        >
          { playerImage }
          <h2>2017-2018</h2>
          <h2>{playerStats}</h2>
        </ReactModal>
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
