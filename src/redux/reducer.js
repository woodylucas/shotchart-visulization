
const initialState = {
  player: {},
  shots: [],
  players: {}

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PLAYER':
      return {
        ...state,
        player: action.payload.player,
        shots: action.payload.shots
       }
    case 'LOAD_PLAYERS':
      return {
        ...state,
        players: action.payload
       }
    default:
      return state;
  }
}
