export const SEARCH = 'SEARCH'

export const search = value => {
  return { type: SEARCH, value };
}


const loadPlayers = players => {
  return {
    type: 'LOAD_PLAYERS',
    payload: players
  }
}

const loadPlayer = player => {
  return {
    type: 'LOAD_PLAYER',
    payload: player
  }
}



export const fetchPlayer = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/players/201939?season="2017-18"`)
    .then(resp => resp.json())
    .then(player => {
      console.log("fetchPlayer:", player)
      dispatch(loadPlayer(player))
    })
  }
}


export const fetchPlayers = () => {
  return(dispatch) => {
    return fetch('http://localhost:3000/players/')
    .then(resp => resp.json())
    .then(players => {
      console.log("fetchPlayers:", players)
      dispatch(loadPlayers(players))
    })
  }
}
