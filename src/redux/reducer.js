
const initialState = {
  player: {},
  shots: []

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PLAYER':
      return { player: action.payload.player, shots: action.payload.shots }

      case 'LOAD_PLAYERS':
      return { allPlayers: action.payload.players }
    default:
      return state;
  }
}
