import React from 'react'
import { StyleSheet, Image, Text, Button, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { navigateAndCleanStack } from '../utils'

export default class MatchDetail extends React.Component {
  static navigationOptions = {
    title: 'Próximo Partido'
  }

  render() {
    const match = this.props.navigation.state.params

    const matchDate = "12 de enero" // match.date
    const locationText = `${match.place}, "El Salvador 1430"`
    // const locationText = `${match.locationName}, ${match.address}`

    return <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.date}>
          <Image
            style={styles.smallImage}
            source={require("../assets/images/calendar.png")} />
          <Text style={styles.whiteText}>{matchDate}</Text>
          <View style={styles.separator} />
          <Image
            style={styles.smallImage}
            source={require("../assets/images/calendar.png")} />
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
        <Text style={styles.message}>¿Te la bancás?</Text>
        <Button
          title="Anotarme"
            onPress={() => console.log('anotarme')} />
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
  smallImage: {
    width: 18,
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
