const loadPlayers = players => {
  return {
    type: 'LOAD_PLAYERS',
    payload: players
  }
}


export const playersGetFetch = () => {
  return(dispatch) => {
    return fetch('http://localhost:3000/players/')
    .then(resp => resp.json())
    .then(players => {
      console.log("playersGetFetch:", players)
      dispatch(loadPlayers(players))
    })
  }
}
