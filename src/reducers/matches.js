const initialState = {}

const reducer = (state = initialState, action) => {
  if (action.type === 'RECEIVE_USER_DETAILS') {
    state = { ...state, userDetails: action.payload }
  } else if (action.type === 'LOAD_MATCHES') {
    state = { ...state, matches: action.payload}
  }
  return state
}

export default reducer
