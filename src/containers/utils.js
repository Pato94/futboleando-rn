import axios from 'axios'

export const getMatches = (dispatch, accessToken) => {
  dispatch({ type: 'MATCHES_REQUESTED' })
  console.log('matches request')

  const configGraphQL = {
    url: 'http://redo-fulbo.herokuapp.com/matches/upcoming',
    method: 'get',
    headers: {
      Authorization: accessToken
    }
  }

  axios(configGraphQL).then(response => {
    dispatch({ type: 'MATCHES_SUCCESS', payload: response.data.matches })
    console.log('matches success')
  }).catch(err => {
    console.log(err)
    dispatch({ type: 'MATCHES_ERROR', error: err })
    console.log('matches error')
  })
}
