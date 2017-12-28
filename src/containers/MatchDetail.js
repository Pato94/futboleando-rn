import React from 'react'
import { StyleSheet, Image, Text, Button, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { navigateAndCleanStack } from '../utils'
import { connect } from 'react-redux'
import axios from 'axios'

class MatchDetail extends React.Component {
  static navigationOptions = {
    title: 'Próximo Partido'
  }

  render() {
    const match = this.props.navigation.state.params.match
    const user = this.props.navigation.state.params.user

    const joinMatch = () => {
      axios({
        url: `http://redo-fulbo.herokuapp.com/match/${match.id}/subscription`,
        method: 'post',
        headers: {
          Authorization: user.accessToken
        }
      }).then(response =>
        this.props.matchJoined()
      ).catch(err =>
        this.setState({ loading: false, error: err })
      )
    }

    const matchDate = "12 de enero" // match.date
    const locationText = `${match.place}, "El Salvador 1430"`
    // const locationText = `${match.locationName}, ${match.address}`

    let callToAction
    if (!match.subscribed) {
      callToAction = <View>
        <Text style={styles.message}>¿Te la bancás?</Text>
        <Button
          title="Anotarme"
            onPress={() => joinMatch()} />
      </View>
    } else {
      callToAction = <View>
        <Text style={styles.message}>¡Ya estás anotado!</Text>
      </View>
    }

    return <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.date}>
          <Image
            style={styles.calendarImage}
            source={require("../assets/images/calendar.png")} />
          <Text style={styles.whiteText}>{matchDate}</Text>
          <View style={styles.separator} />
          <Image
            style={styles.clockImage}
            source={require("../assets/images/time_futboleando.png")} />
          <Text style={styles.whiteText}>20:00</Text>
        </View>
        <View style={styles.location}>
          <Text style={styles.locationText}>{locationText}</Text>
        </View>
      </View>
      <View style={styles.join}>
        <Image
          style={styles.logo}
          source={require("../assets/images/pelota_futbol.png")}
        />
        {callToAction}
      </View>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#50ad4c',
    padding: 20
  },
  join: {
    paddingBottom: 20
  },
  info: {
    alignItems: 'stretch'
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  location: {
    flexDirection: 'row',
    backgroundColor: '#387935',
    width: '100%',
    padding: 10,
    marginTop: 20,
    borderRadius: 3
  },
  whiteText: {
    color: 'white',
    marginLeft: 4,
    marginRight: 4,
    fontSize: 15
  },
  locationText: {
    fontSize: 17,
    color: 'white'
  },
  message: {
    color: 'white',
    marginTop: 10,
    marginBottom: 30,
    fontSize: 30,
    alignSelf: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  calendarImage: {
    width: 18,
    height: 20
  },
  clockImage: {
    width: 20,
    height: 20
  },
  separator: {
    width: 2,
    height: '60%',
    backgroundColor: '#389938',
    alignSelf: 'center',
    borderRadius: 1,
    marginLeft: 4,
    marginRight: 10
  }
})

export default connect(() => ({}), (dispatch) => ({
  matchJoined: () => {
    dispatch({ type: 'MATCH_JOINED' })
    dispatch(NavigationActions.back())
  }
}))(MatchDetail)
