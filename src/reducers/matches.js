const initialState = {}

const reducer = (state = initialState, action) => {
  if (action.type === 'RECEIVE_USER_DETAILS') {
    return { ...state, userDetails: action.payload }
  } else if (action.type === 'LOAD_MATCHES') {
    return { ...state, matches: action.payload, dirty: false }
  } else if (action.type === 'MATCH_CREATED') {
    return { ...state, dirty: true }
  }
  return state
}

export default reducer
