const initialState = {}

const reducer = (state = initialState, action) => {
  if (action.type === 'RECEIVE_USER_DETAILS') {
    return { ...state, userDetails: action.payload }
  } else if (action.type === 'MATCHES_SUCCESS') {
    return { ...state, matches: action.payload, loading: false }
  } else if (action.type === 'MATCHES_REQUESTED') {
    return { ...state, loading: true }
  } else if (action.type === 'MATCHES_ERROR') {
    return { ...state, loading: false, error: action.error }
  } else if (action.type === 'MATCH_CREATED') {
    return { ...state, dirty: true }
  } else if (action.type === 'MATCH_JOINED') {
    return { ...state, dirty: true }
  }

  return state
}

export default reducer
