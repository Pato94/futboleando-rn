const initialState = {}

const reducer = (state = initialState, action) => {
  if (action.type === 'RECEIVE_USER_DETAILS') {
    state = { ...state, userDetails: action.payload }
  }
  return state
}

export default reducer
