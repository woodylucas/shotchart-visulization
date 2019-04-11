
const initialState = {
  players: [],
  x: [],
  y: [],
  made: [],
  attempts: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PLAYERS':
      return { ...state, players: action.payload }
    default:
      return state;
  }
}
